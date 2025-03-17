import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from "react-redux"

function Create() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const users = useSelector(({users}) => users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if(!name || !email) return alert('Please fill in all fields')

    dispatch(addUser({
      id: users.length + 1,
      name,
      email
    }))

    setName('')
    setEmail('')

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="mb-2">Enter name:</label>
      <input 
      className="form-control mb-2" 
      type="text" 
      name="name" 
      id="name" 
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email" className="mb-2">Enter email:</label>
      <input 
      className="form-control mb-2" 
      type="email" 
      name="email" 
      id="email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <button className="btn btn-primary ml-3" style={{marginRight: '5px'}}>Add user</button>
      <Link to="/" className="btn btn-success">Go back</Link>
    </form>
  )
}

export default Create