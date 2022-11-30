// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
    let giftCards = []
for(let i=0;i<names .length;i++){
    giftCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)

}
return giftCards

}
function countDown(number){
    while(number>=0){
        console.log(number--);
    }
}