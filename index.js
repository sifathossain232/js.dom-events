// Option 1
// derectly set no the HTML Element
// {/* <button onclick="console.log(7);">Click Me</button> */}

// option 2
// {/* <button onclick="makeRead()">Make read</button> */}


// important! we will use this
function makeRead(){
    document.body.style.backgroundColor = 'red';
    
}

// option 3
const makeBlue =document.getElementById('make-blue');
        makeBlue.onclick = makeBlueBtn;
        function makeBlueBtn (){
            document.body.style.backgroundColor = 'blue'
        }

// option another 3
const makePurpleBtn = document.getElementById('make-purple');
        makePurpleBtn.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple'
        }

// Option 4
const pinkBtn = document.getElementById('make-pink');
        pinkBtn.addEventListener('click', makePink);
        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

// option another 4
const blackBtn = document.getElementById('make-black');
        blackBtn.addEventListener('click',function makeBlack(){
            document.body.style.backgroundColor = 'black';
        })

// option 4 final  [we will use some time]
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange'

})