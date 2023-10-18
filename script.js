mineSweeper();
function mineSweeper() {
  const btn = document.querySelector('.btn');
  const playground = document.querySelector('.playground');
  const numCells = 100;

  btn.addEventListener('click', function () {
    for (let i = 1; i < numCells + 1; i++) {
      let squareNum = squareGenerator(i);
      playground.append(squareNum);
    }
  })

  function squareGenerator(index) {
    const squareBox = document.createElement('div');
    squareBox.style.width = squareBox.style.height = `calc(100% / ${Math.sqrt(numCells)}`;
    squareBox.classList.add('square', 'text-white');
    squareBox.innerHTML = index;

    return squareBox;
  }


}
