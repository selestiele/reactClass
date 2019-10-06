import React from 'react';
import ReactDOM from 'react-dom';

// Title component
const Header = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    );
}

// Individual Part component
const Part = (props) => {
    console.log(props);
    return (
        <div>
            <p>{props.name} has {props.exercise} exercises.</p>
        </div>
    );
}


// Component to house the multiple parts
const Content = (props) => {
    console.log(props);
    return (
        <div>
            <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
            <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
        </div>
    );
}


// Component to calculate the total number of exercises
const Total = (props) => {
    console.log(props);
    return (
        <div>
            <p>The total number of exercises is {props.a + props.b + props.c}.</p>
        </div>
    );
}


// Main app component which includes everything
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
            name: 'State of a  component',
            exercises: 14
        }
    ]
}

console.log(course);

    return (
        <>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total a={course.parts[0].exercises} b={course.parts[1].exercises} c={course.parts[2].exercises} />
            
        </>
    );
}




ReactDOM.render(<App />, document.getElementById('root'));


