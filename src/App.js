import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {id: 0,
      date: new Date (2021, 2, 21),
      title: 'Car Insurance',
      amount: 260
    },
    {id: 0,
      date: new Date (2022, 3, 21),
      title: 'Paper Towel',
      amount: 260
    },
    {id: 0,
        date: new Date (2023, 5, 2),
        title: 'Car Insurance',
        amount: 260
    },
  ];
  return (
    <div>
      <p>welcome to react!!!!</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/> 
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/> 
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/> 
      </div>
  );
}

export default App;
