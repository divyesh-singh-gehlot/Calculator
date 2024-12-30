let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
function printNumber(value, times) {
    if(calculation === '0'){
        calculation='';
    }
    if (times === 1) {
        calculation += value;
    }
    else {
        calculation += value;
        calculation += value;
    }

    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function printCharacter(character){
    calculation+=character;
    displayCalculation();
}

function displayCalculation(){
    document.querySelector('.output-screen')
        .value = calculation;
}

function cleanInput(){
    calculation = '0';
    document.querySelector('.answer-screen')
        .value = '';
        displayCalculation();
        localStorage.setItem('calculation', calculation);
}

function changeTheme(){
    const buttonImage = document.querySelector('.theme-image');
    const lightMode = 'moon.svg'; 
    const darkMode = 'sun.svg'; 

    if (buttonImage.src.includes(lightMode)) {
        buttonImage.src = darkMode;
        document.body.classList.add('dark-mode-body');
        document.querySelector('.calculator').classList.add('dark-mode-calculator');
        document.querySelector('.clear-button').classList.add('dark-mode-buttons');
        const elements = document.getElementsByClassName('my-class');       
        document.querySelectorAll('.normal-buttons').forEach(elements => {
            elements.classList.add('dark-mode-buttons');
          });      
        document.querySelectorAll('.color-button').forEach(elements => {
            elements.classList.add('dark-mode-color-buttons');
          });
    } else {
        buttonImage.src = lightMode;
        document.body.classList.remove('dark-mode-body');
        document.querySelector('.calculator').classList.remove('dark-mode-calculator');
        document.querySelector('.clear-button').classList.remove('dark-mode-buttons');
        const elements = document.getElementsByClassName('my-class');       
        document.querySelectorAll('.normal-buttons').forEach(elements => {
            elements.classList.remove('dark-mode-buttons');
          });       
        document.querySelectorAll('.color-button').forEach(elements => {
            elements.classList.remove('dark-mode-color-buttons');
          });
    }
}


function giveResult(){
    calculation=eval(calculation);
    document.querySelector('.answer-screen')
        .value = calculation;
}