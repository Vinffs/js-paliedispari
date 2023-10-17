// Exercise 1 - Palindrome

isItPalindrome();
function isItPalindrome() {

  const btn = document.querySelector('button');
  const result = document.querySelector('.alert');

  btn.addEventListener('click', function () {
    const input = document.getElementById('data').value;
    const inputWord = input.toLowerCase().replace(/\s/g, '');
    let stringArray = [];
    let backwordsArray = [];

    stringArray.push(inputWord.split(''));
    backwordsArray.push(inputWord.split('').reverse());

    palindromeCheck(stringArray, backwordsArray);
  })

  function palindromeCheck(stringArray, backwordsArray) {

    resetToDefault();

    for (let i = 0; i < stringArray.length; i++) {
      let stringCheck = stringArray[i].join('');
      for (let x = 0; x < backwordsArray.length; x++) {
        let backwordCheck = backwordsArray[x].join('');
        if (stringCheck !== backwordCheck) {
          background = 'bg-danger';
          displayText = `
          <h4>Attention</h4>
          <p>The inserted word is NOT a palindrome: <br>
          Input word: "${stringCheck}" <br>
          Backwords: "${backwordCheck}" </p>`
        } else if (!isNaN(stringCheck) || stringCheck === '') {
          background = 'bg-warning';
          displayText = `
          <h4>Attention</h4>
          <p>Numbers or empty slots are not allowed.<br>
          Spacing between words are not displayed.</p>`
        } else {
          background = 'bg-success';
          displayText = `
          <h4>Congrats!</h4>
          <p>The inserted word IS a palindrome! <br>
          Input word: "${stringCheck}" <br>
          Backwords: "${backwordCheck}" </p>`
        }
      }
    }
    displayResult(background, displayText);
  }

  function displayResult(background, displayText) {
    result.classList.add(background, 'text-white');
    result.innerHTML = `${displayText}`;
    result.classList.remove('d-none');

  }

  function resetToDefault() {
    result.classList.add('d-none');
    result.classList.remove('bg-danger', 'bg-success', 'bg-warning');
  }
}

// Exercise 2 - Even or Odd?

isEvenOrOdd();
function isEvenOrOdd() {
  const button = document.getElementById('buttonSecond');
  const playerEven = document.getElementById('vbtn-radio1');
  const playerOdd = document.getElementById('vbtn-radio2');
  const allowedNumbers = [1, 2, 3, 4, 5];
  const computerNumber = getRndInteger(1, 5);
  const result = document.querySelector('.second-alert');
  let sum;

  button.addEventListener('click', function () {
    const input = parseInt(document.getElementById('dataTwo').value);
    sum = (input + computerNumber);

    let isIncluded = false;
    for (let i = 0; i < allowedNumbers.length; i++) {
      if (input === allowedNumbers[i]) {
        isIncluded = true;
      } else { }
    }

    whoWins(playerEven, playerOdd, isIncluded, sum);
  })

  function whoWins(playerEven, playerOdd, isIncluded, sum) {
    resetToDefault();

    if (!playerEven.checked && !playerOdd.checked) {
      background = `bg-danger`
      displayText = `You must chose Even or Odd.`

    } else if (!isIncluded) {
      background = `bg-warning`
      displayText = `The inserted number is not valid, please check.`

    } else if ((sum % 2 === 0 && playerEven.checked) || (sum % 2 > 0 && playerOdd.checked)) {
      background = `bg-success`;
      displayText = `You Win!`;

    } else if ((sum % 2 === 0 && playerOdd.checked) || (sum % 2 > 0 && playerEven.checked)) {
      background = `bg-info`;
      displayText = `Computer Wins :( Try again!`
    }

    displayResults(background, displayText);
  }

  function displayResults(background, displayText) {
    result.classList.remove('d-none');
    result.innerHTML = `${displayText}`;
    result.classList.add(background, 'text-white', 'fs-4', 'p-2');
  }

  function resetToDefault() {
    result.classList.add('d-none');
    result.classList.remove('bg-danger', 'bg-success', 'bg-warning', 'bg-info');
  }

}