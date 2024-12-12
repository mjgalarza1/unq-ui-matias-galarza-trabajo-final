import "./Board.css"
import { useEffect, useState } from 'react';
import MemoCard from "../MemoCard/MemoCard.jsx";
import {sortBirds} from "../../util/sortBirds.jsx";
import GameOverModal from "../Modal/GameOverModal.jsx";
import {useNavigate, useParams} from "react-router-dom";

function Board() {
    const navigate = useNavigate();

    const {difficulty, players} = useParams();

    const [shuffledMemoCards, setShuffledMemoCards] = useState([]);
    const [selectedMemoCard, setSelectedMemoCard] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [combo, setCombo] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const [playerTurn, setPlayerTurn] = useState(1);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

    const validDifficulties = ["4x4", "6x4", "6x6"];
    const validPlayers = ["1", "2"];

    useEffect(() => {
        if (!validDifficulties.includes(difficulty) || !validPlayers.includes(players)) {
            navigate("/not-found", { replace: true });
        }
    }, [difficulty, players, navigate]);

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

        if (players === "2") {
            setPlayer1Score(0)
            setPlayer2Score(0)
        }
    };

    const handleStates = () => {
        setCombo(0);
        setGameOver(false);
        setSelectedMemoCard(null);
    };

    const handleMemoCardClick = (memoCard) => {
        const flippedMemoCard = {...memoCard, flipped: true};
        let shuffledMemoCardsToSet = [...shuffledMemoCards];
        shuffledMemoCardsToSet.splice(memoCard.index, 1, flippedMemoCard);
        setShuffledMemoCards(shuffledMemoCardsToSet);

        if (selectedMemoCard == null) {
            setSelectedMemoCard(memoCard);
        }

        else if (selectedMemoCard.name === memoCard.name) {
            setCombo(combo + 1);
            const pointsPlusCombo = 100 + combo * 50;

            if (playerTurn === 1) {
                setPlayer1Score(player1Score + pointsPlusCombo);
            } else {
                setPlayer2Score(player2Score + pointsPlusCombo);
            }

            setSelectedMemoCard(null);
            const allFlipped = shuffledMemoCardsToSet.every(card => card.flipped);
            if (allFlipped) {
                setGameOver(true);
            }
        }

        else {
            setCombo(0);
            setAnimating(true);
            setTimeout(() => {
                shuffledMemoCardsToSet.splice(memoCard.index, 1, memoCard);
                shuffledMemoCardsToSet.splice(selectedMemoCard.index, 1, selectedMemoCard);
                setShuffledMemoCards(shuffledMemoCardsToSet);
                setSelectedMemoCard(null);
                setAnimating(false);

                if (players === "2") {
                    setPlayerTurn(playerTurn === 1 ? 2 : 1);
                }
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
                player1Score={player1Score}
                player2Score={player2Score}
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
                {players === "1"
                    ? <div>
                        <h3>Puntaje: {player1Score}</h3>
                        <p className="mb-0 fst-italic">( Combo: x{combo} )</p>
                    </div>
                    : <div className="score-multiplayer">
                        <h3 className={playerTurn === 1 ? "turn-player player-one" : ""}>Jugador 1: {player1Score}</h3>
                        <h3 className={playerTurn === 2 ? "turn-player player-two" : ""}>Jugador 2: {player2Score}</h3>
                    </div>}
            </div>

        </div>
    );
}

export default Board;
