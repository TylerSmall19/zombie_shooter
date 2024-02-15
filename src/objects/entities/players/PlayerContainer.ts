import { controls } from "../../../config/controls";
import { BasicSoldier } from "./BasicSoldier";

type CustomControl = {
  left: Phaser.Input.Keyboard.Key,
  right: Phaser.Input.Keyboard.Key
}

export class PlayerContainer extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, [new BasicSoldier(scene, 0, 0)]);
    this.body = this.body;
  }

  body: Phaser.Physics.Arcade.Body

  update() {
    this.body.setMaxVelocity(650);
    this.body.setCollideWorldBounds(true);

    const controlsConfig = controls.getPlayerControls();
    const playerControls : CustomControl = this.scene.input.keyboard?.addKeys({
      left: controlsConfig.playerLeft,
      right: controlsConfig.playerRight
    }) as CustomControl

    if (playerControls.left.isDown) {
      this.body.setAccelerationX(-18000)
      // physicsBody.setVelocityX(-950);
      // console.log('Left veloc:', JSON.stringify(this.body.))
    }

    if (playerControls.right.isDown) {
      this.body.setAccelerationX(18000)
      // physicsBody.setVelocityX(950);
      // console.log('Right velc: ', JSON.stringify(this.body))
    }

    if(!playerControls.right.isDown
      && !playerControls.left.isDown
      ) {
      this.body.stop()
    }
  }

  create() {
    this.on('drag', (e: any, x: number) => {
      this.setPosition(x, this.y)
    })

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.setRandomPosition()
    this.setScale(.25);
    this.setSize(500, 500);
    this.setInteractive();
  }
}