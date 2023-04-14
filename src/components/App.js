import React from "react";
import { messages} from "../data";
import MessageList from "./MessageList";
import ContactList from "./ContactList";

console.log("Messages:", messages);

function App() {
  return (
    <div className="app">
      <ContactList />
      <MessageList/>
    </div>
  );
}

export default App;
