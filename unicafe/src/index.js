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

    

    if (props.total === 0) {
        return (
            <p>No feedback given.</p>
        )
    }

    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.data}</td>
        </tr>
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
    const total = good + neutral + bad;
    const positive = ((good/total) * 100);
    
    

    return (
      <div>
        <h2>Give Feedback</h2>
            <Button good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
        <h2>Statistics</h2>
            <table>
                <tbody>
                    <Statistics text='Good' data={good} />
                    <Statistics text='Neutral' data={neutral} />
                    <Statistics text='Bad' data={bad} />
                    <Statistics text='Total' data={total} />
                    <Statistics text='Average' data='' />
                    <Statistics text='Positive' data={positive} />
                </tbody>
            </table>
            
      </div>
    )
  }



ReactDOM.render(<App />, document.getElementById('root'));

