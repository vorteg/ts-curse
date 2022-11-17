const hexvalues:string[] = ["0","1","2","3","4","5","6","7","8","9"
,"A","B","C","D","E","F"];

const btn = document.getElementById('btn')!;
const color = document.querySelector('.color')!;


// btn?.addEventListener('click', function(){
//     let hexColor:string = '#';
//     for(let i=0; i <6; i++){
//         hexColor += hexvalues[getRandomNumber()];
//     }
//     color.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;
// })


btn.addEventListener('click', function(){
    generateColor(updateUI)
    
})

function updateUI(hexColor:string) {
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    }

function generateColor(update:(color:string)=> void){
    let hexColor:string = '#';
    for(let i=0; i <6; i++){
        hexColor += hexvalues[getRandomNumber()];
    }
    update(hexColor);
}

function getRandomNumber(){
    return Math.floor(Math.random()* hexvalues.length);
}