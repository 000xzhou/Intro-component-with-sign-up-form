

const form = $('.form-layout')
const lname = $('#lname')
const fname = $('#fname')
const email = $('#email')
const password = $('#password')
// const errorDisplay = $('.error-looks')


// email format... not working? it keep coming out false 
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.on('submit', (e)=> {
    e.preventDefault();
    var lnameValid = this.lname.value === 0 || this.lname.value === ""
    var fnameValid = this.fname.value === 0 || this.fname.value === ""
    var emailValid = this.email.value === 0 || this.email.value === "" 
    var passwordValid = this.password.value === 0 || this.password.value === "" 

    if(lnameValid) {
        lname.addClass('invalid')
        lname.after('<img id="lnameIconError" class="error-icon" src="images/icon-error.svg" alt="Error">')
        lname.after('<div id="lnameTextError" class="error-text">Last Name cannot be blank</div>')
    } else {
        lname.removeClass('invalid')
        $('#lnameIconError').remove()
        $('#lnameTextError').remove()
    }
    if(fnameValid) {
        fname.addClass('invalid')
        fname.after('<img id="fnameIconError" class="error-icon" src="images/icon-error.svg" alt="Error">')
        fname.after('<div id="fnameTextError" class="error-text">First Name cannot be blank</div>')
    } else {
        fname.removeClass('invalid')
        $('#fnameIconError').remove()
        $('#fnameTextError').remove()
    }
    if(emailValid) {
        email.addClass('invalid')
        email.after('<img id="emailIconError" class="error-icon" src="images/icon-error.svg" alt="Error">')
        email.after('<div id="emailTextError" class="error-text">Email cannot be blank</div>')
        // console.log(emailRegExp.test(email.value))
    } else {
        $('#emailIconError').remove()
        $('#emailTextError').remove()
        // console.log(emailRegExp.test(email.value))
    }
    if(passwordValid) {
        password.addClass('invalid')
        password.after('<img id="passwordIconError" class="error-icon" src="images/icon-error.svg" alt="Error">')
        password.after('<div id="passwordTextError" class="error-text">Password cannot be blank</div>')
    } else {
        $('#passwordIconError').remove()
        $('#passwordTextError').remove()
    }
})