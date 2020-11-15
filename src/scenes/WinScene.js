let backgroundwin;
let textwin;
let buttonwin;
let musicwin1,musicwin2;

class WinScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'WinScene'
        });
    }

    preload() {
        this.load.image('bgwin','image/Win.png');
        this.load.image('textwin','image/GameWinText.png');
        this.load.image('buttonwin','image/PlayAgainButton.png');
        this.load.audio('musicwin1','music/yay.mp3');
        this.load.audio('musicwin2','music/epicwin.mp3');
    }
    create() {
        backgroundwin = this.add.image(400,300,'bgwin').setScale(0.75);
        textwin = this.add.image(400,100,'textwin');
        buttonwin = this.add.image(400,500,'buttonwin');
        buttonwin.setInteractive();
        buttonwin.on('pointerup',() => {
            location.reload();
            musicwin1.stop();
            musicwin2.stop();
        });
        musicwin1 = this.sound.add('musicwin1');
        musicwin1.play();
        musicwin2 = this.sound.add('musicwin2');
        musicwin2.play();
    }
    update() {
        
    }
}
export default WinScene;