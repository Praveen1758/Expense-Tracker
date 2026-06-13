import "../styles/IncomeExpense.css";

function IncomeExpense({
  income,
  expense,
}) {

  return (
    <div className="income-expense-container">
      <div className="income">
        <h4>Income</h4>
        <p>₹{income.toLocaleString()}</p>
      </div>

      <div className="expense">
        <h4>Expense</h4>
        <p>₹{expense.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;