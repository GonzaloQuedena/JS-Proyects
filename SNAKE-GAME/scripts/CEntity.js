
export class CEntity {

  constructor(x, y) {
    this._x = x;
    this._y = y;

    this._w = this._h = 20;

    this._color = '#ffffff';
  }

  draw(ctx) {
    ctx.fillStyle = this._color;
    ctx.fillRect(this.x, this.y, this._w, this._h);
  }

  changePos(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }
  set x(arg) {
    this._x = arg;
  }
  get y() {
    return this._y;
  }
  set y(arg) {
    this._y = arg;
  }
}