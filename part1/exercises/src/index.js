import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
}

const Part = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.name} has {props.exercise} exercises.</p>
        </div>
    );
}

const Content = (props) => {
    console.log(props);
    return (
        <div>
            <Part name={props.part1} exercise={props.exercise1} />
            <Part name={props.part2} exercise={props.exercise2} />
            <Part name={props.part3} exercise={props.exercise3} />
        </div>
    );
}

const Total = (props) => {
    console.log(props);
    return (
        <div>
            <p>The total number of exercises is {props.a + props.b + props.c}.</p>
        </div>
    );
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a  component',
        exercises: 14
    }

    return (
        <>
            <Header course={course}/>
            <Content part1={part1.name} part2={part2.name} part3={part3.name} exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
            <Total a={part1.exercises} b={part2.exercises} c={part3.exercises} />
            
        </>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));


