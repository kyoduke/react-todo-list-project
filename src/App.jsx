import { useState } from 'react'
import Header from "./Header"
import List from "./List"

function App() {

  return (
    <>
      <Header/>
      <List title={'Ola'} description={'Um ola mundo normal'} done={true}/>
    </>
  )
}

export default App
