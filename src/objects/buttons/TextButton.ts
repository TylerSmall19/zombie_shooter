export class TextButton extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, style: Phaser.GameObjects.TextStyle, callback: Function) {
    super(scene, x, y, text, style);

    this.setInteractive({ useHandCursor: true })
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.enterButtonRestState() )
      .on('pointerdown', () => this.enterButtonActiveState() )
      .on('pointerup', () => {
        this.enterButtonHoverState();
        callback();
      });
  }

  enterButtonHoverState() {
    this.setStyle({ fill: '#FCF656'});
  }

  enterButtonRestState() {
    this.setStyle({ fill: '#ffffff'});
  }

  enterButtonActiveState() {
    this.setStyle({ fill: '#EEA93D' });
  }
}