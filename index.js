
var readlineSync = require ('readline-sync');

console.log('\x1b[33m%s\x1b[39m', "H3LL0,")
var username = readlineSync.question("What is your name ? : ");
console.log( "Welcome " +username.toUpperCase()+ " to Do You Know Adab?");
var score = 0;

console.log('\x1b[2m%s\x1b[0m', "\nPLAYER DETAILS \n_____________\nName : "+username.toUpperCase()+"\n"+"Scores = 0\n");

readlineSync.keyInPause("to enter the game (space key for phones)"); 
console.clear();
var highscore= [
  {
    name: "Adab",
    score: "24"
  },
  {
    name: "Areesha",
    score: "24"
  },
  {
    name: "Khalid",
    score: "16"
  },
  {
    name: "Abdul",
    score: "16"
  },
  {
    name: "Shahla (Mumma)",
    score: "16"
  },
  {
    name: "Saniya",
    score: "14"
  },
  {
    name: "Aqsa (Appi)",
    score: "4"
  },
  {
    name: "Yash",
    score: "0"
  },
]

//comparing the answers and showing the result thereof
function play(question, answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    score=score+2;
    console.log('\x1b[32m%s\x1b[0m',"You got it Right!");
    console.log('\x1b[2m%s\x1b[0m',"*** earned points : +2 ***");
    // console.log("current score : "+score+"\n");
  }
  else 
  {
    console.log('\x1b[31m%s\x1b[0m', "You got it wrong!");
    // console.log("current score : "+score+"\n");
  }
}

// questions starting here
var questions = [
              {
                question: "where is Adab currently living (city name)? ",
                answer: "bangalore" 
              },
               
              {
                question: "What is Adab's favourite colour ? ",
                answer: "Green"
              },

              {
                question: "does Adab has any birthmark? [yes/no] ",           
                answer: "yes"
              },

              {
                 question: "what is Adab's favourite desert? ",                
                 answer: "cupcake"
              },
  
              {
                 question: "does Adab like computers? [yes/no] ",
                 answer: "yes"
              },
              
              {
                 question: "does Adab like watching animes? [yes/no] ",
                 answer: "yes"
               },
               {
                 question: "what is Adab's height? [i.e 150cm] ",
                 answer: "180cm"
               },
               {
                  question: "most intelligent  person to Adab? [Hint : answer is in the ques] ",
                  answer: "adab",
               },
               {
                 question: "when is Adab's birthday? [i.e. 17 december] ",
                 answer: "21 december"
                 
               },
               {
                 question: "does Adab wear specs? ",
                 answer: "yes"
               },
               {
                 question: "where is Adab's hometown? ",
                 answer: "lucknow"
               },
               {
                 question: "last time adab had a spinach sandwich? [i.e. 28 november] ",
                 answer: "9 december"
               },
  ];


//calling the function through a loop
for (var i = 0; i < questions.length; i++)
  {
    console.log('\x1b[4m%s\x1b[0m', "\nQuestion "+(i+1));
    if(i==11)
      console.log('\x1b[41m%s\x1b[0m',"DIFFICULTY LEVEL 999 - ");
    play(questions[i].question, questions[i].answer);
  }

console.log('\x1b[7m%s\x1b[0m', "\nThank you for playing -Do You Know Adab quiz!");
console.log("\x1b[32m\x1b[40m%s\x1b[0m","Your total score : "+ score);


// //to know the high score
    var wanttoknowscore=readlineSync.question("\nWant to know the high scores?\n");

    if(wanttoknowscore.toUpperCase()==="YES")
    {
      console.log("\x1b[4m%s\x1b[0m","\nHigh scorers :-\n");
      for (var i = 0; i < highscore.length; i++)
      {
      console.log("\x1b[7m%s\x1b[0m","Name : "+highscore[i].name+"\nScore : "+highscore[i].score+" ");
      console.log();
      }
      console.log('\x1b[2m%s\x1b[0m',"\nsend a screenshot of your scores to be added in the high scores list! ");
    }
    else
     console.log('\x1b[2m%s\x1b[0m',"send a screenshot of your scores to be added in the high scores list!");

console.log('\x1b[33m\x1b[3m%s\x1b[0m',"Sayonara, have a nice day! :) ");
  
console.log('%c❤️', 'font-size: 117px');


// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
