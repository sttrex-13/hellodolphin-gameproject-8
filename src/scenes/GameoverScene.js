let bg;
let text;
let button;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','image/GameOverBG.png');
        this.load.image('text','image/GameOverText.png');
        this.load.image('button','image/RetryButton.png');
    }
    create() {
        bg = this.add.image(400,100,'bg');
        text = this.add.image(400,100,'text');
        button = this.add.image(400,500,'button');
    }
    update() {
        if(button.isDown){
            
        }
    }
}
export default GameScene;