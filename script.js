score=0;
cross=true;

audiogo= new Audio('gameover.mp3')

document.onkeydown=function(e){
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('dinoanimate');
        setTimeout(()=>{
            dino.classList.remove('dinoanimate');
        },700);

    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox-112)+"px";
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+112+"px";
    }
}
setInterval(() => {
   dino=document.querySelector('.dino');
   obstacle=document.querySelector('.obstacle');
   gameover=document.querySelector('.gameover');
   
    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
   
    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);

    if(offsetx<80 && offsety<60){
        gameover.innerHTML= "<style: font-size:80px>" + "Game Over ! Please Reload to Play Again" + "</style>" +  "</br>";
        obstacle.classList.remove('obstacleanimate');
        audiogo.play();
        setTimeout(() => {
           audio.pause(); 
        }, 1000);
    }
    else if(offsetx<140 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
           cross=true; 
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
    }
}
,10);
function updatescore(score){
    scorecount.innerHTML="Your score :"+score;
}