// When the user scrolls the page, execute myFunction
if(screen.width>600)
window.onscroll = function() {myFunction()};

window.onload = function() {
    // alert("yoo")
    if(screen.width>600)
{
    console.log((1/window.pageYOffset)*1000)

    if ((1/window.pageYOffset)*1000>2)
    {

    if ((1/window.pageYOffset)*1000<5.5)
    {
     document.getElementById("fossil").style.fontSize=(1/window.pageYOffset)*1000+"vw";
     document.getElementById("mainHeaderToFloat").style.opacity="65%"
    }
    // code to execute on the page load
    }
    else{
        document.getElementById("fossil").style.fontSize=2+"vw";
     document.getElementById("mainHeaderToFloat").style.opacity="65%"
    }
  }
  }

// Get the header
var header = document.getElementById("myHeader");

var TextMain1 = document.getElementById("mainHeader");


var z = document.createElement('div1'); // is a node
z.innerHTML = 'test satu dua tiga';


// Get the offset position of the navbar
var sticky = TextMain1.offsetTop;
// var sticky2 = document.getElementById("mainHeaderToFloat")


// header.remove();

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // header.style.visibility = "visible";
if(screen.width>600)
{
    if((1/window.pageYOffset)*1000>3)
    {
        document.getElementById("fossilBack").style.backgroundColor = "#e5d8d3"
        document.getElementById("mainHeader").style.opacity="100%"  
        document.getElementById("mainHeaderToFloat").style.opacity="100%"
    document.getElementById("borderMainRightV").style.visibility="hidden"
    }

  if (window.pageYOffset > sticky) 
  {
    // console.log((1/window.pageYOffset)*1000)

    if ((1/window.pageYOffset)*1000>2.2)
    {
    if ((1/window.pageYOffset)*1000<5.4)
    {
     document.getElementById("fossil").style.fontSize=(1/window.pageYOffset)*1000+"vw";
     document.getElementById("mainHeader").style.opacity = "85%";
    document.getElementById("fossilBack").style.backgroundColor = "#d5c2ba"
     document.getElementById("mainHeaderToFloat").style.opacity="0%"
     document.getElementById("borderMainRightV").style.visibility="visible"
    }
     else
     {
     document.getElementById("fossil").style.fontSize="5.4vw";
     }
    }


    // TextMain1.appendChild(z)
    // TextMain1.classList.add("sticky");
  } else {
     document.getElementById("fossil").style.fontSize="5.4vw";
    TextMain1.classList.remove("sticky");
    // TextMain1.removeChild(z)
    

    
    // header.style.visibility = "hidden";
  }
}
}