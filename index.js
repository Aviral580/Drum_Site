


// we don't use function() as it will directly call the listener
// so instead we use only the name of function to be called.
// now what are anonymous function:
// we don't give any name to the function instead we just write the function there in place
// if you want to write just alert() then also it will not do

for (var i=0; i<document.querySelectorAll('.drum').length; i++ ){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
    var btn = this.innerHTML;
    key_press(btn);
    btnAni(btn) 
    } );
}


// here we are getting inner html of the pressed button
// if you want to change the color of this then: this.style.color = 'white' ---->console.log(this.innerHTML);

// swtich is used here instead of if-else because it has efficiency here.


function key_press(key){
    switch (key) {
        case "f":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();  
            break;  
        case 'j':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();    
            break;      
        default:
            console.log(this)
            break;
    }
}

document.addEventListener('keypress',function(event){
    key_press(event.key);
    btnAni(event.key);
});

function btnAni(currentKey){
    var activebtn = document.querySelector('.' + currentKey);
    activebtn.classList.add("pressed");
    console.log(activebtn)
    // to remove delay : setTimeout(function to be executed, time to wait)
    setTimeout(function(){activebtn.classList.remove("pressed")}, 100)
}
// here also we just don't write our function we have to use either function or anonymous functions