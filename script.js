const input = document.querySelector('input');

let id;

const checkTime = 2000;

input.addEventListener('keyup', () => {
    let inputValue = input.value;

    clearTimeout(id);

    id = setTimeout(() => {
        if (input.value === inputValue) {
            alert(input.value);
        }
        else {
            inputValue = input.value;
        }
    }, checkTime)
});