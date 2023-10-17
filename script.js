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


