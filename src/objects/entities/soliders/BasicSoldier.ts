import { IMAGE_CONSTANTS } from "../../../config/imageConstants";

export class BasicSoldier extends Phaser.GameObjects.Sprite {
  constructor (scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, IMAGE_CONSTANTS.PLAYER_SPRITE)
  }
}