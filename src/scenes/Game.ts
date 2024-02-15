import { Scene } from 'phaser';
import { RENDER_CONSTANTS } from '../config/renderConstants';
import { PlayerContainer } from '../objects/entities/soliders/PlayerContainer';

export class Game extends Scene
{
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text : Phaser.GameObjects.Text;
  player: PlayerContainer;

  constructor ()
  {
    super('Game');
  }

  update(): void {
    this.player.update()
  }

  init()
  {
    this.physics.world.setFPS(120);

    this.physics.world.gravity.set(0, 0);
    this.physics.world.setBounds(0, 0, RENDER_CONSTANTS.gameWidth, RENDER_CONSTANTS.gameHeight)
  }

  create ()
  {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor('FCF656');

    this.player = new PlayerContainer(this, RENDER_CONSTANTS.halfGameWidth, 900);
    this.player.create();
    this.input.setDraggable(this.player)
  }
}
