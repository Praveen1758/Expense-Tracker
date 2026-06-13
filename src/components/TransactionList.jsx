import TransactionItem from "./TransactionItem";
import "../styles/TransactionList.css"

function TransactionList({
    transactions,
    deleteTransaction
}){
    
    return(
        <div className="transaction-container">
            <h3>Transaction History</h3>

            <ul>
                {transactions.map((transaction)=>(
                    <TransactionItem
                    key={transaction.id}
                    text={transaction.text}
                    amount={transaction.amount}
                    id={transaction.id}
                    deleteTransaction={deleteTransaction}
                    />
                ))}
            </ul>
        </div>
    )
}
export default TransactionList;