const ctx=document.getElementById("progressChart");

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Questions Solved",

data:[12,18,25,20,32,40,48],

borderColor:"#2563eb",

backgroundColor:"rgba(37,99,235,.2)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:true

}

}

}

});