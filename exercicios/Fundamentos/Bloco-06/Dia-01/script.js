function handleSubmit(event) {
    event.preventDefault();
}

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');

    for (let i = 0; i < formElements.length; i += 1) {
        const userInput = formElements[i];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}

window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const subimitBtn = document.querySelector('#submit-btn');
    subimitBtn.addEventListener('click', handleSubmit);
}