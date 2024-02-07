import { Scene } from 'phaser';
import { RENDER_CONSTANTS } from '../config/render_constants';

export class Game extends Scene
{
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text : Phaser.GameObjects.Text;
  keyUp: Phaser.Input.Keyboard.Key;
  keyDown: Phaser.Input.Keyboard.Key;
  keyLeft: Phaser.Input.Keyboard.Key;
  keyRight: Phaser.Input.Keyboard.Key;

  playerGroup: Phaser.GameObjects.Container;

  constructor ()
  {
    super('Game');
  }

  update() {
    if (this.keyUp.isDown) {
      this.physics.accelerateTo(this.playerGroup, this.playerGroup.body?.position.x || 0, 0, 100)
    } else {
      this.physics.accelerateTo(this.playerGroup, 0, 0, -100)
      // this.playerGroup.
      console.log('Set acceleration to 0')
      console.log(this.playerGroup.body?.velocity)
    }

    this.physics.config.debug = true
  }

  init()
  {
    this.physics.world.gravity.set(0, 0);

    if (this.input.keyboard) {
      this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    };

    this.keyUp.isDown
  }

  create ()
  {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor('FCF656');

    const character = this.add.circle(0, 0, 20, 1);
    const playerGroup = this.add.container(RENDER_CONSTANTS.halfGameWidth, 900, [character])
    playerGroup.setSize(character.displayWidth, character.displayHeight);

    this.playerGroup = this.physics.add.existing(playerGroup);
    this.playerGroup.setInteractive();

    this.input.setDraggable(this.playerGroup)
    this.playerGroup.on('drag', (e: any, x: number, y: number) => {
      playerGroup.setPosition(x, y)
    })
    this.physics.
    // (this.input.keyboard || {}).enabled = true
    // playerGroup.on

    // this.msg_text = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
    //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
    //     stroke: '#000000', strokeThickness: 8,
    //     align: 'center'
    // });
    // this.msg_text.setOrigin(0.5);

    // this.input.once('pointerdown', () => {

    //   this.scene.start('GameOver');

    // });
  }
}
