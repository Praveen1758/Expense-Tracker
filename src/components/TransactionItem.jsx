function TransactionItem({
  text,
  amount,
  id,
  deleteTransaction
}) {
  return (
    <li
  style={{
    borderRight:
      amount > 0
        ? "5px solid #4caf50"
        : "5px solid #f44336",
  }}
>
      {text}

      <span>₹{amount}</span>

      <button
        onClick={() => deleteTransaction(id)}
      >
        ❌
      </button>
    </li>
  );
}

export default TransactionItem;