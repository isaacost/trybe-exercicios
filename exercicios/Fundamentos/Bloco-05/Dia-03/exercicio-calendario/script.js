function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//Questão 1:
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');

    for (let i = 0; i < decemberDaysList.length; i++){
        let dia = decemberDaysList[i];
        let diaItem = document.createElement('li');
        diaItem.innerHTML = dia;

        if (dia === 24 || dia === 31) {
            diaItem.className = 'day holiday';
            getDaysList.appendChild(diaItem);
        } else if (dia === 4 || dia === 11 || dia === 18) {
            diaItem.className = 'day friday';
            getDaysList.appendChild(diaItem);
        } else if (dia === 25) {
            diaItem.className = 'day holiday friday';
            getDaysList.appendChild(diaItem);
        } else {
            diaItem.className = 'day';
            getDaysList.appendChild(diaItem);
        }
    }
}

createDaysOfTheMonth();

//Questão 2
function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

//Questão 3
function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    getHolidayButton.addEventListener('click', function () {
        for (let i = 0; i < getHolidays.length; i++){
            if (getHolidays[i].style.backgroundColor === setNewColor) {
                getHolidays[i].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[i].style.backgroundColor = setNewColor;
            }
        }
    })
}

displayHolidays();

//Questão 4
function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-feira');

//Questão 5
function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';

    getFridayButton.addEventListener('click', function () {
        for (let i = 0; i < fridays.length; i++) {
            if (fridays[i].innerHTML !== newFridayText) {
                fridays[i].innerHTML = newFridayText;
            } else {
                fridays[i].innerHTML = fridaysArray[i];
            }
        }
    })
}
let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);

//Questão 6
function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}

function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
}

dayMouseOver();
dayMouseOut();

//Questão 7
function newTaskSpan(task) {
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
}

newTaskSpan('projeto');

//Questão 8
function newTaskDiv(color) {
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');

    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
}

newTaskDiv('green');

//Questão 9
function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function (event) {
        if (selectedTask.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
}

setTaskClass();

//Questão 10
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', function (event) {
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    })
}

setDayColor();