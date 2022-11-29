//game constants & variables

let inputDir = {x:0,y:0};
const foodSound = new Audio('https://akmahim.github.io/Front-end-components-build-up/snake-game-using-js/music/food.mp3');
const gameOverSound = new Audio('https://akmahim.github.io/Front-end-components-build-up/snake-game-using-js/music/gameover.mp3');
const moveSound = new Audio('https://akmahim.github.io/Front-end-components-build-up/snake-game-using-js/music/move.mp3');
const musicSound = new Audio('https://akmahim.github.io/Front-end-components-build-up/snake-game-using-js/music/music.mp3');
let speed = 4;
let score = 0;
lastPaintTime = 0;
let snakeArr = [
    {x:13,y:15}
]
let food  = {x:6,y:7};



// Game function

function main(ctime){
   window.requestAnimationFrame(main);
   if((ctime - lastPaintTime)/1000 < 1/speed ){
       return ;
   }
   lastPaintTime = ctime;
   gameEngine();
   
}

function isCollide(snake){
    //if you bump into yourself
    // for(let i = 1;i<snakeArr.length;i++){
    //     if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
    //         return true;
    //     }
        
    // }
    //if you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
    return false;
}

function gameEngine(){
    //part 1 : updating the snake array & food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0,y:0};
        alert("Game Over, Please press any button to play again");
        snakeArr = [
            {x:13,y:15}
        ];
        musicSound.play();
        score = 0;
         
    }
    // if you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score += 1;

        if(score > hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }

        s = document.getElementById('score');
        s.innerHTML = "Score: " + score;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y + inputDir.y})
        let a = 2;
        let b = 16;
        food = { x: Math.round( a+(b-a)* Math.random()), y: Math.round( a+(b-a)* Math.random() ) }

    }

    //moving the snake 
    for(let i = snakeArr.length - 2 ; i >= 0 ; i--){
        // const element = array[i];
        snakeArr[i+1] = {...snakeArr[i]};

    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



    // part 2 : display the snake and food

    //display the snake 
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index == 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');

        }
        board.appendChild(snakeElement);
    });

    // display the food of snake
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}










// Main logic starts here
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.getItem("hiscore",JSON.stringify(hiscoreval));
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "Hiscore: " + hiscore;
}
window.requestAnimationFrame(main) //frame loop 


//what happend when i presss a arrow button 

window.addEventListener('keydown',e =>{
    inputDir = {x:0,y:1};   //start the game and the input direction

    moveSound.play(); //play the move sound

    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            
            console.log(snakeArr);
            console.log(inputDir);
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
                        
            console.log(snakeArr);
            console.log(inputDir);
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
                        
            console.log(snakeArr);
            console.log(inputDir);
            break;
        
         case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
                        
            console.log(snakeArr);
            console.log(inputDir);
            break;

        default:
            break;
    }

}); 
