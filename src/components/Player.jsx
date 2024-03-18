import { useState, useRef } from "react"; 

export default function Player() {
  const playerName = useRef();          // permette un codice più pulito e snello e per casi d'uso simili a questo

  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  

  // const handleChange = (event) => {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value); 

    // setSubmitted(true);
  }

  
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ?? "unknown entity"}
        {/* {submitted ? enteredPlayerName : "unknown entity"} */}
        </h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        // onChange={handleChange} 
        // value={enteredPlayerName} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
