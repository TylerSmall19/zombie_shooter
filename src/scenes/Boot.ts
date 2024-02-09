import { Scene } from 'phaser';
import { IMAGE_CONSTANTS } from '../config/imageConstants';

export class Boot extends Scene
{
  constructor ()
  {
    super('Boot');
  }

  preload ()
  {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    this.load.image('background', 'assets/bg.jpeg')
    this.load.spritesheet(IMAGE_CONSTANTS.PLAYER_SPRITE, 'assets/player_sprite.png', { frameWidth: 300, frameHeight: 300 })
  }

  create ()
  {
    this.scene.start('Preloader');
  }
}
