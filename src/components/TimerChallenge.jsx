import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({title, targetTime}){
    const timer = useRef();                                     // permette di gestire NON la UI ma dietro le quinte e non riaggiorna la UI quando interagisco col timer
    const dialog = useRef(); 

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // let timer; non va bene perchè verrebbe sovrascritta se starto altri countdown (es 5 sec e poi 10 sec) => devo usare Ref

    function handleStart(){
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open(); // è il metodo open definito nella funzione useImperativeHandle in ResultModal
        }, targetTime * 1000) // targetTime * 1000 = 1 secondo

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    return (
        <>
            {/* {timerExpired &&  */} 
            <ResultModal ref={dialog} targetTime={targetTime} result='lost' /> 
            {/* devo renderlo sempre visibile, anche se sarà visibile effettivamente solo quando viene chiamato nella funzione */}
              {/* } */}
            <section
            className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You Lost</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}