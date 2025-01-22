import { useState, useEffect } from 'react'

import UserForm from './components/UserForm'

const App = () => {
  const [userData, setUserData] = useState(null)

  const handleUserSubmit = (data) => {
    setUserData(data)
  }

  return (
    <main>
      <h1 className="h1-title">Form Handling in React</h1>

      <UserForm onSubmit={handleUserSubmit} />
    </main>
  )
}

export default App
