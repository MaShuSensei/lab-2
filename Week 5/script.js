// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Introduction: Welcome message
    console.log("Welcome to MaShu's Shack!");

    // Variables, Let, Const & Data Types
    const logo = document.getElementById('logo');
    const content = document.querySelector('.content');

    // Booleans
    const isLogoVisible = true;
    const isContentVisible = true;

    // Numbers
    const rotationDegrees = 360;

    // Operators, Assignment, Arithmetic & Math
    function rotateLogo() {
        if (isLogoVisible) {
            logo.style.transform = `rotate(${rotationDegrees}deg)`;
            logo.style.transition = 'transform 1s ease';

            setTimeout(() => {
                logo.style.transform = 'rotate(0deg)';
            }, 1000);
        }
    }

    // Strings
    const welcomeMessage = "Welcome to MaShu's Shack!";
    console.log(welcomeMessage);

    // Arrays
    const programmingLanguages = ['Basic Python', 'Basic C++', 'Basic HTML', 'Basic CSS', 'Basic Assembly Language'];

    // Dates
    const currentDate = new Date();
    console.log('Current date:', currentDate);

    // Events, Precedence & Conditionals
    function fadeInContent() {
        if (isContentVisible) {
            content.style.opacity = 0;
            content.style.transition = 'opacity 1s ease';

            setTimeout(() => {
                content.style.opacity = 1;
            }, 1000);
        }
    }

    // Output programming languages in the console
    console.log('Programming Languages:', programmingLanguages);

    // Call functions
    rotateLogo();
    fadeInContent();
});
