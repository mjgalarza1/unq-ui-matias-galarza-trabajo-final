import "./Board.css"
import { useEffect, useState } from 'react';
import MemoCard from "../MemoCard/MemoCard.jsx";
import birds from "../../assets/images/birds/birds.jsx";

function Board() {

    const [shuffledMemoCards, setShuffledMemoCards] = useState([]);
    const [selectedMemoCard, setSelectedMemoCard] = useState(null);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const selectedImages = birds.sort(() => Math.random() - 0.5).slice(0, 8);
        const duplicatedImages = [...selectedImages, ...selectedImages];
        const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5);
        setShuffledMemoCards(shuffledImages.map((bird, index) => ({ ...bird, flipped: false, index })));
    }, []);

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
            setSelectedMemoCard(null);
        } else {
            console.log("Las cartas ", selectedMemoCard.name, " y ", memoCard.name, " NO SON IGUALES")
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
        <div className="board">
            {shuffledMemoCards.map((bird, index) => (
                <MemoCard
                    key={index}
                    image={bird}
                    animating={animating}
                    handleMemoCardClick={handleMemoCardClick}
                    memoCard={{ ...bird, index }}
                />
            ))}
        </div>
    );
}

export default Board;
