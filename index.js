// Write your code in this file!
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//1) contains "Welcome, "
//2) contains the first initial of the name stored in the 'currentUser' variable
//3) ends with an exclamation point
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;