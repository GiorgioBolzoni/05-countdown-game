export default function ResultModal({result, targetTime}){
    return (
    <dialog className="result-modal" open> 
    {/* open lo rende visibile */}
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>XXX seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>       
            {/* questo costrutto all'interno di un dialog permette di chiudere la modale senza ulteriore codice JS */}
        </form>
    </dialog>
    )
}