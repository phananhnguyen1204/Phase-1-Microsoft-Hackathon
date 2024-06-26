import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/chat", { message });
      setResponse(res.data.response);
      setError("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to get response from the server.");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h1 className="chat-title">AI Copilot</h1>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="chat-textarea"
          placeholder="Enter your message..."
        />
        <button onClick={handleSendMessage} className="chat-button">
          Send
        </button>
        {error && <p className="chat-error">{error}</p>}
        <h2 className="chat-response-title">Response:</h2>
        <p className="chat-response">{response}</p>
      </div>
    </div>
  );
};

export default Chat;
