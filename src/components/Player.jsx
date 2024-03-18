import { useState, useRef } from "react"; 

export default function Player() {
  const playerName = useRef();          // permette un codice più pulito e snello e per casi d'uso simili a questo

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value); 
    playerName.current.value = "";  // resetta il valore di playerName nel campo Input
  }

  
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ?? "unknown entity"}
        </h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
