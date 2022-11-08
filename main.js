

const form = $('.form-layout')
const lname = $('#lname')
const fname = $('#fname')
const email = $('#email')
const password = $('#password')
// const errorDisplay = $('.error-looks')


// email format... not working? it keep coming out false 
const emailRegExp = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/


form.on('submit', (e)=> {
    e.preventDefault();
    var lnameValid = this.lname.value === 0 || this.lname.value === ""
    var fnameValid = this.fname.value === 0 || this.fname.value === ""
    var emailValid = this.email.value === 0 || this.email.value === "" 
    var passwordValid = this.password.value === 0 || this.password.value === "" 

    $('.error').remove()


    if(lnameValid) {
        lname.addClass('invalid')
        lname.after('<img class="error error-icon" src="images/icon-error.svg" alt="Error">')
        lname.after('<div class="error error-text">Last Name cannot be blank</div>')
    } else {
        lname.removeClass('invalid')
    }
    if(fnameValid) {
        fname.addClass('invalid')
        fname.after('<img class="error error-icon" src="images/icon-error.svg" alt="Error">')
        fname.after('<div class="error error-text">First Name cannot be blank</div>')
    } else {
        fname.removeClass('invalid')
    }

    if(emailValid) {
        email.addClass('invalid')
        email.after('<img class="error error-icon" src="images/icon-error.svg" alt="Error">')
        email.after('<div class="error error-text">Email cannot be blank</div>')
    } else {
        // still can't get this to work
        // var validEmail = emailRegExp.test(email)
        // if(!validEmail) {
        //     email.after('<span class="error">Enter a valid email</span>')
        // } else {
        //     email.removeClass('invalid')
        // }
        email.removeClass('invalid')
    }
    if(passwordValid) {
        password.addClass('invalid')
        password.after('<img class="error error-icon" src="images/icon-error.svg" alt="Error">')
        password.after('<div class="error error-text">Password cannot be blank</div>')
    } else {
        password.removeClass('invalid')
    }
})