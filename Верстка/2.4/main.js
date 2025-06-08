const form = document.getElementById("myForm");
const inputs = form.querySelectorAll("input");
const history = [];

function getFormState() {
    const state = {};
    inputs.forEach(input => {
        state[input.name] = input.value;
    })
    return state;
}

function setFormState(state) {
    inputs.forEach(input => {
        if (state.hasOwnProperty(input.name)) {
            input.value = state[input.name];
        }
    })
}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        history.push(getFormState())
    })
})

document.getElementById("undoBtn").addEventListener("click", () => {
    if (history.length > 0) {
        const prevState = history.pop();
        setFormState(prevState);
    }
})