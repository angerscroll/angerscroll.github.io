export default class Game {
    constructor(params) {
      this.row = params.row;
      this.cell = params.cell;
      this.matrix;
      this.bn = params.bn || new Array(this.row).fill(new Array(this.cell).fill(0));
    }
    setMatrix = () => {
      this.matrix = [];
    }
  }