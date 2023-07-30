import React, { useState } from "react";

const TextCaseConverter = () => {
    const [text, setText] = useState("");
    const [convertedText, setConvertedText] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const convertToUpperCase = () => {
        setConvertedText(text.toUpperCase());
    };

    const convertToLowerCase = () => {
        setConvertedText(text.toLowerCase());
    };

    return (
        <div>
            <textarea value={text} onChange={handleTextChange} />
            <button onClick={convertToUpperCase}>Convert to Uppercase</button>
            <button onClick={convertToLowerCase}>Convert to Lowercase</button>
            <div>
                <h2>Converted Text:</h2>
                <p>{convertedText}</p>
            </div>
        </div>
    );
};

export default TextCaseConverter;
