import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const Header = (props) => (
    <h1>{props.course}</h1>
  );

  const Part = (props) => (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
  const Content = (props) => (
    <div>
      {props.parts.map(p => (<Part part={p} />))}
    </div>
  );
  const Total = (props) => (
    <p>Number of exercises {props.parts.reduce( (sum, p) => sum += p.exercises, 0)}</p>
  );
  return (
    <div>
      <Header props={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));