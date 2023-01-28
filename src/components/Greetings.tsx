import { h } from "preact";
import { useState } from "preact/hooks";

export function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(randomMessage());
  function handleClick() {
    setGreeting(randomMessage());
  }
  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleClick}>New Greeting</button>
    </div>
  );
}
