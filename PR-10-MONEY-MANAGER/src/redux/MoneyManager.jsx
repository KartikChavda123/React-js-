import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../feature/IncomeSice';
import { addExpense } from '../feature/ExpenseSlice';

export default function MoneyManager() {
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");
    const [description, setDescription] = useState("");

    const incomeAmt = useSelector((state) => state.incomeKey.data1) || 0;
    const expense1 = useSelector((state) => state.expenseKey.expense1) || [];
    const dispatch = useDispatch();

    const handleAmount = () => {
        if (income) {
            dispatch(addIncome(income));
        }
    };

    const handleExpense = () => {
        dispatch(addExpense({ expense, description }));
    };

    return (
        <div>
            <div className="incomeAmount">

                <h1>Money Manager</h1>

                <input
                    type="number"
                    placeholder="Enter Income"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                />
                <button onClick={handleAmount}>Add Income</button>
                <p>Your Budget: {incomeAmt}</p>

                <input
                    type="number"
                    placeholder="Enter Amount"
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleExpense}>Add Expense</button>
            </div>

            <div className="expenseList">
                {

                    expense1.map((e, i) => (
                        <div key={i}>
                            <p>Amount: {e.expense}</p>
                            <p>Description: {e.description}</p>
                        </div>
                    ))

                }
            </div>
        </div>
    );
}