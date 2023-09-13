



// var button = document.querySelectorAll("button");

// var sesURL = "sounds/crash.mp3";
// var ses = new Audio(sesURL);


// button.forEach(function(button){
//    button.addEventListener("click",function(){
//       ses.play();



//    });
// });



for(var i=0; i < document.querySelectorAll(".drum").length; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function() {
       var buttoninnerHTML=this.innerHTML;
       
       switch (buttoninnerHTML) {
         case "w":
            var sesURL = "sounds/crash.mp3";
            var ses = new Audio(sesURL);
            ses.play();
            break;
         case "a":
            var sesURL="sounds/kick-bass.mp3";
            var ses = new Audio(sesURL);
            ses.play();
            break;
          case "s":
            var sesURL = "sounds/snare.mp3";
            var ses = new Audio(sesURL);
            ses.play();
            break;
         case "d":
            var sesURL = "sounds/tom-1.mp3";
            var ses = new Audio(sesURL);
            ses.play();
            break;
         
         case "j":
            var sesURL = "sounds/tom-2.mp3";
            var ses = new Audio(sesURL);
            ses.play();
            break;
         case "k":
            var sesURL = "sounds/tom-3.mp3";
            var ses = new Audio(sesURL);
            ses.play();
            break;

         case "l":
            var sesURL = "sounds/tom-4.mp3";
            var ses = new Audio(sesURL);
            ses.play();
         
            break;
            
            
         default:   
       }

      

   });
}; 


 document.addEventListener("keydown",function(event){
      if(event.key=="w"){
         var sesURL = "sounds/crash.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }

      else if (event.key=="a"){
         var sesURL="sounds/kick-bass.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }

      else if(event.key=="s"){
         var sesURL = "sounds/snare.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }

      else if(event.key=="d"){
         var sesURL = "sounds/tom-1.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }

      else if(event.key=="j"){
         var sesURL = "sounds/tom-2.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }

      else if(event.key=="k"){
         var sesURL = "sounds/tom-3.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }
      else if(event.key=="l"){
         var sesURL = "sounds/tom-4.mp3";
            var ses = new Audio(sesURL);
            ses.play();
      }


 });

 document.addEventListener("keydown",function(event){

   if(event.key=="1"){
      var sesURL = "sounds/1.mp3";
            var ses = new Audio(sesURL);
            ses.play();
   }

   else if(event.key=="2"){
      var sesURL = "sounds/2.mp3";
            var ses = new Audio(sesURL);
            ses.play();
   }
      else if(event.key=="3"){
      var sesURL = "sounds/3.mp3";
            var ses = new Audio(sesURL);
            ses.play();
   }

   }





 );

 var isAnimationActive = false;

function addAnimationClass() {
  var buttons = document.getElementsByClassName("drum");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("drumAnimation");
  }
}

function removeAnimationClass() {
  var buttons = document.getElementsByClassName("drum");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("drumAnimation");
  }
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 51 || event.key === "3") {
    if (!isAnimationActive) {
      addAnimationClass();
      isAnimationActive = true;
    } else {
      removeAnimationClass();
      isAnimationActive = false;
    }
  }
});





