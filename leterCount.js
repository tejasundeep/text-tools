import { useState } from "react";

export default function LeterCount() {
    const [text, setText] = useState("");

    const sanitizedText = text.replace(/[^\w]/g, ""); // Remove symbols, diacritics, and non-alphanumeric characters
    const LeterCount = sanitizedText.length;

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
            <p>Character Count: {LeterCount}</p>
        </div>
    );
}
