mineSweeper();
function mineSweeper() {

  //buttons
  const btn = document.getElementById('startGame');
  const choose = document.getElementById('chooseDif');
  const menuBtn = document.getElementById('backMenu');

  // containers
  const playground = document.querySelector('.playground');
  const offCanvas = document.getElementById("offCanvas");
  let numCells;

  choose.addEventListener('click', function () {
    offCanvas.style.width = '400px';
    choose.classList.add('d-none');
  })

  btn.addEventListener('click', function () {
    offCanvas.style.width = '0px';
    menuBtn.classList.remove('d-none');


    let checkedOption = document.querySelector(
      'input[name="gameMode"]:checked');

    if (checkedOption !== null) {
      numCells = checkedOption.value;
    }
    else {
      document.querySelector('.alert').innerHTML
        = "You must choose a difficulty.";
    }

    for (let i = 0; i < numCells; i++) {
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
    squareBox.innerHTML = index + 1;

    menuBtn.addEventListener('click', function () {
      btn.classList.remove('d-none');
      menuBtn.classList.add('d-none');
      squareBox.classList.add('d-none');
      offCanvas.style.width = '400px';
    })

    return squareBox;
  }

}
