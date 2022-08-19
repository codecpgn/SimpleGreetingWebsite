
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css" //for monitoring css
let currDate = new Date();
currDate= currDate.getHours();
let greeting ='';
//const cssStyle ={
 // color : 'green'
//};

if(currDate>=1 && currDate <12){
  greeting="Good morning";
}
else if (currDate>=12 && currDate<19){
  greeting ="Good Afternoon ";
}else{
  greeting ="Good Night"
}


ReactDOM.render(
  <>
<h1>hello guys, {greeting}</h1>
</>,
document.getElementById("root")
);