const game = () => {


    let pscore = 0;
    let cscore = 0;

    const changetheme= () => {
        const changebutton = document.querySelector("#changebutton");
        const backimg = document.querySelector(".backgroundimg img");
        let changenum=1;
        changebutton.addEventListener("click", () => {
            if(changenum==1){
                changenum=2;
            }
            else{
                changenum=1;
            }
            backimg.src=(`./img/image${changenum}.png`);
        } )
    }
    const start = () => {
        const startbtn = document.querySelector("#start button");
        const startbar = document.querySelector("#start");
        const gplay = document.querySelector("#gplay");

        startbtn.addEventListener("click", () => {
            startbar.className += "fadeout";
            gplay.className += "fadein";
        })
    }


    const playmatch = () => {


        const option = document.querySelectorAll(".options button");
        console.log(option);
        const playerHand = document.querySelector(".playerHand");
        const computerHand = document.querySelector(".computerHand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach( hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation='';
            })
        })

        const optionarr = ["Stone", "Paper", "Scissors"];

        console.log(optionarr)

        option.forEach(element => {
            // console.log(element);
            element.addEventListener("click", function () {

                playerHand.src = `./img/Stone.png`;
                computerHand.src = `./img/Stone.png`;
                setTimeout(() => {
                    // computer choice
                    compnum = Math.floor(Math.random() * 3);
                    const compchoice = optionarr[compnum];
                    console.log(compchoice);

                    // player choice
                    const playerchoice = this.textContent;

                    //Calling comparison
                    comparison(compchoice, this.textContent);

                    // images
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${compchoice}.png`;
                }, 1000);

                //shake
                playerHand.style.animation = 'shakeplayer 1s ease ';
                computerHand.style.animation = "shakecomputer 1s ease";

            })


        })
        const updatescore = () => {
            const playerscore = document.querySelector("#Pscore");
            const computerscore = document.querySelector("#Cscore");
            playerscore.textContent = pscore;
            computerscore.textContent = cscore;

        }


        const comparison = (compchoice, playerchoice) => {
            //updating the text
            const winner = document.querySelector(".headgplay");
            if (compchoice === playerchoice) {
                winner.textContent = ("It's a tie!!");
                return;
            }
            //stone
            if (playerchoice === "Stone") {
                if (compchoice === "Scissors") {
                    winner.textContent = ("You Win");
                    pscore++;
                    updatescore();
                    return;
                }
                else {
                    winner.textContent = ("You Lose");
                    cscore++;
                    updatescore();
                    return;
                }
            }
            //paper
            if (playerchoice === "Paper") {
                if (compchoice === "Scissors") {
                    winner.textContent = ("You Lose");
                    cscore++;
                    updatescore();
                    return;
                }
                else {
                    winner.textContent = ("You Win");
                    pscore++;
                    updatescore();
                    return;
                }
            }
            // scissors
            if (playerchoice === "Scissors") {
                if (compchoice === "Paper") {
                    winner.textContent = ("You Win");
                    pscore++;
                    updatescore();
                    return;
                }
                else {
                    winner.textContent = ("You Lose");
                    cscore++;
                    updatescore();
                    return;
                }
            }

        }
    }

    changetheme();
    start();
    playmatch();
}
game();
