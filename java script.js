let navbar = document.getElementById('navbar');
function color() {
    // bar.style.top="40";

    if (document.body.scrollTop >= "600" || document.documentElement.scrollTop >= "600") {
        // console.log('at the top');
        navbar.style.backgroundColor = "#646464";
        console.log("navbar");
        // navbar.style.opacity = "0.5";
    } else {
        
        navbar.style.backgroundColor = "";
        navbar.style.opacity = "";
        // console.log('at the down');
    }

}

    
    window.onscroll = function () { color() };
 


//slides
let img1=document.getElementById("slide1");
let img2=document.getElementById("slide2");
let img3=document.getElementById("slide3");
let slide=0;


setInterval(function()  {
    slide=slide+1;
    switch (slide) {
        case 1:               
            img1.style.display="block";
            img2.style.display="none";
            img3.style.display="none";           
            console.log("slide 1");
            break;
        case 2:               
            img2.style.display="block";
            img3.style.display="none";
            img1.style.display="none";
            console.log("slide 2");
            break;
        case 3:               
            img3.style.display="block";
            img2.style.display="none";
            img1.style.display="none";
            console.log("slide 3");
            break;
    
        default:
            break;
    }
    if (slide>3) {
        slide=0;
    }

},3000);

