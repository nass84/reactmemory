import "./App.css";
import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  
  { "src": "/reactmemory/img/helmet-1.png", matched: false },
  { "src": "/reactmemory/img/potion-1.png", matched: false },
  { "src": "/reactmemory/img/ring-1.png", matched: false },
  { "src": "/reactmemory/img/scroll-1.png", matched: false },
  { "src": "/reactmemory/img/shield-1.png", matched: false },
  { "src": "/reactmemory/img/sword-1.png", matched: false },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [congrats, setCongrats] = useState(false);



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

  // compare 2 selected cards and reset

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
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

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Game starts automatically

  useEffect(() => {
    shuffleCards();
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setCongrats(false);
  }, []);

  // If all cards are matched true, reset the game
  // display congratulations message after 1 turn

 useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setCongrats(true);
      setTimeout(() => shuffleCards(), 3000);
    } else {
      setCongrats(false);
    }
  }, [cards]);
  

  // If game resets, hide congratulations message
  useEffect(() => {
    if (congrats) {
      setTimeout(() => setCongrats(false), 3000);
    }
  }, [congrats]);

  return (
    <div className="App">
      {!congrats && <h1>Meah Match</h1>}
      {congrats && (
        <h1 className="congrats">
          Congratulations! You completed Meah Match in {turns} turns!{" "}
        </h1>
      )}
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
