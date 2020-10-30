const button = document.getElementById('submit');

const contact = (e) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Form has been submitted. Thank you!')
    });

};

contact();