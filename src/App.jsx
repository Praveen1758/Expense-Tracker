import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeExpense from "./components/IncomeExpense.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

function App() {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
  };

  const balance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0,
  );

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="container">
      <Header />
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={Math.abs(expense)} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <AddTransaction
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
