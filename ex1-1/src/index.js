import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
}

const Content = (props) => {
    return (
        <div>
            <p>{props.name} - {props.exercise}</p>
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
            <Content name={part1} exercise={exercises1} />
            <Content name={part2} exercise={exercises2} />
            <Content name={part3} exercise={exercises3} />
            <Total a={exercises1} b={exercises2} c={exercises3} />
            
        </>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));


