var countries = [
    { name: "United States", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" },
    { name: "United Kingdom", flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" },
    { name: "Brazil", flag: "https://www.worldometers.info/img/flags/br-flag.gif" },
    { name: "Japan", flag: "https://www.worldometers.info/img/flags/ja-flag.gif" },
    { name: "Spain", flag: "https://www.worldometers.info/img/flags/sp-flag.gif" },
  ];

  var currentIndex = 0;

  function loadFlag() {
    var flagImage = document.getElementById("flagImage");
    flagImage.src = countries[currentIndex].flag;
  }

  function checkGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.trim();
    var resultText = document.getElementById("resultText");

    if (guess.toLowerCase() === countries[currentIndex].name.toLowerCase()) {
      resultText.textContent = "Correct!";
    } else {
      resultText.textContent = "Wrong! The correct answer is " + countries[currentIndex].name;
    }

    guessInput.value = "";

    currentIndex++;
    if (currentIndex >= countries.length) {
      currentIndex = 0;
    }

    loadFlag();
  }

  loadFlag();