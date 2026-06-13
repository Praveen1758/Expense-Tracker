import "../styles/Balance.css"
function Balance({balance}){

    return(
        <div className="balance-container">
            <h3>Your Balance</h3>
            <h2>₹{balance.toLocaleString()}</h2>
        </div>
    );
}
export default Balance