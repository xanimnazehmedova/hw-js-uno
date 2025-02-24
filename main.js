const colors = ["red", "yellow", "green", "blue"];
const numbers = Array.from({ length: 9 }).map((_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const board = document.getElementById("board");

class Hand {
  myCards = [];
  constructor() {
    this.myCards = [];
  }
  addMyCard(myCard) {
    this.myCards.push(myCard);
  }

  myHand() {
    return this.myCards.slice(0, 7);
  }
}

/*
    HomeWork Uno 1: 
    Refreshden sonra entry_form-dan istifade ederk, oyuncularin sayi ve esas oyuncunun adi haqqinda melumati alin
    Melumat alinandan sonra form-u gizledin ve oyuncu ucun secilmis 7 card ekranda gorunsun
*/

function main() {
  const deck = new Deck();

  const shuffle = document.getElementById("shuffle");

  shuffle.addEventListener("click", () => {
    deck.shuffle();
    render(deck);
  });

  for (let i = 0; i < colors.length; i++) {
    const card = new Card(colors[i], 0);
    deck.addCard(card);
  }

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      deck.addCard(new Card(colors[i], numbers[j]));
      deck.addCard(new Card(colors[i], numbers[j]));
    }
  }
  deck.shuffle();
  render(deck);

  const hand = new Hand();

  const ilk7 = deck.cards.slice(0, 7);

  document.getElementById("entry_form").addEventListener("submit", (e) => {
    const playerCount = document.getElementById("numberİmput").value;
    const myName = document.getElementById("playerNameİnput").value;
    e.preventDefault();

    if (!playerCount && !myName) {
      alert("Adınızı və oyunçu sayını qeyd edin.");
    } else if (!playerCount && myName) {
      alert("Oyunçu sayı daxil edilməlidir!");
    } else if (playerCount < 2 && myName) {
      alert("Oyunçu sayı 2-dən az ola bilməz!");
    } else if (playerCount >= 2 && !myName) {
      alert("Ad daxil edilməlidir!");
    } else if (playerCount < 2 && !myName) {
      alert("Adınız və oyunçu sayı daxil olunmalıdır! ");
    } else {
      document.getElementById("heading1").style.display = "none";
      document.getElementById("entry_form").style.display = "none";
      document.getElementById("shuffle").style.display = "none";

      hand.myCards.push(...ilk7);
      board.style =
        "width: 90%; padding: 10px; height: auto; background-color: #eee; display: flex; justify-content: center";
      board.innerHTML = `  

        
      <div style=" width: 100%; height: 700px; 
      background-color: lightskyblue;;">
      <h1> start!</h1>
      </div>
       <div>
         <h3>Your cards:</h3>
         <div> 
         ${hand
          .myHand()
          .map(
            (
              card
            ) => `<button style=" width:100px; background-color: ${card.color};  border-radius: 10px; border: 1px solid gray; font-size: 24px; color: white; font-weight: 700; height: 150px">${card.value}</button>
          `
          )
          .join("")}
         </div>
       </div>`;
    }
  });
}

function render(deck) {
  document.getElementById("board").innerHTML = "";
  for (let i = 0; i < deck.cards.length; i++) {
    document.getElementById("board").innerHTML += `
        <button style="display: block; border-radius: 10px; border: 1px solid gray; font-size: 24px; color: white; font-weight: 700; background-color: ${deck.cards[i].color};  height: 150px;">
        ${deck.cards[i].value}
        </button>
        `;
  }
}

main();
