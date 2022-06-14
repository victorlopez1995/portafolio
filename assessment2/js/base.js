let slideNumber = 0 ;
let count = true;
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");
let slide5 = document.querySelector(".slide5");

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
           count=true;
          console.log("Left key is pressed.");
          addnumber();
          changes();

          break;
       case 39:  
            count=false;
          console.log("Right key is pressed.");
          changes();
          addnumber();
          break;
    }
 };

function addnumber () {
    if(count){
        slideNumber = slideNumber-1
    }else{
        slideNumber = slideNumber+1
    }
}

function changes(){
    switch (slideNumber){
        case 0:
            slide1.classList.toggle("slide1-1"); 
            console.log(slideNumber);
            break;
        case 1:
            slide1.classList.toggle("slide1-2"); 
            console.log(slideNumber);
            break;
        case 2:
            slide2.classList.toggle("slide2-1"); 
            console.log(slideNumber);
            break;
        case 3:
            slide2.classList.toggle("slide2-2"); 
            console.log(slideNumber);
            break;
        case 4:
            slide2.classList.toggle("slide2-3"); 
            console.log(slideNumber);
            break;  
        case 5:
            slide2.classList.toggle("slide2-4");
            slide3.classList.toggle("slide3-1"); 
            console.log(slideNumber);
            break;
        case 6:
            slide3.classList.toggle("slide3-2"); 
            console.log(slideNumber);
            break;
        case 7:
            slide3.classList.toggle("slide3-3"); 
            console.log(slideNumber);
            break; 
        case 8:
            slide3.classList.toggle("slide3-4"); 
            console.log(slideNumber);
            break;
        case 9:
            slide3.classList.toggle("slide3-5"); 
            console.log(slideNumber);
            break;            
        case 10:
            slide3.classList.toggle("slide3-6"); 
            console.log(slideNumber);
            break;
        case 11:
            slide3.classList.toggle("slide3-7"); 
            console.log(slideNumber);
            break;
        case 12:
            slide3.classList.toggle("slide3-8"); 
            console.log(slideNumber);
            break;
        case 13:
            slide3.classList.toggle("slide3-9"); 
            console.log(slideNumber);
            break;
        case 14:
            slide3.classList.toggle("slide3-10"); 
            console.log(slideNumber);
            break; 
        case 15:
            slide2.classList.toggle("slide2-5");
            slide3.classList.toggle("slide3-11"); 
            slide4.classList.toggle("slide4-1"); 
            console.log(slideNumber);
            break;
        case 16: 
            slide4.classList.toggle("slide4-2"); 
            console.log(slideNumber);
            break;
        case 17: 
            slide4.classList.toggle("slide4-3"); 
            console.log(slideNumber);
            break;
        case 18: 
            slide4.classList.toggle("slide4-4"); 
            console.log(slideNumber);
            break;
        case 19: 
            slide2.classList.toggle("slide2-6");
            slide4.classList.toggle("slide4-5"); 
            slide5.classList.toggle("slide5-1");
            console.log(slideNumber);
            break;  
        case 20: 
            slide5.classList.toggle("slide5-2");
            console.log(slideNumber);
            break;                                           
    }
}