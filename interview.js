const interviews=[

{

company:"Google",

question:"Tell me about yourself.",

answer:"Introduce yourself briefly covering education, skills, projects and career goals."

},

{

company:"Amazon",

question:"Explain OOP Principles.",

answer:"Encapsulation, Inheritance, Polymorphism and Abstraction."

},

{

company:"Microsoft",

question:"What is DBMS?",

answer:"DBMS is software that stores, retrieves and manages data efficiently."

},

{

company:"TCS",

question:"Why should we hire you?",

answer:"Mention your technical skills, communication, teamwork and willingness to learn."

}

];

const container=document.getElementById("questionContainer");

function display(data){

container.innerHTML="";

data.forEach((q,i)=>{

container.innerHTML+=`

<div class="card p-4">

<h4>

${q.question}

<span class="favorite" onclick="favorite('${q.question}')">

⭐

</span>

</h4>

<p>

<span class="badge bg-primary">

${q.company}

</span>

</p>

<button

class="btn btn-success"

onclick="show(${i})">

Show Answer

</button>

<div

class="answer"

id="ans${i}">

${q.answer}

</div>

</div>

`;

});

}

display(interviews);

function show(i){

const ans=document.getElementById("ans"+i);

ans.style.display=

ans.style.display==="block"

?

"none"

:

"block";

}

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

display(

interviews.filter(q=>

q.question.toLowerCase().includes(value))

);

});

document.getElementById("company").addEventListener("change",function(){

if(this.value==="All"){

display(interviews);

}

else{

display(

interviews.filter(q=>

q.company===this.value)

);

}

});

function favorite(question){

let fav=

JSON.parse(localStorage.getItem("favorites")) || [];

if(!fav.includes(question)){

fav.push(question);

}

localStorage.setItem("favorites",JSON.stringify(fav));

alert("Question Added to Favorites");

}