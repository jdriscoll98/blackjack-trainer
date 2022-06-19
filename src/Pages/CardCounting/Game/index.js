import { useEffect, useState } from "react";
import "./Game.scss";
import { CardCountingGameHeading } from "./Heading";
import { CardCountingGameInput } from "./Input";
import { CardCountingGameBoard } from "./Board";
import { shuffleDeck, createDecks, getCountingValue } from "../../../Utils/";

export function CardCountingGame(props) {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("pre-deal");
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [deck, setDeck] = useState(
    shuffleDeck(createDecks(props.settings.deckCount))
  );

  const onSubmit = (e) => {
    // check if value is correct
    if (parseInt(value) === parseInt(count)) {
      setScore(score + 1);
      setTotal(total + 1);
      alert("Correct!");
    } else {
      alert("Incorrect! The count was " + count);
      setTotal(total + 1);
    }
    setState("pre-deal");
  };

  useEffect(() => {
    const dealCards = [];
    if (state === "deal") {
      // if theres not enough cards in the deck, create a new deck
      if (deck.length < props.settings.tablePlayerCount * 2 + 2) {
        setDeck(...shuffleDeck(createDecks(props.settings.deckCount)));
        setCount(0);
        alert("Deck is empty, new deck created");
      }

      for (let i = 0; i < 2; i++) {
        dealCards.push(deck.pop());
      }
      const playCards = [];
      for (let i = 0; i < props.settings.tablePlayerCount * 2; i++) {
        playCards.push(deck.pop());
      }
      setDealerCards(dealCards);
      setPlayerCards(playCards);
      const playerCardCount = playCards.reduce(
        (acc, card) => acc + getCountingValue(card.number),
        0
      );
      const dealerCardCount = dealCards.reduce(
        (acc, card) => acc + getCountingValue(card.number),
        0
      );

      if (props.settings.runningCount) {
        setCount(count + playerCardCount + dealerCardCount);
      } else {
        setCount(dealerCardCount + playerCardCount);
      }
    }
  }, [state, deck, count, props.settings]);

  return (
    <div className="game">
      <CardCountingGameHeading
        title="Card Counting"
        correct={score}
        total={total}
      />
      <CardCountingGameBoard
        state={state}
        dealerCards={dealerCards}
        playerCards={playerCards}
        setState={setState}
        settings={props.settings}
        setCount={setCount}
      />
      <CardCountingGameInput
        isHidden={state === "pre-deal"}
        value={value}
        setValue={setValue}
        onSubmit={onSubmit}
      />
    </div>
  );
}
