import birds from "../assets/images/birds/birds.jsx"

export function sortBirds(difficulty) {
    let numImages;
    if (difficulty === "4x4") {
        numImages = 8;
    } else if (difficulty === "6x4") {
        numImages = 12;
    } else if (difficulty === "6x6") {
        numImages = 18;
    }

    const selectedImages = birds.sort(() => Math.random() - 0.5).slice(0, numImages);
    const duplicatedImages = [...selectedImages, ...selectedImages];
    const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5);

    return shuffledImages;
}
