import './ExpenseDate.css';

const ExpenseDate = ({ month, day, year }) => {
  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </>
  );
};
export default ExpenseDate;
