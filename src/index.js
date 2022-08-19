
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css" //for monitoring css
let currDate = new Date();
currDate= currDate.getHours();
let greeting ='';

const cssStyle ={}
;

if(currDate>=1 && currDate <12){
  greeting="Good morning";
  cssStyle.color= "yellow";
}
else if (currDate>=12 && currDate<19){
  greeting ="Good Afternoon ";
  cssStyle.color= "red";
}else{
  greeting ="Good Night"
  cssStyle.color= "orange";
}


ReactDOM.render(
  <>
<h1>Hello Guys, <span style={cssStyle}>{greeting}</span></h1>
</>,
document.getElementById("root")
);