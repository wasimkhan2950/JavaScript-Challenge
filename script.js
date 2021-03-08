
function ageInDays()
{
var birthyr= prompt('what yr u were born..');
var ageInDayss= (2020 - birthyr)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('You are ' + ageInDayss + ' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1); 

}

function reset(){
    document.getElementById('ageInDays').remove();
}

//challenge 2 cat generator
function generateCat(){
    var image= document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//challenge 3 Rock Papper Scissor
function rpsGame(youChoice){
    console.log(youChoice);
    var humanChoice,botChoice;
    humanChoice=youChoice.id;

    botChoice=numberToChoice(randToRpsInt());
    console.log('Computer Choice:',botChoice);

    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    message=finalMessage(results);
    console.log(message);

    rpsFrontEnd(youChoice.id,botChoice,message);


}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissor'][number];
}

function decideWinner(youChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'scissor':0, 'rock':1, 'paper':0.5},
        'scissor':{'scissor':0.5, 'rock':0, 'paper':1}
    };
    var youScore= rpsDatabase[youChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][youChoice];
    
    return [youScore,computerScore];
}

function finalMessage([youScore,computerScore]){
    if (youScore===0){
        return{'message':'You Lost:','color':'red'};
    }else if(youScore===0.5){
        return{'message':'You Tied:','color':'yellow'};
    }else{
            return{'message':'You Win:','color':'green'};
    }
}

function rpsFrontEnd(humanImgChoice,botImageChoice,finalMessage){
    var imageDatabase={
        'rock':document.getElementById('rock').src ,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imageDatabase[humanImgChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1) ;'>"
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size:60px; padding:30px;'>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='"+imageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4 : Change The Color Of All Button
;
var all_buttons=document.getElementsByTagName('button');

var copyAllButtons =[];
for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red'){
        buttonsRed();
    }else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    }else if (buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    let choices=['btn-primary','btn-danger','btn-success','btn-warning']

    for(let i=0; i<all_buttons.length; i++){
        let randomNumber= Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}                                                             

//Challenge 5: Blackjack

let blackjackGame={
    'you': {'scoreSpan': '#your-blackjack-result','div':'#your-box','score':0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards' :['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2' : 2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,

};

const YOU=blackjackGame['you']
const DEALER=blackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a')
const winSound = new Audio('sounds/cash.mp3')
const lossSound = new Audio('sounds/aww.mp3')
const drewSound = new Audio('sounds/drew.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    if(blackjackGame['isStand']===false){    
        let card= randomCard();                                             
        showCard(card,YOU);
        updateScore(card,YOU);
        showScore(YOU);
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}

function randomCard(){
    let randomIndex=Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21) {
        let cardImage=document.createElement('img');
        cardImage.src=`images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);    
        hitSound.play();
    }
}

function blackjackDeal(){
    if (blackjackGame['turnsOver']===true){

        blackjackGame['isStand']=false;
    let yourImages= document.querySelector("#your-box").querySelectorAll('img');
    let dealerImages= document.querySelector("#dealer-box").querySelectorAll('img');
    for(i=0; i < yourImages.length; i++){
        yourImages[i].remove();
    }
    for(i=0; i < dealerImages.length; i++){
        dealerImages[i].remove();
    }

    YOU['score']=0;
    DEALER['score']=0;

    document.querySelector('#your-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').textContent=0;

    document.querySelector('#your-blackjack-result').style.color='#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color='#ffffff';

    document.querySelector('#blackjack-result').textContent="Let's Play";
    document.querySelector('#blackjack-result').style.color="black";

    blackjackGame['turnsOver']=true;
}}

function updateScore(card, activePlayer){
    if(card ==='A'){
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1]<=21){
            activePlayer['score']+=blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score']+=blackjackGame['cardsMap'][card][0];
        }
        } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new  Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
    blackjackGame['isStand']=true;
    while (DEALER['score']<16 && blackjackGame['isStand']===true){
    let card=randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
    await sleep(1000);
    }
        blackjackGame['turnsOver']=true;
        let winner=computeWinner();
        showResult(winner);
        console.log(blackjackGame['turnsOver']);
}

function computeWinner(){
    let winner;

    if (YOU['score']<=21){
        if(YOU['score']> DEALER['score'] || (DEALER['score']>21)){
            blackjackGame['wins']++;
            winner=YOU;

        }else if(YOU['score']< DEALER['score'] ){
            blackjackGame['losses']++;
            winner=DEALER;

        }else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;

        }else if(YOU['score']>21 && DEALER['score'] <=21){
            blackjackGame['losses']++;
            winner=DEALER;

        }else if(YOU['score']>21 && DEALER['score'] >21){
            blackjackGame['draws']++;
        }
        console.log(blackjackGame);
        return winner;
    }
}

function showResult(winner){
    let message,messageColor;
    if(blackjackGame['turnsOver']===true){
    if (winner===YOU){
        document.querySelector('#wins').textContent=blackjackGame['wins'];
        message='You won!';
        messageColor='green';
        winSound.play();
    }
    else if(winner===DEALER){
        document.querySelector('#losses').textContent=blackjackGame['losses'];
        message='You lost!';
        messageColor='red';
        lossSound.play();
    }else{
        document.querySelector('#draws').textContent=blackjackGame['draws'];
        message='You drew!';
        messageColor='yellow';
        drewSound.play();
    }
    document.querySelector('#blackjack-result').textContent=message;
    document.querySelector('#blackjack-result').style.color=messageColor;
    }
}

//Challenge 6: AJAX & API's with JavaScript
/*consturl = 'https://randomuser.me/api/?results=10';
fetch(url)
    .then(resp=> resp.json())
    .then(data=>{
        let authors=data.results;
        console.log(authors);
        for(i=0; i<authors.length; i++){
            let div =document.createElement('div');
            let img =document.createElement('img');
            let p =document.createElement('p');
            p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)}`));
            img.src=authors[i].picture.large;
            div.appendChild(image);
            div.appendChild(p);
            document.querySelector('.container-6 .flex-ajax-row-1').appendChild(div);
        }
    });

let title=str=>str[0].toUpperCase()+str.slice(1);

function mustafa(){
    return '5'
}
function resp(){
    return resp.json();
}*/