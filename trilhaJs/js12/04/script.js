const buttonCards = document.getElementById('pickRandomCards');
const showResult = document.getElementById('result');
const showResultCards = document.getElementById('resultCards');

const cardsValue = [' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', ' 10', ' J', ' Q', ' K', ' A'];
const orderCarsdValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const cardsSuit = ['copas', 'paus', 'ouro', 'espada'];

const cards = [];
const cardsResult = [];


function deckCards() {

    for (let cS = 0; cS < cardsSuit.length; cS++) {
        for (let cV = 0; cV < cardsValue.length; cV++) {
            let objCards = {};
            objCards.suit = cardsSuit[cS];
            objCards.value = cardsValue[cV];
            objCards.orderValue = orderCarsdValue[cV];
            cards.push(objCards);
            console.log(cards);
        }
    }
    return cards;
}

console.log(deckCards());

function randomCards(cards) {
    const randomPickCards = cards.sort(() => Math.random() - 0.5);
    console.log(cards);
    cardsResult.push(randomPickCards[0], randomPickCards[1], randomPickCards[2], randomPickCards[3], randomPickCards[4]);
    cards.splice(0, 5);
    return cardsResult;
}
console.log(randomCards(cards));

buttonCards.addEventListener('click', function () {
    cardsResult.length = 0;
    randomCards(cards);
    if (cards.length < 5) {
        showResult.innerHTML = 'Não há mais cartas no baralho';
    } else if (
        cardsResult[0].suit == cardsResult[1].suit &&
        cardsResult[0].suit == cardsResult[2].suit &&
        cardsResult[0].suit == cardsResult[3].suit &&
        cardsResult[0].suit == cardsResult[4].suit &&
        cardsResult[0].orderValue + 1 == cardsResult[1].orderValue &&
        cardsResult[0].orderValue + 2 == cardsResult[2].orderValue &&
        cardsResult[0].orderValue + 3 == cardsResult[3].orderValue &&
        cardsResult[0].orderValue + 4 == cardsResult[4].orderValue
    ) {
        showResult.innerHTML = 'Straight Flush';
    }
    else if (
        cardsResult[0].orderValue == cardsResult[1].orderValue &&
        cardsResult[1].orderValue == cardsResult[2].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue ||

        cardsResult[1].orderValue == cardsResult[2].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue ||

        cardsResult[2].orderValue == cardsResult[3].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue &&
        cardsResult[4].orderValue == cardsResult[0].orderValue ||

        cardsResult[3].orderValue == cardsResult[4].orderValue &&
        cardsResult[4].orderValue == cardsResult[0].orderValue &&
        cardsResult[0].orderValue == cardsResult[1].orderValue ||

        cardsResult[4].orderValue == cardsResult[0].orderValue &&
        cardsResult[0].orderValue == cardsResult[1].orderValue &&
        cardsResult[1].orderValue == cardsResult[2].orderValue
    ) {
        showResult.innerHTML = 'Quadra';
    }
    else if (
        cardsResult[0].value == cardsResult[1].value &&
        cardsResult[1].value == cardsResult[2].value &&
        cardsResult[3].value == cardsResult[4].value ||

        cardsResult[1].value == cardsResult[2].value &&
        cardsResult[2].value == cardsResult[3].value &&
        cardsResult[4].value == cardsResult[0].value ||

        cardsResult[2].value == cardsResult[3].value &&
        cardsResult[3].value == cardsResult[4].value &&
        cardsResult[0].value == cardsResult[1].value ||

        cardsResult[3].value == cardsResult[4].value &&
        cardsResult[4].value == cardsResult[0].value &&
        cardsResult[1].value == cardsResult[2].value ||

        cardsResult[4].value == cardsResult[0].value &&
        cardsResult[0].value == cardsResult[1].value &&
        cardsResult[2].value == cardsResult[3].value
    ) {
        showResult.innerHTML = 'Full House';
    }
    else if (
        cardsResult[0].orderValue + 1 == cardsResult[1].orderValue &&
        cardsResult[0].orderValue + 2 == cardsResult[2].orderValue &&
        cardsResult[0].orderValue + 3 == cardsResult[3].orderValue &&
        cardsResult[0].orderValue + 4 == cardsResult[4].orderValue
    ) {
        showResult.innerHTML = 'Sequência';
    }

    else if (
        cardsResult[0].orderValue == cardsResult[1].orderValue &&
        cardsResult[1].orderValue == cardsResult[2].orderValue ||

        cardsResult[0].orderValue == cardsResult[2].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue ||

        cardsResult[0].orderValue == cardsResult[3].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue ||

        cardsResult[1].orderValue == cardsResult[2].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue ||

        cardsResult[1].orderValue == cardsResult[3].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue ||

        cardsResult[2].orderValue == cardsResult[3].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue ||

        cardsResult[2].orderValue == cardsResult[4].orderValue &&
        cardsResult[4].orderValue == cardsResult[0].orderValue ||

        cardsResult[3].orderValue == cardsResult[4].orderValue &&
        cardsResult[4].orderValue == cardsResult[0].orderValue ||

        cardsResult[4].orderValue == cardsResult[1].orderValue &&
        cardsResult[1].orderValue == cardsResult[2].orderValue ||

        cardsResult[4].orderValue == cardsResult[2].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue ||

        cardsResult[4].orderValue == cardsResult[3].orderValue &&
        cardsResult[3].orderValue == cardsResult[0].orderValue ||

        cardsResult[4].orderValue == cardsResult[0].orderValue &&
        cardsResult[0].orderValue == cardsResult[1].orderValue
    ) {
        showResult.innerHTML = 'Trinca';
    }
    else if (
        cardsResult[0].orderValue == cardsResult[1].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue ||

        cardsResult[0].orderValue == cardsResult[1].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue ||

        cardsResult[0].orderValue == cardsResult[2].orderValue &&
        cardsResult[4].orderValue == cardsResult[1].orderValue ||

        cardsResult[1].orderValue == cardsResult[2].orderValue &&
        cardsResult[3].orderValue == cardsResult[4].orderValue ||

        cardsResult[1].orderValue == cardsResult[2].orderValue &&
        cardsResult[4].orderValue == cardsResult[0].orderValue ||

        cardsResult[2].orderValue == cardsResult[3].orderValue &&
        cardsResult[4].orderValue == cardsResult[1].orderValue ||

        cardsResult[2].orderValue == cardsResult[3].orderValue &&
        cardsResult[1].orderValue == cardsResult[4].orderValue ||

        cardsResult[3].orderValue == cardsResult[4].orderValue &&
        cardsResult[1].orderValue == cardsResult[2].orderValue ||

        cardsResult[3].orderValue == cardsResult[4].orderValue &&
        cardsResult[2].orderValue == cardsResult[0].orderValue ||

        cardsResult[4].orderValue == cardsResult[1].orderValue &&
        cardsResult[2].orderValue == cardsResult[3].orderValue ||

        cardsResult[4].orderValue == cardsResult[1].orderValue &&
        cardsResult[3].orderValue == cardsResult[0].orderValue ||

        cardsResult[4].orderValue == cardsResult[0].orderValue &&
        cardsResult[1].orderValue == cardsResult[2].orderValue

    ) {
        showResult.innerHTML = 'Dois pares';

    } else if (
        cardsResult[0].value == cardsResult[1].value ||
        cardsResult[0].value == cardsResult[2].value ||
        cardsResult[0].value == cardsResult[3].value ||
        cardsResult[0].value == cardsResult[4].value ||

        cardsResult[1].value == cardsResult[2].value ||
        cardsResult[1].value == cardsResult[3].value ||
        cardsResult[1].value == cardsResult[4].value ||

        cardsResult[2].value == cardsResult[3].value ||
        cardsResult[2].value == cardsResult[4].value ||

        cardsResult[3].value == cardsResult[4].value 
    ) {
        showResult.innerHTML = 'Par';
    } else {
        showResult.innerHTML = 'Nada';
    }

    console.log(cardsResult);
    showResultCards.innerHTML = `
    <p>${cardsResult[0].value} de ${cardsResult[0].suit} - ${cardsResult[1].value} de ${cardsResult[1].suit} - ${cardsResult[2].value} de ${cardsResult[2].suit} - ${cardsResult[3].value} de ${cardsResult[3].suit} - ${cardsResult[4].value} de ${cardsResult[4].suit}</p> `;
});
