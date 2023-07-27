import { CSnake } from './CSnake.js'
import { CFood } from './CFood.js';

export class CGame {

  constructor() {
    this._blockSize = 25;
    this._rows = this._cols = 20;

    this._board = document.getElementById('board');
    this._board.width = this._cols * this._blockSize;
    this._board.height = this._rows * this._blockSize;

    this._ctx = this._board.getContext('2d');

    this._snake = new CSnake(0, 0);
    this.changeDirection('snake');

    this._food = new CFood(0, 0);
    this.changeDirection('food');

    this._gameOver = false;
  }

  update() {

    if (this._gameOver) {
      this.resetGame();
      console.log('GAME OVER');
    }

    this.paintBoard();

    this.moveEntities();
    this.collisions();
    this.paintEntities();
  }

  paintBoard() {
    this._ctx.fillStyle = '#000000';
    this._ctx.fillRect(0, 0, this._board.width, this._board.height);
  }
  
  paintEntities() {
    this._food.draw(this._ctx);
    this.snake.drawSnake(this._ctx);
  }

  moveEntities() {
    this.snake.moveSnake(this._board, this._blockSize);
  }

  changeDirection(entity) {

    const posX = this.getRandomX();
    const posY = this.getRandomY();

    switch(entity) {

      case 'snake':
        this.snake.changePos(posX, posY);
        break;

      case 'food':
        this._food.changePos(posX, posY);
        break;
    }
  }

  collisions() {
    this.collisionSnakeBody();
    this.collisionSnakeFood();
  }

  collisionSnakeFood() {
    if (this.snake.snakeCollisionWithFood(this._food)) {
      this.snake.addBody(this._food);
      this.changeDirection('food');
    }
  }
  collisionSnakeBody() {
    if (this.snake.snakeCollisionWithBody()) {
      this._gameOver = true;
    }
  }

  resetGame() {
    this.snake.clearBody();
    this.changeDirection('snake');

    this.changeDirection('food'); 

    this._gameOver = false;
  }

  getRandomX() {
    return Math.floor(Math.random() * this._cols) * this._blockSize;
  }
  getRandomY() {
    return Math.floor(Math.random() * this._rows) * this._blockSize;
  }

  get snake() {
    return this._snake;
  }
}