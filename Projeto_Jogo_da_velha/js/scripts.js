let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Adicionar evento de clique aos boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2); //verifica quem vai jogar

        //Verifica se já tem x ou o
        if (this.childNodes.length == 0) {

            let cloneE1 = el.cloneNode(true); //clonando o elemento x ou o

            this.appendChild(cloneE1); //adicionando o clone ao box clicado

            //Computar a jogada
            if (player1 == player2) {
                player1++; //incrementa o contador do jogador 1

                if (secondPlayer == "ai-player") { //se o segundo jogador for a IA
                    //função executar a jogada
                    computerPlay(); //chama a função para jogar contra a IA
                    player2++;
                }

            } else {
                player2++; //incrementa o contador do jogador 2 
            }

            //Checa quem venceu
            checkWinCondition(player1, player2); //verifica se alguém venceu
        }
    });
}

//Evento para saber se é 2 players ou IA
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        secondPlayer = this.getAttribute("id"); //pega o id do botão clicado

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'; //esconde os botões
        }

        setTimeout(function () { //deixa o botão sumir antes de começar o jogo
            let container = document.querySelector("#container");
            container.classList.remove("hide"); //remove a classe hide para mostrar o tabuleiro
        }, 500); //500ms para sumir os botões

    });
}

//ve quem vai jogar
function checkEl(player1, player2) {

    if (player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}

//ve quem ganhou
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //horizonta2
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //horizonta3
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //Vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //Vertica2
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //Vertica3
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //Diagonal 1
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //Diagonal 2
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            console.log("x venceu");
            declareWinner('x');

        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            console.log("0 venceu");
            declareWinner('o');
        }
    }

    //Deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if (counter == 9) {
        declareWinner('deu velha'); //se o contador for 9, deu velha

    }

}

//Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");

    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha";
    }

    //Exibe a mensagem de vitória
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide"); //remove a classe hide para mostrar a mensagem

    //Esconde a mensagem de vitória
    setTimeout(function () {
        messageContainer.classList.add("hide"); //adiciona a classe hide para esconder a mensagem
    }, 3000); //esconde a mensagem após 3 segundos

    //Zera as jogadas
    player1 = 0;
    player2 = 0;

    //remove X e O dos boxes
    let boxesToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]); //remove o elemento filho do box
    }

}

//Função para jogar contra a IA
function computerPlay() {
    let cloneO = o.cloneNode(true); //clonando o elemento o
    counter = 0; //contador para verificar se a IA jogou
    filled = 0; //contador para verificar se o box está preenchido

    //Verifica se o box está preenchido
    for (let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5); //gerando um número aleatório entre 0 e 5

        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) { //se o número aleatório for menor ou igual a 1, a IA joga
                boxes[i].appendChild(cloneO); //adiciona o clone ao box clicado
                counter++; //incrementa o contador da IA
                break; //sai do loop
            }
        } else {
            filled++; //incrementa o contador de boxes preenchidos
        }
    }

    if (counter == 0 && filled < 9) { //se a IA não jogou e ainda tem boxes vazios
        computerPlay(); //chama a função novamente para jogar
    }

}