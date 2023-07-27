import { CHead } from "./CHead.js";
import { CBody } from "./CBody.js";

export class CSnake {

  constructor(x, y) {
    this._headSnake = new CHead(x, y);
    this._bodySnake = [];
  }

  drawSnake(ctx) {

    for (let i = 0; i < this._bodySnake.length; ++i) {
      this._bodySnake[i].draw(ctx);
    }

    this._headSnake.draw(ctx);
  }

  moveSnake(board, blockSize) {

    for (let i = this._bodySnake.length - 1; i > 0; --i) {
      this._bodySnake[i].x = this._bodySnake[i - 1].x;
      this._bodySnake[i].y = this._bodySnake[i - 1].y;
    }
    if (this._bodySnake.length !== 0) {
      this._bodySnake[0].x = this._headSnake.x;
      this._bodySnake[0].y = this._headSnake.y;
    }

    this._headSnake.move(board, blockSize);
  }

  changePos(x, y) {
    this._headSnake.changePos(x, y);
  }

  changeMov(key) {
    this._headSnake.changeMov(key);
  }

  addBody(food) {
    this._bodySnake.push(new CBody(food.x, food.y));
  }

  clearBody() {
    this._bodySnake.splice(0, this._bodySnake.length);
  }

  snakeCollisionWithFood(food) {

    return (this._headSnake.x === food.x && this._headSnake.y === food.y);
  }

  snakeCollisionWithBody() {
    for (let i = 0; i < this._bodySnake.length; ++i) {
      
      if (this._headSnake.x === this._bodySnake[i].x && this._headSnake.y === this._bodySnake[i].y) {
        return true;
      }
    }

    return false;
  }
}