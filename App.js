import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function App() {
  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(60000)
  const favoriteNums = [1, 5, 10, 15];
  
  const Square = ({ n, increment }) => {     
    return(
      <button 
        onClick={() => increment(n)} className="btn btn-primary" 
        style={{marginRight:5}}
      >
        Plus {n}
      </button>
    )
  }; 

  const incrementAge = useCallback(n => {
    setAge(c => c + n)
  }, [setAge])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      {favoriteNums.map(n => {
        return <Square increment={incrementAge} n={n} key={n} />;
      })}
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default App;
