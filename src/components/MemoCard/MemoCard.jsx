import "./MemoCard.css";

function MemoCard({ image, animating, handleMemoCardClick, memoCard }) {
    return (
        <div className='memo-card' onClick={() => (!memoCard.flipped && !animating) && handleMemoCardClick(memoCard)}>
            <div className={`memo-card-inner ${memoCard.flipped ? 'memo-card-flipped' : ''}`}>
                <div className="memo-card-front">
                </div>
                <div className="memo-card-back">
                    <img src={image.image} alt="Memo Card" className="memo-card-image"/>
                </div>
            </div>
        </div>
    );
}

export default MemoCard;
