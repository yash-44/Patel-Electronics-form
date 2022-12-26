// console.log("This is project 4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form')
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);
name.addEventListener('blur', () => {
    // console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
        document.getElementById('label1').style.color = "black"
        
        
    }
    else {
        // console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        document.getElementById('label1').style.color = "red"
        

    }
})

email.addEventListener('blur', () => {
    // console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
        document.getElementById('label2').style.color = "black"
    }
    else {
        // console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
        document.getElementById('label2').style.color = "red"
    }
})

phone.addEventListener('blur', () => {
    // console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
        document.getElementById('label3').style.color = "black"
    }
    else {
        // console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        document.getElementById('label3').style.color = "red"

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log('You clicked on submit');
    // console.log(validEmail, validUser, validPhone);


    // Submit your form here
    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');

        // console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        form.reset()

    }
    else {
        // console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }



})
