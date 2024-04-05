import { useState } from 'react'
import Header from "./Header"
import Task from "./Task"
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [list, setList] = useState([{ title: "Tarefa 1", description: "Descrição 1", done: false }, { title: "Tarefa 2", description: "Descrição 2", done: false }, { title: "Tarefa 3", description: "Descrição 3", done: true }])
  const [inputTitle, setInputTitle] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Header />
      <div className="app-flex-container">
        <div className="input-container">
          <h2>Adicionar tarefa</h2>
          <input value={inputTitle} onInput={e => setInputTitle(e.target.value)} type="text" name="" id="" placeholder="Título" />
          <input value={inputDesc} onInput={e => setInputDesc(e.target.value)} type="text" name="" id="" placeholder="Descrição" />
          <div className="checkbox">
            <label htmlFor="completed">Tarefa concluída?</label>
            <input onChange={() => setIsChecked(!isChecked)} type="checkbox" name="completed" id="" />
          </div>
          <input type="button" value="Adicionar" onClick={() => {
            setList(
              [...list, {
                // dados estaticos para teste, substituir por valores nos inputs
                title: inputTitle,
                description: inputDesc,
                done: isChecked
              }])

            // clear inputs
            setInputTitle('');
            setInputDesc('');
            setIsChecked(false);



          }} />

        </div>
        <div className='list-container'>
          {list.map(task => {
            return <Task key={uuidv4()} title={task.title} description={task.description} done={task.done} />
          })
          }

        </div>
      </div>

    </>
  )
}

export default App
