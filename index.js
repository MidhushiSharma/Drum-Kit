for(var i=0;i<7;i++)
document.querySelectorAll("button")[i].addEventListener("click",handle);

function handle()
{
var value = this.innerHTML;
play(value);
anni(value);

}
document.addEventListener("keydown" , handle2);

function handle2(event)
{
  play(event.key);
  anni(event.key);
}

function play(key)
{
  switch(key)
  {
    case"w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case "j":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;
    case "l":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;
    default:
    console.log(value);
    break;
  }
}

function anni(vv)
{
  var vaani  = document.querySelector("."+ vv);
  vaani.classList.add("pressed");

  setTimeout(function()
{
  vaani.classList.remove("pressed");
},100);
}
