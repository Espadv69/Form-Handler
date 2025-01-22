import { useState } from 'react'

const UserForm = ({ onSubmit }) => {
  const [user, setUser] = useState('') // Input
  const [email, setEmail] = useState('') // Input

  const handleUser = (e) => {
    const value = e.target.value
    setUser(value)
  }

  const handleEmail = (e) => {
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
    <form className="form-data" onSubmit={handleSubmit}>
      <label className="label-form-data">
        User:
        <input
          className="input-form-data"
          type="text"
          value={user}
          onChange={handleUser}
          required
        />
      </label>
      <label className="label-form-data">
        Email:
        <input
          className="input-form-data"
          type="email"
          value={email}
          onChange={handleEmail}
          required
        />
      </label>
      <button className="button-form-data">Submit</button>
    </form>
  )
}

export default UserForm
