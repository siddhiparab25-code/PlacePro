const questions=[

{
title:"Two Sum",
difficulty:"Easy",
company:"Amazon",
question:"Find two numbers whose sum equals target.",
solution:"Use a HashMap to store visited numbers. Time Complexity: O(n)."
},

{
title:"Merge Intervals",
difficulty:"Medium",
company:"Google",
question:"Merge all overlapping intervals.",
solution:"Sort intervals and merge sequentially."
},

{
title:"LRU Cache",
difficulty:"Hard",
company:"Microsoft",
question:"Design an LRU Cache.",
solution:"Use HashMap + Doubly Linked List."
},

{
title:"Reverse String",
difficulty:"Easy",
company:"TCS",
question:"Reverse a string without using built-in functions.",
solution:"Swap characters from both ends."
},

{
title:"Maximum Subarray",
difficulty:"Medium",
company:"Adobe",
question:"Find maximum sum contiguous subarray.",
solution:"Kadane's Algorithm O(n)."
}

];

const container=document.getElementById("questionContainer");

function display(data){

container.innerHTML="";

data.forEach((q,index)=>{

container.innerHTML+=`

<div class="card p-4">

<h3>

${q.title}

<span class="bookmark" onclick="bookmark('${q.title}')">

🤍

</span>

</h3>

<p>

<span class="badge bg-primary">

${q.company}

</span>

<span class="badge bg-success">

${q.difficulty}

</span>

</p>

<p>${q.question}</p>

<button
class="btn btn-primary"
onclick="show(${index})">

Show Solution

</button>

<div
class="solution"
id="sol${index}">

${q.solution}

</div>

</div>

`;

});

}

display(questions);

function show(i){

let box=document.getElementById("sol"+i);

box.style.display=
box.style.display==="block"
?
"none"
:
"block";

}

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

display(

questions.filter(q=>

q.title.toLowerCase().includes(value)

)

);

});

document.getElementById("difficulty").addEventListener("change",function(){

if(this.value==="All"){

display(questions);

}

else{

display(

questions.filter(q=>

q.difficulty===this.value)

);

}

});

function bookmark(title){

let list=

JSON.parse(localStorage.getItem("bookmarks")) || [];

if(!list.includes(title)){

list.push(title);

}

localStorage.setItem("bookmarks",JSON.stringify(list));

alert("Bookmarked Successfully!");

}