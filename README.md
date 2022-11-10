# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview
HTML / CSS / Jquery Very simple form that display error when the submit is press.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Links

- Solution URL: [Add solution URL here](https://github.com/000xzhou/Intro-component-with-sign-up-form)
- Live Site URL: [Add live site URL here](https://000xzhou.github.io/Intro-component-with-sign-up-form/)

## My process
I just started learning jQuery so I'm trying it out with this.
I use flex to space around.
I try a few different ways for the valiation.
First try was using Pseudo-elements. Like ::before and ::after.
It works then I deleted it. Since I'm new to jquery when I work on this project I'm not sure how to call upon it.
Next I try display block and none. It works but it wasn't giving the effect I liked. It display all of them because I was the same class for them all. I could have just added an extra class for them all and do so like that but I just not a fan.
Then I try creating a new element and adding the class to it.
Learn that there is before and after and use that in the end.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- jQuery

## Author

- Website - [XZ](https://github.com/000xzhou)
- Frontend Mentor - [@HazukiMiki](https://www.frontendmentor.io/profile/HazukiMiki)
