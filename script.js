mineSweeper();
function mineSweeper() {
  const btn = document.querySelector('.btn');
  const menuBtn = document.querySelector('.backMenu');
  const playground = document.querySelector('.playground');
  const numCells = 100;

  btn.addEventListener('click', function () {
    btn.classList.add('d-none');
    menuBtn.classList.remove('d-none');

    for (let i = 1; i <= numCells; i++) {
      let squareNum = squareGenerator(i);
      playground.append(squareNum);
    }


  })

  function squareGenerator(index) {
    const squareBox = document.createElement('div');
    squareBox.addEventListener('click', function () {
      squareBox.classList.add('bg-info', 'text-black');
      squareBox.classList.remove('text-white');
      console.log(parseInt(squareBox.innerHTML));
    })
    squareBox.style.width = squareBox.style.height = `calc(100% / ${Math.sqrt(numCells)}`;
    squareBox.classList.add('square', 'text-white');
    squareBox.classList.remove('d-none');
    squareBox.innerHTML = index;

    menuBtn.addEventListener('click', function () {
      btn.classList.remove('d-none');
      menuBtn.classList.add('d-none');
      squareBox.classList.add('d-none');
    })

    return squareBox;
  }

}
