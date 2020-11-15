let bgBlack;
let text;
let retrybutton;

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
    }
    create() {
        bgBlack = this.add.image(400,500,'bgBlack');
        text = this.add.image(400,100,'text');
        retrybutton = this.add.image(400,500,'retrybutton');
        retrybutton.setInteractive();
        retrybutton.on('pointerup',() => {
            this.scene.start('GameScene');
        });
    }
    update() {
        
    }
}
export default GameoverScene;