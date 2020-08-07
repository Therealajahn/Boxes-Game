function placeObject(element,x,y){
    let object = document.getElementsByClassName(element)[0];
    object.style.marginLeft = `${x * 25}px`;
    object.style.marginTop = `${(20 - y) * 25}px`;
};

function applyKeyInput(element,x,y){
    
    document.addEventListener('keydown',(e)=>{
        console.log('key', e.key);
      
        if(element === 'player'){
            if(e.key === 'ArrowRight') x += 1;
            if(e.key === 'ArrowLeft') x -= 1;
            if(e.key === 'ArrowUp') y += 1;
            if(e.key === 'ArrowDown') y -= 1;
            placeObject(element,x,y);
        }

    })
   
}



function controlPlayer(){
    let x = 2;
    let y = 18;
    
    placeObject('player',x,y);
    applyKeyInput('player',x,y);
    
   

};

controlPlayer();

placeObject('enemy',1,14);


placeObject('player-weapon',5,16);

let start = performance.now();
function gameLoop(timestamp){
    console.log('timestamp', timestamp)
   

    let time = document.getElementsByClassName('time')[0];
    time.innerHTML = performance.now();


    function detectWeaponInput(x,y){
    
        let direction = '';
        document.addEventListener('keydown',(e)=>{
            console.log('key', e.key);
          
          
                direction = e.key;
                if(e.key === 'z'){
                    moveWeapon();
                }
                
            
           
            // moveWeapon();
        })
       
    }
    detectWeaponInput();

    function moveWeapon(){
    
        let progress = now - now;
        let x = 0;
        let y = 0;
        
        placeObject('player-weapon',x,y);
        
        
    }

    
    requestAnimationFrame(gameLoop);
} 

requestAnimationFrame(gameLoop);






