import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const handleNewExpenseClick = () => {
    setShowForm(true);
  };
  
  const addedExpenseItem = (addedExpense) => {
    const id = Math.random();
    const expenseData = { ...addedExpense, id };
    props.onAddedExpense(expenseData);
    setShowForm(false)
  };
  const onCancel = () => {
    setShowForm(false);
  }
  
  return (
    <div className="new-expense">
      {!showForm && <button onClick={handleNewExpenseClick}>Enter New Expense</button>}
      {showForm && <ExpenseForm onSavedExpenseData={addedExpenseItem} handleCancel={onCancel}/>}
    </div>
  );
};
export default NewExpense;
