mineSweeper();
function mineSweeper() {

  //buttons
  const btn = document.getElementById('startGame');
  const choose = document.getElementById('chooseDif');
  const menuBtn = document.getElementById('backMenu');

  // containers
  const playground = document.querySelector('.playground');
  const offCanvas = document.getElementById("offCanvas");
  const alert = document.querySelector('.alert');
  let numCells, checkedOption;

  // Click function to select game difficulty
  choose.addEventListener('click', function () {
    offCanvas.classList.remove('d-none');
    offCanvas.style.width = '400px';
    choose.classList.add('d-none');
  })

  // Click function to start the game once chosen the difficulty
  btn.addEventListener('click', function () {
    offCanvas.style.width = '0px';
    offCanvas.classList.add('d-none');
    menuBtn.classList.remove('d-none');
    alert.innerHTML = '';

    //Function that verifies which option is checked
    checkedOption = document.querySelector(
      'input[type=radio]:checked');

    if (checkedOption !== null) {
      numCells = checkedOption.value;
    }
    else {
      alert.innerHTML = `You must choose a difficulty.`;
      offCanvas.style.width = '400px';
      menuBtn.classList.add('d-none');

    }

    // Loop that goes through the mode value and gives the number of squares + text
    for (let i = 0; i < numCells; i++) {
      let squareNum = squareGenerator(i);
      playground.append(squareNum);
    }

  })

  // Function that creates the squares (from loop above)
  function squareGenerator(index) {
    const squareBox = document.createElement('div');
    // On Click, the square changes it's classes (add bg & text color, etc..)
    squareBox.addEventListener('click', function () {
      squareBox.classList.add('bg-info', 'text-black');
      squareBox.classList.remove('text-white');
      console.log(parseInt(squareBox.innerHTML));
    })
    // Gives square it's width / height and other classes
    squareBox.style.width = squareBox.style.height = `calc(100% / ${Math.sqrt(numCells)}`;
    squareBox.classList.add('square', 'text-white');
    squareBox.classList.remove('d-none');
    squareBox.innerHTML = index + 1;

    // On click, reset user's input
    menuBtn.addEventListener('click', function () {
      btn.classList.remove('d-none');
      menuBtn.classList.add('d-none');
      squareBox.classList.add('d-none');
      offCanvas.style.width = '400px';
      offCanvas.classList.remove('d-none');
      checkedOption.checked = false;
    })

    return squareBox;
  }

  /* devo creare un array con dentro probabilità (3), che saranno poi da applicare come rapporto al numero di campi
  una volta definita la quantità di mine per Game Mode, devo fare in modo di generare dei valori randomici per quelle caselle
  applicare poi un altro sfondo a quelle caselle */

}
