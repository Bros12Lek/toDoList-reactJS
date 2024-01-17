import React, { useRef, useState } from 'react'
import Header from './components/Header'
import './style.css'
import Tasks from './components/Tasks';

function App() {

  const [afazer,setAfazer] = useState("");
  const [task,setTask] = useState([]);
  const [emptyError,setEmptyError] = useState(false);
  const afazerRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!afazer){
      setEmptyError(true);
      return;
    }

    setTask((task) => [...task, {
      "task" : afazer,
      "tag" : false
    }]);
    setEmptyError(false);
    setAfazer("");

    afazerRef.current.focus();
  }

  return (
    <>
      <Header/>
      <section className='section_principal' style={{marginTop:"7%"}} >
        <h2 className='title' style={{textAlign:"center",fontSize:"2rem",marginBottom:"2%"}}>
          Intuito da criação desse site
        </h2>
        <p style={{textAlign:"center",fontSize:"1.4rem"}}>
          Esse site foi criado totalmente em React com o intuito de adicionar algo ao meu portfólio para um possível recrutamento.
        </p>
      </section>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Afazer</span>
          <input 
            type='text' 
            name='afazer' 
            id='afazer' 
            placeholder='Digite o seu afazer'
            autoComplete='off'
            value={afazer}  
            onChange={(e) => setAfazer(e.target.value)}   
            ref={afazerRef}   
          />
        </label>
        <button type='submit'>
          Cadastrar Afazer
        </button>
        {emptyError && 
          <p style={{color:"red",fontWeight:"600",marginTop:"12%",textAlign:"center"}}>O campo de afazer deve estar preenchido !</p>
        }
      </form>
      <Tasks
        task={task}
        setTask={setTask}
      />
    </>
    
  );
}

export default App;