let background;
let foreground;
let logo;
let button;

class StartScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'StartScene'
        });
    }

    preload() {
        this.load.image('bg','image/BG Main.png');
        this.load.image('fg','image/Foreground.png');
        this.load.image('logo','image/Logo.png');
        this.load.image('button','image/PlayButton.png');
    }
    create() {
        background = this.add.image(400,300,'bg').setScale(0.75);
        foreground = this.add.tileSprite(0,0,2000,800,'fg').setOrigin(0,0).setScale(0.75);
        logo = this.add.image(400,100,'logo');
        button = this.add.image(400,400,'button');
        button.setInteractive();
        button.on('pointerup',() => {
            this.scene.start('GameScene');
        });
    }
    update() {
        foreground.tilePositionX += 2.5;
    }
}
export default StartScene;