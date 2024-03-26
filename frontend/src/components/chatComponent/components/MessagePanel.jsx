import React, { useState } from "react";
import StatusIcon from "./StatusIcon";


function MessagePanel({ user, onInput }) {
    const [input, setInput] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onInput(input);
            setInput("");
        }
    };

    const displaySender = (message, index) => {
        if (index === 0) return true;
        return user.messages[index - 1].fromSelf !== message.fromSelf;
    };

    return (
        <div className="
                h-72 
                flex flex-col justify-between 
                border-2 border-black
                bg-white
                rounded-xl

                shadow-lg"
                >
            <div className="header bg-gray-200 p-1 font-bold rounded-xl">
                <StatusIcon connected={user.connected} />
                {user.username}
            </div>

            <ul className="flex flex-col space-y-1 h-60 overflow-y-scroll">
                {user.messages.map((message, index) => (
                    <li key={index} className="message">
                        {displaySender(message, index) && (
                            <div className="sender font-thin text-sm">
                                {message.fromSelf ? "you" : user.username}
                            </div>
                        )}
                        <div className="p-1 border-2 rounded m-2 border-blue-500">{message.content}</div>
                    </li>
                ))}
            </ul>

            <form onSubmit={onSubmit} className=" m-1 space-x-1 border-t-2 border-gray-300">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Your message..."
                    className="border-2 border-slate-200 rounded"
                />
                <button disabled={!input.trim()} type="submit" className="text-white border-2 border-green-700 px-2 py-1 rounded bg-green-600">
                    Send
                </button>
            </form>
        </div>
    );
}

export default MessagePanel;
