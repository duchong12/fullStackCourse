import './App.css';
import React, { useState } from 'react';

const Statistic = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const pRate = good/all;
  if (good === 0 && neutral === 0 && bad === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{`${pRate*100}%`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};



function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div className="App">
      <h1>Give feedback</h1>
      <br />
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <br />
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
