// //
// // Homework: The Word Guesser
// //
// // You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman,
// or like Wheel of Fortune without the wheel and fortune).
// // Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// // Write a function called guessLetter that will:
// // Take one argument, the guessed letter.
// // Iterate through the word letters and see if the guessed letter is in there.
// // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// // It should also figure out if there are any more letters that need to be guessed, and if not,
// it should congratulate the user for winning the game.
// // Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// //

var word = ['F', 'O', 'X'];
var newWord = ['_', '_', '_'];
var score = 0

// var randomScore1 = function() {
//   return (Math.floor(Math.random() * (30 - 15)) + 15).toFixed(0);
//   // console.log((Math.floor(Math.random() * (30 - 15)) + 15).toFixed(0));
//
// }
// randomScore1();

// var randomScore = function() {
//   var number = (Math.random() * 100).toFixed(0);
//   console.log(number);
//   if (number <20) {
//     number += 25
//     console.log(number);
//   } else if (number >50) {
//     number -= 35
//     console.log(number);
//   }
// }
// randomScore();

var guessLetter = function (guess) {

    var correctLetter = guess;


    switch (correctLetter) {
     case 'F':
         letter = newWord.splice(0, 1, 'F');
         score += 15;
        //  score += randomScore();
         console.log(newWord);
         console.log(score);
         alert("You so smart! You are on " + score + " Point!");
         break;
     case 'O':
         letter = newWord.splice(1, 1, 'O');
         score += 15;
        //  score += randomScore();
         console.log(newWord);
         console.log(score);
         alert("You so smart! You are on " + score + " Point!");
         break;
     case 'X':
         letter = newWord.splice(2, 1, 'X');
         score += 15;
        //  score += randomScore();
         console.log(newWord);
         console.log(score);
         alert("You so smart! You are on " + score + " Point!");
         break;
     default:
        //  alert('You Suck =) You are now on ' + score -5 + ' Points.');
        //  alert('You Suck =) You are now on ' + score + ' Points.');
        alert('You Suck =)');
         score -= 5;
         console.log(score);
        //  window.location = "https://giphy.com/gifs/EizPK3InQbrNK"


            // if (newWord === ['F', 'O', 'X']) {
            //   var correctWord = word.join('');
            //   console.log(correctWord);
            //   alert("You're an actual winner");
      }
   }
}
 guessLetter('s');
 guessLetter('O');
 guessLetter('X');
 guessLetter('s');
 guessLetter('m');
 guessLetter('F');
 guessLetter('l');




// Bonus: Make it more like Wheel of Fortune:
// //
// // Start with a reward amount of $0
// // Every time a letter is guessed,
// generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found),
// otherwise subtract from their reward.
// // When they guess the word, log their final reward amount.
// //
// Bonus: Make it like Hangman:
// // //
// // // Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
// If they guess a letter twice, do nothing.
// // Keep track of the state of the hangman as a number (starting at 0),
// and subtract or add to that number every time they make a wrong guess.
// // Once the number reaches 6 (a reasonable number of body parts for a hangman), i
// nform the user that they lost and show a hangman on the log.
