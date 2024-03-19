import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({title, targetTime}){
    const timer = useRef();                                     // permette di gestire NON la UI ma dietro le quinte e non riaggiorna la UI quando interagisco col timer
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // let timer; non va bene perchè verrebbe sovrascritta se starto altri countdown (es 5 sec e poi 10 sec) => devo usare Ref

    function handleStart(){
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000) // targetTime * 1000 = 1 secondo

        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result='lost' /> }
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