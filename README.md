# Memory Game

1. Create an array of pictures

```
const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];
```

These relate to pictures in the public folder

2. Create Shuffle Function and set state for cards and turns
3. Hook Up to Button

```
function App() {
  const [cards, setCards] = useState(cardImages);
  const [turns, setTurns] = useState(0);

  //shuffle the cards
  const shuffleCards = () => {
    // doubles the amount of cards
    const shuffledCards = [...cardImages, ...cardImages]
    // sorts them into random order
      .sort(() => Math.random() - 0.5)
    // adds the id property to each card
      .map((card) => ({ ...card, id: Math.random() }));
    // changes the state to the double cards
    setCards(shuffledCards);
  // resets the turns to 0
    setTurns(0);
  };

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}



export default App;
```
4. Map through card images and add grid CSS

```
    <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.png" alt="card back" />
            </div>

          </div>
```

5. Make a single card component which will make it easier to apply logic later on 

```
import "./SingleCard.css"

export default function SingleCard({card}) {
  return (
    <div className="card">
        <div>
          <img className="front" src={card.src} alt="card front" />
          <img className="back" src="/img/cover.png" alt="card back" />
        </div>
    </div>
  )
}
```
In App 
```
return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
```
6. Handle the 2 choices of the user and check whether they match 


7. If they match add match property

```
import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState(cardImages);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice

  const handleChoice = (card) => {
    // if choiceOne is null set card to choice two
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
```
8. Remove double cards and add flipped property 

```
import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState(cardImages);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle the cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice

  const handleChoice = (card) => {
    // if choiceOne is null set card to choice two
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // wait a second and flip both cards back over if they dont match
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} 
          card={card} 
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched}   
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```
In single Card add a turnary operator to add class if true 

```
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped }) {
  
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

```

Add CSS rotate 2d object 90deg will hide it 

```
.card .front {
  /* hides the card as 2d rotated 90deg hides it */
  transform: rotateY(90deg);
  position:absolute;
}

.flipped .front {
  transform: rotateY(0deg);
}
```
Add animation affects

```

.card .front {
  /* hides the card as 2d rotated 90deg hides it */
  transform: rotateY(90deg);
  transform: all ease-in 0.2s;
  position:absolute;
}

.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s ;
}

.card .back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}

.flipped .back {
  transform: rotateY(0deg);
  transition-delay: 0s;
}
```

Disable the cards after making 2 choices so cards cant be clicked for a certain amount of time. 

Start game automatically 



