import { useState } from 'react'
import Header from "./Header"
import Task from "./Task"
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [list, setList] = useState([{ title: "Tarefa 1", description: "Descrição 1", done: false }, { title: "Tarefa 2", description: "Descrição 2", done: false }, { title: "Tarefa 3", description: "Descrição 3", done: true }])

  return (
    <>
      <Header />
      <div className="app-flex-container">
        <div className="input-container">
          <h2>Adicionar tarefa</h2>
          <input type="text" name="" id="" placeholder="Título"/>
          <input type="text" name="" id="" placeholder="Descrição"/>
          <div className="checkbox">
            <label htmlFor="completed">Tarefa concluída?</label>
            <input type="checkbox" name="completed" id="" />
          </div>
          <input type="button" value="Adicionar" onClick={() => setList(
            [...list, {
              // dados estaticos para teste, substituir por valores nos inputs
              title: "Tarefa adicionada", 
              description: "Tarefa adicionada", 
              done: false}]
              )}/>

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
