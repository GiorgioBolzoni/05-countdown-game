import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({title, targetTime}){
    const timer = useRef();                                     // permette di gestire NON la UI ma dietro le quinte e non riaggiorna la UI quando interagisco col timer
    const dialog = useRef(); 

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10); // viene aggiornato ogni 10 millisecondi con il tempo rimanente (tolgo i 10 millisecondi)
        }, 10) // 10 millisecondi, posso usarne quanti voglio è come esempio. Questo perchè setInterval fa ripartire la funzione continuamente ogni 10 millisecondi in questo caso

        setTimerStarted(true);
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
           
            <ResultModal ref={dialog} targetTime={targetTime} result='lost' /> 
            <section
            className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}