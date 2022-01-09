let darkMode = () => {
  let element = document.getElementsByClassName("body")[0] // [0] cuz class are going through an array
  // let element = document.body 
  element.classList.toggle("dark");
}
























/* var myFunction = () => {
  let showcaseBlock = document.getElementsByClassName("showcase")[0] // add [0], since: getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as an HTMLCollection object.
  let myDivObjBgColor = window.getComputedStyle(showcaseBlock).backgroundColor;
  console.log("bg = ", myDivObjBgColor)
  
  //document.getElementsByClassName("showcase")[0].style.backgroundColor = "red"
  //showcaseBlock.style.backgroundColor = "#9ec1f9" 
    if (myDivObjBgColor == "rgb(0, 0, 0)") {
     document.getElementsByClassName("showcase")[0].style.backgroundColor = "rgb(158, 193, 249)"

  }
  else if (myDivObjBgColor == "rgb(158, 193, 249)") {
    document.getElementsByClassName("showcase")[0].style.backgroundColor = "rgb(0, 0, 0)"
    
  }
}
/*
if (document.body.style.background=="white"){
  document.body.style.background="purple";
}else if(document.body.style.background=="purple"){
  document.body.style.background="white";
}
*/