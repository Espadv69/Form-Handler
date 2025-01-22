import { useState } from 'react'

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

      {userData && (
        <div className="userData">
          <p className="p-userData">
            User: <span>{userData.user}</span>
          </p>
          <p className="p-userData">
            Email: <span>{userData.email}</span>
          </p>
        </div>
      )}
    </main>
  )
}

export default App
