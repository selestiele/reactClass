import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {
    
    const [selected, setSelected] = useState(0);
    //const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
    // const [vote, setVote] = useState(0);

    const myArray = new Uint8Array(6);
    const [votes, setVotes] = useState(myArray);

    // const anecdoteVote = {
    //   selected,
    //   vote
    // }
    
   
    
    // So far, I have the vote counter to work, but it doesn't reset when the anecdote index switches. They are, however, in an object together.
    
    
    
    const nextAnecdote = () => {
        setSelected(Math.floor(Math.random() * props.anecdotes.length));
    }




    const addVote = () => {
      const voteCopy = [...votes];
      voteCopy[selected] += 1;
      setVotes(voteCopy);

      console.log(voteCopy);
     
    }

     
      
    


     
    return (
      <>
        <p>{props.anecdotes[selected]}</p>
        <p>This anecdote has {votes[selected]} votes.</p>
        <div>
            <button onClick={addVote}>Add your vote!</button>
            <button onClick={nextAnecdote}>Next Anecdote</button>
        </div>
      </>
    )

    
  }

  
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
 


  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
