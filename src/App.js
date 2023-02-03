import React from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';


function App() {
  const expenses = [
    {id: 0,
      date: new Date (2021, 2, 21),
      title: 'Car Insurance',
      amount: 261
    },
    {id: 1,
      date: new Date (2022, 3, 21),
      title: 'Paper Towel',
      amount: 262
    },
    {id: 2,
        date: new Date (2023, 5, 2),
        title: 'Car Insurance',
        amount: 263
    },
  ];
  /*return (
    <div>
      <p>welcome to react!!!!</p>
     <Expenses item={Expenses}></Expenses>
     </div>
  );*/

  return React.createElement(
    'div',
    {},
    React.createElement(NewExpense),
    React.createElement(Expenses, { items: expenses })
  );
}

export default App;
