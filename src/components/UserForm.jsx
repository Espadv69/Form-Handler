import { useState } from 'react'

const UserForm = ({ onSubmit }) => {
  const [user, setUser] = useState('') // Input
  const [email, setEmail] = useState('') // Input

  handleUser = (e) => {
    const value = e.target.value
    setUser(value)
  }

  handleEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({ user, email }) // Send data
    setUser('') // Reset input
    setEmail('') // Reset input
  }

  return (
    <form action="">
      <label htmlFor="">
        User:
        <input type="text" value={user} onChange={handleUser} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmail} />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default UserForm
