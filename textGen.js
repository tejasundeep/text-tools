import React, { useState } from "react";

const RandomTextGenarator = () => {
    const [numParagraphs, setNumParagraphs] = useState(1);
    const loremIpsumText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    const handleParagraphChange = (e) => {
        setNumParagraphs(e.target.value);
    };

    return (
        <div>
            <h1>Lorem Ipsum Generator</h1>
            <label htmlFor="numParagraphs">Number of Paragraphs:</label>
            <input
                type="number"
                id="numParagraphs"
                value={numParagraphs}
                onChange={handleParagraphChange}
                min="1"
                max="10"
            />
            <div>
                {Array.from({ length: numParagraphs }).map((_, index) => (
                    <p key={index}>{loremIpsumText}</p>
                ))}
            </div>
        </div>
    );
};

export default RandomTextGenarator;
