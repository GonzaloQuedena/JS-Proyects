import {CGame} from './CGame.js'

window.onload = () => {
  const game = new CGame();

  const update = () => game.update();

  const changeMov = (key) => game.snake.changeMov(key);

  addEventListener('keydown', changeMov);
  setInterval(update, 1000 / 10);
}
