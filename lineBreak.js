import React, { useState } from "react";

export default function LineBreak() {
    const [inputText, setInputText] = useState("");
    const [resultText, setResultText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let cleanedText = inputText
            .split("\n") // split by new line
            .filter(Boolean) // remove empty lines
            .join("\n"); // join lines with new line

        setResultText(cleanedText);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit">Remove Blank Lines</button>
            </form>

            <pre>{resultText}</pre>
        </div>
    );
}
