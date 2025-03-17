import { useSelector } from "react-redux"
import { Link } from "react-router"

function Home() {

  const users = useSelector(({users}) => users)

  return (
    <>
    <h1>Contact Book</h1>
      <Link to="/add" className='btn btn-success btn-sm my-3'>Add user +</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th score="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Link to={`/edit/${user.id}`} className='btn btn-warning btn-sm'>Edit</Link></td>
                <td><Link className='btn btn-danger btn-sm'>Delete</Link></td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Home