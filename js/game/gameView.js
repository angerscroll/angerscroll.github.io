export default class GameView {
    constructor(root) {
      this.root = root;
      this.root.innerHTML = `
        <div class="header">
          <div class="header__status">
            In Progress
          </div>
          <button type="button" class="header__restart">
            <span class="material-symbols-outlined">
              refresh
            </span>
          </button>
        </div>
        <div class="board">
          <div class="board__tile" data-index="0">X</div>
          <div class="board__tile" data-index="1">X</div>
          <div class="board__tile board__tile--check" data-index="2"></div>
          <div class="board__tile" data-index="3">X</div>
          <div class="board__tile" data-index="4">X</div>
          <div class="board__tile" data-index="5">X</div>
          <div class="board__tile board__tile--check" data-index="6"></div>
          <div class="board__tile board__tile--check" data-index="7"></div>
          <div class="board__tile" data-index="8">X</div>
          <div class="board__tile" data-index="9">X</div>
          <div class="board__tile" data-index="10">X</div>
          <div class="board__tile" data-index="11">X</div>
          <div class="board__tile board__tile--check" data-index="12"></div>
          <div class="board__tile" data-index="13">X</div>
          <div class="board__tile" data-index="14">X</div>
          <div class="board__tile" data-index="15">X</div>
          <div class="board__tile" data-index="16">X</div>
          <div class="board__tile board__tile--check" data-index="17"></div>
          <div class="board__tile" data-index="18">X</div>
          <div class="board__tile" data-index="19">X</div>
          <div class="board__tile" data-index="20">X</div>
          <div class="board__tile board__tile--check" data-index="21"></div>
          <div class="board__tile board__tile--check" data-index="22"></div>
          <div class="board__tile board__tile--check" data-index="23"></div>
          <div class="board__tile" data-index="24">X</div>
        </div>
      `
      
      this.root.querySelectorAll(".board__tile").forEach(tile => {
        tile.addEventListener("click", () => {
          this.onTileClick(tile.dataset.index);
        })
      });
      // this.onTileClick = (i) => {
      //   console.log(`tile clicked : ${i}`);
      // };
    }
  }