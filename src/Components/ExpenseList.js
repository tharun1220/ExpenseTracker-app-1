import React from "react";

const ExpenseList = (props) => {
    return (
        <ul>
            {props.Expenses.map((expense) => (
                <li key={expense.id}>
                    {expense.id} {expense.price} {expense.name}
                </li>
            ))}
        </ul> 
    )
};

export default ExpenseList;