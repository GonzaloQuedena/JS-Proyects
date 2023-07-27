import { CEntity } from "./CEntity.js"

export class CFood extends CEntity {

  constructor(x, y) {
    super(x, y);

    this._color = '#F47378';
  }
}