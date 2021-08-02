import './App.css';
import React, { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ];
  const [votes, setVotes] = useState({});
  const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length));

  const maxVote = Object.keys(votes).reduce( (currentMax, index) => votes[index] > votes[currentMax] || votes[currentMax] === undefined ? index : currentMax, 0);
  return (
    <div className="App">
      <h1>
        Anecdote of the day
      </h1>
      <div>
        {anecdotes[selected]}
      </div>
      <br />
      <div>
        has {votes[selected] || 0} votes
      </div>
      <button 
        onClick={() => {
          if (!votes[selected]){
            setVotes({...votes, [selected]: 1});
          }
          else {
            setVotes({...votes, [selected]: votes[selected] + 1});
          }
      }}
      >vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))}>next anedote</button>
      <h1>
        Anecdote with most votes
      </h1>
      <div>
        {anecdotes[maxVote]}
      </div>
      <div>
        has {votes[maxVote] || 0} votes
      </div>
    </div>
  );
}

export default App;
