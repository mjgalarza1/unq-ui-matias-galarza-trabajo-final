import "./Board.css"
import { useEffect, useState } from 'react';
import MemoCard from "../MemoCard/MemoCard.jsx";
import {sortBirds} from "../../util/sortBirds.jsx";
import GameOverModal from "../Modal/GameOverModal.jsx";
import {useParams} from "react-router-dom";

function Board() {
    const {difficulty} = useParams();

    const [shuffledMemoCards, setShuffledMemoCards] = useState([]);
    const [selectedMemoCard, setSelectedMemoCard] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const shuffledImages = sortBirds(difficulty);
        setShuffledMemoCards(shuffledImages.map((bird, index) => ({ ...bird, flipped: false, index })));
        handleStates();
    }, []);

    const resetGame = () => {
        handleStates()
        setShuffledMemoCards(prevCards =>
            prevCards.map(card => ({ ...card, flipped: false }))
        );

        setTimeout(() => {
            const shuffledImages = sortBirds(difficulty);
            setShuffledMemoCards(shuffledImages.map((bird, index) => ({ ...bird, flipped: false, index })));
        }, 500);
    };

    const handleStates = () => {
        setCombo(0);
        setGameOver(false);
        setSelectedMemoCard(null);
    };

    const handleMemoCardClick = (memoCard) => {
        const flippedMemoCard = {...memoCard, flipped: true};
        let shuffledMemoCardsCopy = [...shuffledMemoCards];
        shuffledMemoCardsCopy.splice(memoCard.index, 1, flippedMemoCard);
        setShuffledMemoCards(shuffledMemoCardsCopy);

        if (selectedMemoCard == null) {
            setSelectedMemoCard(memoCard);
        }
        else if (selectedMemoCard.name === memoCard.name) {
            setCombo(combo + 1);
            const pointsPlusCombo = 100 + combo * 50;
            setScore(score + pointsPlusCombo);
            setSelectedMemoCard(null);
            const allFlipped = shuffledMemoCardsCopy.every(card => card.flipped);
            if (allFlipped) {
                setGameOver(true);
            }
        }
        else {
            setCombo(0);
            setAnimating(true);
            setTimeout(() => {
                shuffledMemoCardsCopy.splice(memoCard.index, 1, memoCard);
                shuffledMemoCardsCopy.splice(selectedMemoCard.index, 1, selectedMemoCard);
                setShuffledMemoCards(shuffledMemoCardsCopy);
                setSelectedMemoCard(null);
                setAnimating(false);
            }, 1000);
        }
    };

    let numColumns;
    if (difficulty === "4x4") {
        numColumns = 4;
    } else if (difficulty === "6x4" || difficulty === "6x6") {
        numColumns = 6;
    }

    return (
        <div className="board-container">
            <GameOverModal
                isVisible={gameOver}
                onReplay={resetGame}
                score={score}
            />
            <div className="board" style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}>
                {shuffledMemoCards.map((bird, index) => (
                    <MemoCard
                        key={index}
                        image={bird}
                        animating={animating}
                        handleMemoCardClick={handleMemoCardClick}
                        memoCard={{...bird, index}}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    />
                ))}
            </div>
            <div className="score-and-combo-container">
                <h2>Puntaje: {score}</h2>
                <p className="mb-0 fst-italic">( Combo: x{combo} )</p>
            </div>
        </div>
    );
}

export default Board;
