import { Scene } from 'phaser';
import { RENDER_CONSTANTS } from '../config/renderConstants';
import { IMAGE_CONSTANTS } from '../config/imageConstants';

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
    const physicsBody = this.playerGroup.body as Phaser.Physics.Arcade.Body;
    physicsBody.setMaxVelocity(950);

    if (this.keyLeft.isDown) {
      physicsBody.setAccelerationX(-18000)
      physicsBody.setVelocityX(-950);
    }

    if (this.keyRight.isDown) {
      physicsBody.setAccelerationX(18000)
      physicsBody.setVelocityX(950);
    }

    if( !this.keyDown.isDown 
      && !this.keyRight.isDown
      && !this.keyLeft.isDown 
      && !this.keyUp.isDown
      ) {
      physicsBody.stop()
    }
  }

  init()
  {
    this.physics.world.gravity.set(0, 0);
    this.physics.world.setBounds(0, 0, RENDER_CONSTANTS.gameWidth, RENDER_CONSTANTS.gameHeight)

    if (this.input.keyboard) {
      this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    };
  }

  create ()
  {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor('FCF656');

    const sprite = this.add.sprite(0, 0, IMAGE_CONSTANTS.PLAYER_SPRITE);
    sprite.setScale(.5);

    const playerGroup = this.add.container(RENDER_CONSTANTS.halfGameWidth, 900, [sprite]);
    playerGroup.setSize(sprite.displayWidth, sprite.displayHeight);

    this.playerGroup = this.physics.add.existing(playerGroup);
    this.playerGroup.setInteractive();

    this.input.setDraggable(this.playerGroup)
    this.playerGroup.on('drag', (e: any, x: number, y: number) => {
      playerGroup.setPosition(x, playerGroup.y)
    })
  }
}
