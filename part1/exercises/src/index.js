import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
}

const Part = (props) => {
    return (
        <div>
            <p>{props.name} has {props.exercise} exercises.</p>
        </div>
    );
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.part1} exercise={props.exercise1} />
            <Part name={props.part2} exercise={props.exercise2} />
            <Part name={props.part3} exercise={props.exercise3} />
        </div>
    );
}

const Total = (props) => {
    return (
        <div>
            <p>The total number of exercises is {props.a + props.b + props.c}.</p>
        </div>
    );
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a  component';
    const exercises3 = 14;

    return (
        <>
            <Header course={course}/>
            <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
            <Total a={exercises1} b={exercises2} c={exercises3} />
            
        </>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));


