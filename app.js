
let sum = 0
// the isAlive function had to be changed because I want to generate random number immediately i click start button and not before, which means the firstcard and secondcard wont be defined up here anymore and the would be equal to 0 and the cards array will be empty
let isAlive = false
let hasBlackJack = false
let message = ''
// let startEl = document.getElementById('start-el')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let newcardEl = document.getElementById('newcard-el')
let cards = []
let player = {
    name:"Henry",
    chips:145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent=player.name+': $'+player.chips


// console.log(cards)
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }
}

 function startGame(){
     isAlive=true
     let firstCard = getRandomCard()
     let secondCard = getRandomCard()
     sum = firstCard+secondCard
     cards = [firstCard,secondCard]
     renderGame()
 }

 function renderGame(){
    //  rendered out the firstcard and secondard as an array
    cardsEl.textContent = 'cards: '
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+' '
    }
    sumEl.textContent = 'sum: '+ sum
    if (sum<21){
        message = 'Do you want to draw another card?'
    }
    else if(sum===21){
        message = 'wohoo youve got blackjack!'
        hasBlackJack = true
    }
    else{
        message = 'Youre out of the game'
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message)
}

newcardEl.addEventListener('click', function(){
    if(isAlive===true && hasBlackJack===false){
        // console.log('Drawing a new card from the Deck')
    let card =  getRandomCard()
    sum+= card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
    
   
})

// HOW TO GET RANDOM NUMBERS
// let player1time = 102
// let player2time = 107

// function getfastestracetime(){
//     if(player1time<player2time){
//         return player1time
//     }
//     else if(player2time<player1time){
//         return player2time
//     }
//     else{
//         return player1time
//     }
// }
// let fastestrace = getfastestracetime()
// console.log(fastestrace)

// function totalracetime(){
//     return player1time+player2time
// }
// let totaltime = totalracetime()
// console.log(totaltime)

// let randomnumber = Math.random()*6

// console.log(randomnumber)

// let floorednumber = Math.floor(3.45832)

// console.log(floorednumber)

// let comboof2 = Math.floor(Math.random()*6)

// console.log(comboof2)

// function rolldice(){
//    let dicenumbers = Math.floor(Math.random()*6)+1
//    return dicenumbers
// }
// console.log(rolldice())

// In blackjack there are thirteen(13) cards namely: Ace(A),2,3,4,5,6,7,8,9,10,Jack(J),Queen(Q),King(K).The Ace(A) is equivalent to be worth both one(1) and eleven(11) and the Jack,Queen and King are all equivalent to worth ten(10) all together making a total sum of 21 which gives BLACKJACK!



// Logical "AND" Operator
// In this situation both variables has to either be true or false before the code can be run

// let hassolvedchallenge = false
// let hasanyhintsleft = false

// if(hassolvedchallenge===false && hasanyhintsleft === false){
//     showsolution()
// }
// function showsolution(){
//     console.log('showing the solution...')
// }



// Logical "OR" Operator
// In this case only one of the variables is needed to be true or false for the code to run



// OBJECTS
let course={
    title:'learn CSS for free',
    lessons:16,
    creator:'Per Harald Borgen',
    length:63,
    level:2,
    isFree:true,
    tags:['html','css']
}

console.log(course.title)

let person = {
    name:'Henry',
    age:22,
    country:'Nigeria'
}
function logData(){
    return person.name+' is '+person.age+' years old '+'and lives'+' in '+person.country
}
console.log(logData())

let age = 81

if(age<6){
    console.log('free')
}
else if(age<18){
    console.log('child discount')
}
else if(age<26){
    console.log('student discount')
}
else if(age<66){
    console.log('full price')
}
else{
    console.log('senior citizen discount')
}

let largeCountries=['China','India','USA','Indonesia','Pakistan']
console.log('The largest countries in the world are')
for(let i=0; i<largeCountries.length; i++){
    console.log('- '+largeCountries[i])
}

let dayOfmonth=13
let weekday='friday'

if(dayOfmonth===13 && weekday==='friday'){
    console.log('spooky face')
}

let hands=['rock','paper','scissors']

function whichhand(){
    let handIndex = Math.floor(Math.random()*3)
    return hands[handIndex]
}
console.log(whichhand())