import { Scene, GameObjects } from 'phaser';
import { RENDER_CONSTANTS } from '../config/render_constants';
import { IMAGE_CONSTANTS } from '../config/image_constants';

export class MainMenu extends Scene
{
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;

  constructor ()
  {
    super('MainMenu');
  }

  create ()
  {
    const cameraWidth = this.cameras.main.width
    const cameraHeight = this.cameras.main.height

    const bg = this.add.image(0, 0, 'background')
    .setOrigin(0);

    bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height))

    this.background = bg;

    this.logo = this.add.image(RENDER_CONSTANTS.halfGameWidth, 300, IMAGE_CONSTANTS.MENU_LOGO);

    this.title = this.add.text(RENDER_CONSTANTS.halfGameWidth, 460, 'Main Menu', {
      fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5);

    this.input.once('pointerdown', () => {

      this.scene.start('Game');

    });
  }
}
