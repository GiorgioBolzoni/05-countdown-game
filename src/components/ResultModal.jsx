import {forwardRef, useImperativeHandle, useRef} from 'react'; // per portare ref da un componente ad un altro componente
import { createPortal } from 'react-dom'; // x trasportare un elemento del codice jsx in un altro punto del DOM, in modo che non sia troppo annidato nel cadice ma, per esempio, per portarlo più vicino alla radice del <body>

// devo metterlo attorno alla mia funzione come sotto:
const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref){
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2); //con massimo 2 decimali
    const score = Math.round((1- remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>           
     {/* col metodo useImperativeHandle ho staccato il componente TimerChallenge da questo elemento dialog che ora diventare un normale div se qualcuno lo modifica /
    <dialog ref={dialog} className="result-modal"  </dialog>  */}


     {/*open      open lo rende visibile MA forzandolo, non va bene quindi uso Ref  */}
    
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>       
            {/* questo costrutto all'interno di un dialog permette di chiudere la modale senza ulteriore codice JS */}
        </form>
    </dialog>, // devo aggiungere la virgola per poter scrivere la parte qui sotto  
    document.getElementById('modal') // l'ho portato al div con id modal ----> vedi index.html
    )
})

export default ResultModal;