document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const inputs = form.querySelectorAll("input");
    const errors = [];
    const errorBox = document.querySelector(".errors");
    errorBox.innerHTML = '';

    const phoneRegex = /^\+?\d{11,12}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    inputs.forEach(input => {
        const value = input.value.trim();
        const isRequired = input.hasAttribute('required');
        const name = input.getAttribute('name');

        if (isRequired) {
            if (!value) {
                errors.push(`${input.placeholder} нужно заполнить`);
                return;
            }
            if (name === 'phone' && !phoneRegex.test(value)) {
                errors.push("Неверный формат телефона");
            }
            if (name === 'email' && !emailRegex.test(value)) {
                errors.push("Неверный формат почты");
            }
        }
    })

    if (errors.length > 0) {
        errorBox.innerHTML = errors.map(err => `<div>${err}</div>`).join('');
    } else {
        form.reset();
    }
})