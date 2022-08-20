import React from "react";
 function App(){
    let currDate = new Date();
    currDate= currDate.getHours();
    let greeting ='';
    
    const cssStyle ={}
    ;
    
    if(currDate>=1 && currDate <12){
      greeting="Good morning";
      cssStyle.color= "orange";
    }
    else if (currDate>=12 && currDate<19){
      greeting ="Good Afternoon ";
      cssStyle.color= "red";
    }else{
      greeting ="Good Night"
      cssStyle.color= "gray";
    }
    return(
        <>
        <h1>Hello Guys, <span style={cssStyle}>{greeting}</span></h1>
        </>
    );

 }
 export default App;