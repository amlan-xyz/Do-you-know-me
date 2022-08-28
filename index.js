var readlineSync=require('readline-sync');


	let userName=readlineSync.question('Enter your username : ');

	console.log("Let's see "+userName + " how well do you know me ?");


var highScores = [
	{
	  name: "Amlan",
	  score: 5,
	}
]

var questions=[
	{
		question:"What is my full name ?",
		answer:"Amlanjyoti Saikia"
	},
	{
		question:"When is my birthday ?",
		answer:"19 March 2000",
	},
	{
		question:"What is my favourite movie ?",
		answer:"One day",
	},
	{
		question:"What is my favourite song ?",
		answer:"payphone",
	},
	{
		question:"Where is my hometown ?",
		answer:"Assam"
	}
]


let score=0;

function quiz(question,answer){
	var userAns=readlineSync.question(question);

	if(userAns===answer){
		score+=1;
		console.log("Correct");
	}else{
		console.log("Wrong");
	}

	console.log("Current score : ", score);
	console.log("-------------");
}


function play(){
	for(let i=0;i<questions.length;i++){
		quiz(questions[i].question,questions[i].answer);
	}
}

function displayScore(){
	console.log("Your total score "+ score);	
	for(let i=0;i<highScores.length;i++){
		console.log(highScores[i].name + " has scored the highest i.e"+ highScores[i].score);
	}
}


play();
displayScore();