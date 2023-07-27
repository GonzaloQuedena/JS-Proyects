import {CEntity} from './CEntity.js'

export class CHead extends CEntity {

  constructor(x, y) {
    super(x, y);

    this._dx = this._dy = 0;

    this._color = '#138535';
  }

  move(board, blockSize) {

    if (this.x + this._dx * blockSize < 0) {
      this.x = board.width - blockSize;
    }
    if (this.x + this._dx * blockSize > board.width) {
      this.x = 0;
    }

    if (this.y + this._dy * blockSize < 0) {
      this.y = board.height - blockSize;
    }
    if (this.y + this._dy * blockSize > board.height) {
      this.y = 0;
    }

    this.x += this._dx * blockSize;
    this.y += this._dy * blockSize;
  } 

  changeMov(key) {
    
    switch(key.code) {

      case 'ArrowUp':
        this._dy = -1;
        this._dx = 0;
        break;

      case 'ArrowDown':
        this._dy = 1;
        this._dx = 0;
        break;

      case 'ArrowLeft':
        this._dx = -1;
        this._dy = 0;
        break;

      case 'ArrowRight':
        this._dx = 1;
        this._dy = 0;
        break;

    }
  }
}