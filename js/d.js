const data=[
	{
		question:"HTML Stands For ?",
		a:"Hyper Text Markup Language",
		b:"Hyper Transfer Markup Language",
		c:"Hyper Transfer Mark Language",
		d:"none",
		correct:"a",
	},
	{
		question:"CSS Stands For ?",
		a:"Content Style Sheet",
		b:"Cascading Style Sheet",
		c:"Cascading server sheet",
		d:"All of the Above",
		correct:"b",
	},
	{
		question:"SQL Stands For ?",
		a:"Structure Query language",
		b:"Simple Query language",
		c:"None",
		d:"Structured Query language",
		correct:"d",
	},
	{
		question:"When was C language created ?",
		a:"1975",
		b:"1988",
		c:"1970",
		d:"1997",
		correct:"c",
	},
	{
		question:"OOPS Stands For ?",
		a:"Object Oriented Programming System",
		b:"Object Oriented Programming Service",
		c:"Object Oriented Programm System",
		d:"Object Oriented Programming Simple",
		correct:"a",
	},
];

const qu=document.getElementById("qu")
const answerEls=document.querySelectorAll(".answer")
const questionEl=document.getElementById("question")
const a1=document.getElementById("a1");
const b1=document.getElementById("b1");
const c1=document.getElementById("c1");
const d1=document.getElementById("d1");
const subbtn=document.getElementById("submit")

let currentquiz=0
let score=0

loadQuiz()

function loadQuiz()
{
	deselectAnswers()
	const Qdata=data[currentquiz]
	questionEl.innerText=Qdata.question
	a1.innerText=Qdata.a
	b1.innerText=Qdata.b
	c1.innerText=Qdata.c
	d1.innerText=Qdata.d
}

function deselectAnswers()
{
	answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected()
{
	let answer
	answerEls.forEach(answerEl => {
		if(answerEl.checked)
		{
			answer=answerEl.id
		}
	})
	return answer;
}

subbtn.addEventListener('click', () => {
	const answer = getSelected()
	if(answer){
		if (answer === data[currentquiz].correct){
			score++
		}
		currentquiz++
		if(currentquiz<data.length){
			loadQuiz()
		}
		else
		{
			qu.innerHTML=
		    "You Answerd "+score+" Question Correctly & Final Result "+score+"/"+data.length
			//console.log("You Answerd "+(score/data.length)+" Question Correctly");
      
		}
	}
})

	var dt=new Date();
dt.setMinutes(dt.getMinutes()+1);
var countDownDate = dt.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  //Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m "+seconds+"s ";
    
  // If the count down is over, write some text 
  if (distance < 0) 
  {
    clearInterval(x);
    //document.getElementById("demo").innerHTML = "EXPIRED";
    window.location.href="end.html";
  }
}, 1000);
