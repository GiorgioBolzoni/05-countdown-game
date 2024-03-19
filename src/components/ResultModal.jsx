import {forwardRef} from 'react'; // per portare ref da un componente ad un altro componente

// devo metterlo attorno alla mia funzione come sotto:
const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref){
    return (
    <dialog ref={ref} className="result-modal" 
    // open
    // open lo rende visibile MA forzandolo, non va bene quindi uso Ref
    > 
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>XXX seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>       
            {/* questo costrutto all'interno di un dialog permette di chiudere la modale senza ulteriore codice JS */}
        </form>
    </dialog>
    )
})

export default ResultModal;