import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormActive(false);
  };

  const hideFormHandler = (event) => {
    setFormActive(false);
  };

  const showFormHandler = (event) => {
    setFormActive(true);
  };

  return (
    <div className="new-expense">
      {!formActive && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {formActive && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
