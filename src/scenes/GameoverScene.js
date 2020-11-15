let bgBlack;
let text;
let retrybutton;
let showDeathCount;
let deathCount = 0;
let musicgameover;

class GameoverScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameoverScene'
        });
    }

    preload() {
        this.load.image('bgBlack','image/GameOverBG.png');
        this.load.image('text','image/GameOverText.png');
        this.load.image('retrybutton','image/RetryButton.png');
        //upload audio
        this.load.audio('musicgameover','music/rickroll.mp3');
    }
    create() {
        bgBlack = this.add.image(400,500,'bgBlack');
        text = this.add.image(400,100,'text');
        retrybutton = this.add.image(400,500,'retrybutton');
        deathCount++;
        showDeathCount = this.add.text(225,250,"your death : 0",{ font: "60px Arial", fill: "#ffffff"});
        showDeathCount.setText("your death : " + deathCount);
        retrybutton.setInteractive();
        retrybutton.on('pointerup',() => {
            this.scene.start('GameScene');
            musicgameover.stop();
        });
        musicgameover = this.sound.add('musicgameover');
        musicgameover.play();
    }
    update() {
        
    }
}
export default GameoverScene;