import "./Board.css"
import { useEffect, useState } from 'react';
import MemoCard from "../MemoCard/MemoCard.jsx";
import birds from "../../assets/images/birds/birds.jsx";
import GameOverModal from "../Modal/GameOverModal.jsx";

function Board() {

    const [shuffledMemoCards, setShuffledMemoCards] = useState([]);
    const [selectedMemoCard, setSelectedMemoCard] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const selectedImages = birds.sort(() => Math.random() - 0.5).slice(0, 8);
        const duplicatedImages = [...selectedImages, ...selectedImages];
        const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5);
        setShuffledMemoCards(shuffledImages.map((bird, index) => ({ ...bird, flipped: false, index })));
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
            console.log("La carta ", memoCard.name, " fue seleccionada")
            setSelectedMemoCard(memoCard);
        } else if (selectedMemoCard.name === memoCard.name) {
            console.log("Las cartas ", selectedMemoCard.name, " y ", memoCard.name, " son iguales")
            setCombo(combo + 1);
            const pointsPlusCombo = 100 + combo * 50;
            setScore(score + pointsPlusCombo);
            setSelectedMemoCard(null);
            const allFlipped = shuffledMemoCardsCopy.every(card => card.flipped);
            if (allFlipped) {
                setGameOver(true);
            }
        } else {
            console.log("Las cartas ", selectedMemoCard.name, " y ", memoCard.name, " NO SON IGUALES")
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
    }

    return (
        <div className="board-container">
            <GameOverModal
                isVisible={gameOver}
                onReplay={initializeGame}
                score={score}
            />

            <div className="board">
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
                <h3>Combo: x{combo}</h3>
            </div>
        </div>
    );
}

export default Board;
