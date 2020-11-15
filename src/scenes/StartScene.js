let background;
let foreground;
let midground;
let logo;
let button;
let musicbegin1,musicbegin2;

class StartScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'StartScene'
        });
    }

    preload() {
        this.load.image('bg','image/BG Main.png');
        this.load.image('fg','image/Foreground.png');
        this.load.image('mg','image/BG Mid.png');
        this.load.image('logo','image/Logo.png');
        this.load.image('button','image/PlayButton.png');
        this.load.audio('musicbegin1','music/watersplash.mp3');
        this.load.audio('musicbegin2','music/rickroll.mp3');
    }
    create() {

        background = this.add.image(400,300,'bg').setScale(0.75);
        midground = this.add.tileSprite(0,0,2000,800,'mg').setOrigin(0,0).setScale(0.75);
        foreground = this.add.tileSprite(0,0,2000,800,'fg').setOrigin(0,0).setScale(0.75);
        logo = this.add.image(400,100,'logo');
        musicbegin1 = this.sound.add('musicbegin1');
        musicbegin1.play();
        musicbegin2 = this.sound.add('musicbegin2');
        musicbegin2.play();
        button = this.add.image(400,400,'button');
        button.setInteractive();
        button.on('pointerup',() => {
            this.scene.start('GameScene');
            musicbegin1.stop();
            musicbegin2.stop();
        });
        
    }
    update() {
        foreground.tilePositionX += 2.5;
        midground.tilePositionX += 1;
    }
}
export default StartScene;