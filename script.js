const button = document.getElementById('submit');
const firstName = document.getElementById('first_name').value;
const lastName = document.getElementById('last_name').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('number').value;

const contact = (e) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (firstName === "" && 
            lastName === "" &&
            email === "" &&
            phoneNumber === "") {
            alert('Please fill in the sign in form to submit.');
        } else {
            alert('Form has been submitted. Thank you!');
        }
        
    });

};

contact();