let backgroundwin;
let textwin;
let buttonwin;
let musicwin;
let textwinconsole;

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
        this.load.audio('musicwin','music/GameWinSFX.wav');
    }
    create() {
        backgroundwin = this.add.image(400,300,'bgwin').setScale(0.75);
        textwin = this.add.image(400,100,'textwin');
        textwinconsole = this.add.text(200,275,"your death show in computer\nlet you click f12 and click to console",{ font: "24px Arial", fill: "#ffffff", align: "center"});
        buttonwin = this.add.image(400,500,'buttonwin');
        buttonwin.setInteractive();
        buttonwin.on('pointerup',() => {
            location.reload();
            musicwin.stop();
        });
        musicwin = this.sound.add('musicwin');
        musicwin.play();
    }
    update() {
        
    }
}
export default WinScene;