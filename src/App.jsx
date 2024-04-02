import { useState } from 'react'
import Header from "./Header"
import List from "./List"

function App() {

  const lists = [{title: "Tarefa 1", description: "Descrição 1", done: false}, {title: "Tarefa 2", description: "Descrição 2", done: false}, {title: "Tarefa 3", description: "Descrição 3", done: true}]
  return (
    <>
      <Header />
      <div className='list-container'>
        {lists.map(list => {
          // MUDAR KEY
          return <List key={list.title} title={list.title} description={list.description} done={list.done} />
        })
        }

      </div>
    </>
  )
}

export default App
