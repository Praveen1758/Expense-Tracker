import { useState } from "react";
import "../styles/AddTransaction.css";
function AddTransaction({
    transactions,
    setTransactions,
}){
    const [text,setText]=useState("")
    const [amount,setAmount]=useState("")

    const handleSubmit = (e) => {
  e.preventDefault();

  if (!text.trim() || !amount) {
    alert("Please fill all fields");
    return;
  }

  const newTransaction = {
    id: Date.now(),
    text,
    amount: Number(amount),
  };

  setTransactions([
    ...transactions,
    newTransaction,
  ]);

  setText("");
  setAmount("");
};

    return (
  <div className="add-container">
    <h3>Add New Transaction</h3>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description</label>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <div className="form-group">
        <label>Amount</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <button className="btn" type="submit">
        Add Transaction
      </button>
    </form>
  </div>
);
}

export default AddTransaction