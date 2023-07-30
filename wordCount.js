import React, { useState } from "react";

export default function WordCounter() {
    const [text, setText] = useState("");
    const sanitizedText = text.replace(/[^\w\s]/gi, "").replace(/\//g, ""); // Remove symbols and slashes
    const wordCount = sanitizedText.trim().split(/\s+/).length;

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type your text here..."
                style={{ width: "100%", minHeight: "200px" }}
            />
            <p>Word Count: {wordCount}</p>
        </div>
    );
}
