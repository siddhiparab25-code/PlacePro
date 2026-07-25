const questions = [

{
question:"What is Local Storage used for?",
options:[
"Store data permanently in the browser",
"Store data on the server",
"Create databases",
"Store images only"
],
answer:"Store data permanently in the browser"
},

{
question:"Which method is used to fetch data from an API?",
options:[
"getData()",
"fetch()",
"request()",
"load()"
],
answer:"fetch()"
},

{
question:"What does API stand for?",
options:[
"Application Programming Interface",
"Advanced Program Internet",
"Application Process Integration",
"Advanced Programming Internet"
],
answer:"Application Programming Interface"
},

{
question:"Which keyword is used to handle asynchronous operations?",
options:[
"wait",
"async",
"sync",
"delay"
],
answer:"async"
},

{
question:"Which keyword pauses an async function until a Promise resolves?",
options:[
"hold",
"await",
"pause",
"stop"
],
answer:"await"
},

{
question:"React is mainly used for?",
options:[
"Database Management",
"Building User Interfaces",
"Operating Systems",
"Game Development"
],
answer:"Building User Interfaces"
},

{
question:"Which company developed React?",
options:[
"Google",
"Microsoft",
"Facebook",
"Amazon"
],
answer:"Facebook"
},

{
question:"Which Bootstrap class creates a button with blue color?",
options:[
"btn-success",
"btn-danger",
"btn-primary",
"btn-warning"
],
answer:"btn-primary"
},

{
question:"Which ES6 keyword is used to declare a constant variable?",
options:[
"var",
"let",
"const",
"constant"
],
answer:"const"
},

{
question:"Which JavaScript method converts a JavaScript object into JSON format?",
options:[
"JSON.parse()",
"JSON.stringify()",
"JSON.convert()",
"JSON.object()"
],
answer:"JSON.stringify()"
}

];

let current=0;
let score=0;

const question=document.getElementById("question");
const options=document.getElementById("options");
const next=document.getElementById("nextBtn");

function loadQuestion(){

document.getElementById("questionNo").innerHTML=
`Question ${current+1}/10`;

document.getElementById("progressBar").style.width=
`${(current+1)*10}%`;

question.innerHTML=questions[current].question;

options.innerHTML="";

questions[current].options.forEach(option=>{

const btn=document.createElement("button");

btn.className="option";

btn.innerHTML=option;

btn.onclick=function(){

if(option===questions[current].answer){

score++;

}

next.disabled=false;

document.querySelectorAll(".option").forEach(o=>o.disabled=true);

}

options.appendChild(btn);

});

next.disabled=true;

}

loadQuestion();

next.onclick=function(){

current++;

if(current<questions.length){

loadQuestion();

}

else{

localStorage.setItem("aptitudeScore",score);

document.querySelector(".quiz-box").innerHTML=`

<h1 class="text-center text-success">

🎉 Quiz Completed

</h1>

<h2 class="text-center mt-4">

Your Score : ${score}/10

</h2>

<div class="text-center mt-4">

<a href="dashboard.html" class="btn btn-success">

Back to Dashboard

</a>

</div>

`;

}

};