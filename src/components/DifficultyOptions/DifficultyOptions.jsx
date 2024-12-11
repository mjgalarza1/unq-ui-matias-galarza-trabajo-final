import {ButtonGroup, ToggleButton} from "react-bootstrap";
import "./DifficultyOptions.css"

const difficulties = [
    { name: '4x4', value: '4x4' },
    { name: '6x4', value: '6x4' },
    { name: '6x6', value: '6x6' },
];

function DifficultyOptions({ currentDifficultyValue, handleDifficulty }) {
    return (
        <ButtonGroup>
            {difficulties.map((selectedDifficulty, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    name="radio"
                    value={selectedDifficulty.value}
                    checked={currentDifficultyValue === selectedDifficulty.value}
                    onChange={(e) => handleDifficulty(e.currentTarget.value)}
                    className="toggle-button"
                    variant="light"
                >
                    {selectedDifficulty.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}

export default DifficultyOptions;