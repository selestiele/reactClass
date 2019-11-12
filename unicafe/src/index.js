import React from 'react';
import ReactDOM from 'react-dom';

// const Button = ({onClick, text}) => {
    
//     return (
//         <div>
//             <button onClick={onClick}>{text}</button>
//             <button onClick={onClick}>{text}</button>
//             <button onClick={onClick}>{text}</button>
//         </div>
//     )    
// }

// const goodClick = () => {
//     setGood({...clicks, good: clicks.good +1});
// }

// const neutralClick = () => {
//     setNeutral({...clicks, })
// }

// const badClick = () => {

// }

const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad;
    const positive = ((props.good/total) * 100);

    if (total === 0) {
        return (
            <p>No feedback given.</p>
        )
    }

    return (
        <table>
            <tr>
                <td>Good</td>
                <td>{props.good}</td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td>{props.neutral}</td>
            </tr>
            <tr>
                <td>Bad</td>
                <td>{props.bad}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{total}</td>
            </tr>
            <tr>
                <td>Average</td>
                <td></td>
            </tr>
            <tr>
                <td>Positive</td>
                <td>{positive}%</td>
            </tr>
            
            
        </table>
    )
}


const Button = (props) => {

    return (
        <div>
            <button onClick={ () => props.setGood(props.good + 1)}>Good</button>
            <button onClick={ () => props.setNeutral(props.neutral + 1)}>Neutral</button>
            <button onClick={ () => props.setBad(props.bad + 1)}>Bad</button>
        </div>
    )
    
}



const App = (props) => {
    // save clicks of each button to own state
    
    const [good, setGood] = React.useState(0);
    const [neutral, setNeutral] = React.useState(0);
    const [bad, setBad] = React.useState(0);
    
    

    return (
      <div>
        <h2>Give Feedback</h2>
            <Button good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
        <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad}  />
      </div>
    )
  }



ReactDOM.render(<App />, document.getElementById('root'));

