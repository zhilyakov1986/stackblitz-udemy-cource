import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const addedExpenseItem = (addedExpense) => {
    const id = Math.random();
    const expenseData = { ...addedExpense, id };
    props.onAddedExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSavedExpenseData={addedExpenseItem} />
    </div>
  );
};
export default NewExpense;
