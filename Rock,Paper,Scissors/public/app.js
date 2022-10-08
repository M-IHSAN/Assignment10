function mainClick() {

    let computerChoice = Math.random()
    let option

    const userChoice = Number(document.getElementById("userChoice").value)


    if (computerChoice > 0 && computerChoice <= 0.499999999) {
        //computerChoice="scissor"
        computerChoice = 1
        option = "scissor"
    }
    else if (computerChoice >= 0.5 && computerChoice <= 0.7999999) {
        // computerChoice="Paper"
        computerChoice = 2
        option = "Paper"
    }
    else if (computerChoice >= 0.8 && computerChoice <= 1.0) {
        // computerChoice="stone"
        computerChoice = 3
        option = "Rock"

    }



    if ((computerChoice == 1 && userChoice == 2) || (computerChoice == 3 && userChoice == 1) || (computerChoice == 2 && userChoice == 3)) {

        document.getElementById("result").innerHTML = "Computer Won"
        document.getElementById("computerResult").innerHTML = "Computer select   " + option

    }
    else if ((computerChoice == 2 && userChoice == 1) || (computerChoice == 1 && userChoice == 3) || (computerChoice == 3 && userChoice == 2)) {

        document.getElementById("result").innerHTML = "You Won"

        document.getElementById("computerResult").innerHTML = "Computer selected   " + option



    }
    else if (computerChoice == userChoice) {
        document.getElementById("result").innerHTML = "Tie"

        document.getElementById("computerResult").innerHTML = "Computer selected   " + option

    }

window.onload
}
function refresh() {
    document.getElementById("result").innerHTML = " </br> "

    document.getElementById("computerResult").innerHTML = " </br> "
}
function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
}
