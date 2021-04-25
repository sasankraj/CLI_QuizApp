// user defined functions start from here

const disp = () => {
  console.log('--------------------------------------------------------------------------------');
  for(let i = 0; i < count; i++) {
    console.log();
    console.log("Q" + (i+1).toString() + ". " + questions[i]['question'] + '\n');
    let optNum = questions[i]['options'].length;
    for(const opts of questions[i]['options']) {
      console.log('(' + (questions[i]['options'].length - (optNum--) + 1).toString() + ') ' + opts + '\n');
    }
    const choice = r.question("enter your choice : ");
    validate(questions[i], choice);
    console.log();
    console.log('--------------------------------------------------------------------------------');
  }
   
}

function validate(q, ch) 
{
  if(![1,2,3,4].includes(Number(ch))) {
    console.log("You entered an invalid choice");
  }

  else if(q['answer'].toString() === ch) {
    console.log("Well done!! you have answered correctly.");
    ++score;
  }

  else {
    console.log("Oopsie!! That is incorrect");
    console.log("The correct answer is : " + q['answer'].toString());
  }

  console.log();
}

const instructions = (name) => {
  console.log("\nGreetings " + name.toUpperCase()+"!");
  console.log(chalk.redBright.underline.bold("PLEASE FOLLOW THE INSTRUCTIONS \n"));
  console.log("Each question will have four choices of which only one is correct.");
  console.log("You will have only one chance to guess the correct answer.\n");
  console.log("All the best!\n".toUpperCase());
}


const conclusion = (score, count, name) => {
  if (score === 0) {
  console.log("Oops!! you have scored " + score + " out of " + count);
  console.log("Practice to get better.");
  }
  else if(score<count/2) {
  console.log("Well played!! you have scored " + score + " out of " + count);
  console.log("Keep trying, you can improve");
  }
  else {
  console.log("Congratulations you have scored " + score + " out of " + count);
  }
}

function main() {
  disp();
  conclusion(score, count, name);
  const again = r.question('wanna try again? (y to continue / any other key to quit)\t');
  if(again === 'y') {
    main();
  }
  console.log("Thanks for playing " + name + ". Good Bye!!\n");
}

// user defined functions end here


const chalk = require('chalk');
console.log(chalk.magenta("--------------------------------"));
console.log(chalk.blue.bold("|Welcome to the Easy Quiz on JS|"));
console.log(chalk.magenta("--------------------------------"));
const r = require('readline-sync');
const name = r.question("\nPlease enter your name : ");
instructions(name);
const questions = [
  {
    question : "Which of the following is true about variable naming conventions in JavaScript ?",
    options : [ "JavaScript variable names must begin with a letter or the underscore character", "JavaScript variable names are case sensitive", "Both of these", "None of these" ],
    answer : 3
  },

  {
    question : "Which of the following type of variable takes precedence over other if their names are same?", 
    options : [ "Local variable", "Global variable", "Reference variable", "Static variable" ],
    answer : 1
  },

  {
    question : "Which of the following function of String object returns the character at the specified index?",
    options : [ "charCodeAt()", "charAt()", "indexOf()", "console()" ],
    answer : 2
  }, 

  {
    question : "Which of the following function of Array object calls a function for each element in the array?",
    options : [ "concat()", "every()", "forEach()", "filter()" ],
    answer : 3
  },

  {
    question : "Callbacks are _________ that are passed as arguments to another function.",
    options : [ "Strings", "Variables", "Arrays", "Functions" ],
    answer : 4
  }

];

const count = questions.length; // total number of questions
let score = 0; // for showing the user score
main();

