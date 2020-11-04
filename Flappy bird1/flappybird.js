
var cvs=document.getElementById("canvas")
var ctx=cvs.getContext("2d")
var pipe=[] //var pipe=new Array()
pipe[0]={x:cvs.width,y:0}
var bx=10
var by=150
var gravity=1.5
var bird=new Image()
var bg=new Image()
var fg=new Image()
var pipeSouth=new Image()
var pipeNorth=new Image()
bird.src="images/bird.png"
bg.src="images/BackgroundImage.png"
fg.src="images/foregroundImage.png"
pipeNorth.src="images/pipeNorth.png"
pipeSouth.src="images/pipeSouth.png"
var fly=new Audio()
var scoreSound=new Audio()
fly.src="sounds/fly.mp3"
scoreSound.src="sounds/score.mp3"
var score=0
document.addEventListener("keydown",moveup)
document.addEventListener("touchstart",moveup)
function moveup(){
    var flag=0
    
   /* var inter=setInterval(
        function (){
            flag+=1
            by-=5 //this=by=by-5
            if(flag>10){
                clearInterval(inter)
            }
            fly.play()
        }
    ,20)*/
    var inter= setInterval(function(){flag += 1
        fly.muted = false         
        by -= 5 ;
                                  if(flag > 10)
                                      {
                                          clearInterval(inter);
                                      }
            fly.play();
                                  

                                  
                                 }, 20);
        }

var constant
var gap = 85
function draw(){
    ctx.drawImage(bg,0,0)
    console.log(pipe.length)
    for (var i=0;i<pipe.length ;i++){
        constant=pipeNorth.height+gap
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y)
        
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant)
        pipe[i].x--
        // if (pipe[i].x == 125) {
        //     pipe.push({
        //       x: cvs.width,
        //       y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
        //     });
        //   }
        if(pipe[i].x==125){
            pipe.push({x:cvs.width,y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height}) //try to multiply random with 10
        }
         if( (bx + bird.width >= pipe[i].x &&
            bx <= pipe[i].x + pipeNorth.width &&
            (by <= pipe[i].y + pipeNorth.height ||
              by + bird.height >= pipe[i].y + constant)) ||
          by + bird.height >= cvs.height - fg.height
        )
    
    
     
    {
            
             alert("Game Over.Your score is"+ score)
             location.reload()
         }
        // if(bx+bird.width>=pipe[i].x && by<=pipeSouth.height+pipe[i].y ){
        //     alert("Game Over.Your score is"+ score)
        //     location.reload()
        //    }
        
        if(pipe[i].x==5){
            score++
            scoreSound.play()
        
        }

    }
    ctx.drawImage(fg,0,cvs.height-fg.height)
    ctx.drawImage(bird,bx,by)
    by+=gravity
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,15,cvs.height-20);
    
    requestAnimationFrame(draw);
}
draw()