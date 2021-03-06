
function play(choice) {
    document.getElementById('message-display').innerHTML = "What do you choose?"
    var validChoices = {
        scissors: true,
        paper: true,
        rock: true,
        dynamite: true
    }

    if (validChoices[choice]) {
        var choiceArray = ['rock','paper','scissors']
        var randomChoice = Math.floor(Math.random() * choiceArray.length)
        var computerChoice = choiceArray[randomChoice]

        displayMessage('Player has chosen ' + choice)
        displayMessage('Computer has chosen ' + computerChoice)

        findWinner(choice, computerChoice)
    } else {
        displayMessage(choice + ' is not a valid choice')
    }
}

function findWinner(choice, computerChoice) {
    if (choice == computerChoice) {
        displayMessage("It's a tie!")
    } else if (choice == 'dynamite') {
        displayMessage("Kaboom!")
        recordVictory('player')
    } else {
        var win = ((choice == 'scissors' && computerChoice == 'paper')
            || (choice == 'rock' && computerChoice == 'scissors')
            || (choice == 'paper' && computerChoice == 'rock'))
        if (win) {
            displayMessage("Player wins!")
            recordVictory('player')
        } else {
            displayMessage("Computer wins!")
            recordVictory('computer')
        }
    }
}

function displayMessage(message) {
    document.getElementById('message-display').innerHTML += ' <br> ' + message
}

function recordVictory(winner) {
    var record = parseInt(document.getElementById(winner + '-record').innerText) + 1
    document.getElementById(winner + '-record').textContent = record
    updateWinPercent()
}

function updateWinPercent() {
    var playerWin = parseInt(document.getElementById('player-record').textContent)
    var compWin = parseInt(document.getElementById('computer-record').textContent)

    var winPercent = Math.round(((playerWin)/(compWin + playerWin))* 100)
    document.getElementById('win-percent').textContent = winPercent
    //updateFlavor(winPercent)
}

// function updateFlavor(winPercent) {
//     if (winPercent > 60) {

//     }

//     else if () {

//     }
//     document.getElementById('flavor-img').innerHTML = 
// }