import { useState } from 'react'

const UserForm = ({ onSubmit }) => {
  const [user, setUser] = useState('') // Input
  const [email, setEmail] = useState('') // Input

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({ user, email }) // Send data
    setUser('') // Reset input
    setEmail('') // Reset input
  }

  return (
    <form action="">
      <div>
        <label htmlFor="">
          User:
          <input type="text" />
        </label>
      </div>
    </form>
  )
}

export default UserForm
