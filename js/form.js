// form.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.footer-form');
    const inputs = form.querySelectorAll('.form-input');
    const successMsg = form.querySelector('.form-success');
    const submitBtn = form.querySelector('.form-submit');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            // Basic required field validation
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Hide inputs and button
                inputs.forEach(input => input.style.display = 'none');
                submitBtn.style.display = 'none';

                // Show success message
                successMsg.classList.add('show');
            }
        });

        // Remove error class on focus/input
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('error');
            });
        });
    }
});
