let background ;
let player ;
let enemy1,enemy1Group,enemy1Event ;
let enemy2,enemy2Group,enemy2Event ;
let deathCount = 0 ;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        // set background
        this.load.image('bg','image/sky.png');
        // set spritesheet
        this.load.spritesheet('player','image/character.png',{frameWidth: 416,frameHeight:454});
        // set enemy1
        this.load.spritesheet('enemy1','image/enemy1.png',{frameWidth: 2232,frameHeight: 2232});
        // set enemy2
        this.load.spritesheet('enemy2','image/enemy2.png',{frameWidth: 410,frameHeight: 310});
    }

    create() {
        // add background
        background = this.add.image(300,200,'bg').setScale(5);
        // movement background
        background = this.add.tileSprite(0,0,800,600,'bg').setOrigin(0,0);
        // player
        player = this.physics.add.sprite(300,800,'player').setScale(0.2);
        // player animation
        this.anims.create({
            key : 'playerAni',
            frames: this.anims.generateFrameNumbers('player',{
                start : 0,
                end : 3
            }),
            framerate : 10,
            repeat : -1
        })
        // collide player
        player.setCollideWorldBounds(true);

        // enemy1
        enemy1 = this.physics.add.sprite(100000,0,'enemy1');
        // enemy1 animation
        this.anims.create({
            key : 'enemy1Ani',
            frames: this.anims.generateFrameNumbers('enemy1',{
                start: 0,
                end: 2
            }),
            framerate : 10,
            repeat : -1
        })

        // enemy1 group
        enemy1Group = this.physics.add.group();

        //timeline enemy1
        enemy1Event = this.time.addEvent({
            delay:1000,
            callback: function(){
                enemy1 = this.physics.add.sprite(800,Math.floor(Math.random() *600),'enemy1').setScale(0.1).setSize(1000,1000).setOffset(550,600);
                enemy1Group.add(enemy1);
                enemy1Group.setVelocityX(-200);
                this.physics.add.collider(player,enemy1Group);
                this.physics.add.overlap(player,enemy1Group,()=>{
                    player.destroy();
                    deathCount++;
                    console.log(deathCount);
                    enemy1Event.paused = true;
                    enemy2Event.paused = true;
                });
            },
            startAt : 1000,
            callbackScope: this,
            loop: true,
            paused: false,
            repeat: 10
        })

        // enemy2
        enemy2 = this.physics.add.sprite(100000,0,'enemy2');

        // enemy2 animation
        this.anims.create({
            key : 'enemy2Ani',
            frames: this.anims.generateFrameNumbers('enemy2',{
                start: 0,
                end: 7
            }),
            framerate : 10,
            repeat : -1
        })

        // enemy2 group
        enemy2Group = this.physics.add.group();
        
        // timeline enemy2
        enemy2Event = this.time.addEvent({
            delay: 3000,
            callback: function(){
                enemy2 = this.physics.add.sprite(800,Math.floor(Math.random() *600),'enemy2').setScale(0.5).setSize(120,120).setOffset(150,145);
                enemy2Group.add(enemy2);
                enemy2Group.setVelocityX(-500);
                this.physics.add.collider(player,enemy2Group);
                this.physics.add.overlap(player,enemy2Group,()=>{
                    player.destroy();
                    deathCount++;
                    console.log(deathCount);
                    enemy1Event.paused = true;
                    enemy2Event.paused = true;
                });
            },
            startAt : 10000,
            callbackScope: this,
            loop: true,
            paused: false,
            repeat: 10
            
        })
    }

    update() {
        // background movement
        background.tilePositionX -= 2

        // controll your player in x and y axis
        this.input.on('pointermove',(pointer) =>
        {
            player.x = pointer.x
            player.y = pointer.y
        })

         // controll animation
         player.anims.play('playerAni',true);
         enemy1.anims.play('enemy1Ani',true);
    }
}

export default GameScene;
