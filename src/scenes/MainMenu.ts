import { Scene, GameObjects } from 'phaser';
import { RENDER_CONSTANTS } from '../config/renderConstants';
import { IMAGE_CONSTANTS } from '../config/imageConstants';
import { TextButton } from '../objects/buttons/TextButton';

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

    this.logo = this.add.image(RENDER_CONSTANTS.halfGameWidth, 280, IMAGE_CONSTANTS.MENU_LOGO);

    this.title = this.add.text(0, 0, 'Main Menu', {
      fontFamily: 'Arial Black', fontSize: 60, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(.5)

    const createNewGameText = new TextButton(this, 0, 92, 'Create New Game', {
      fontFamily: 'Arial Black', fontSize: 35, color: '#ffffff',
      stroke: '#000000', strokeThickness: 5,
      align: 'center'
    } as Phaser.GameObjects.TextStyle, () => {
      this.scene.start('Game');
    }).setOrigin(.5)

    this.add.container(RENDER_CONSTANTS.halfGameWidth, RENDER_CONSTANTS.halfGameHeight - 75, [this.title, createNewGameText]);

    this.scene.start('Game');
  }
}
