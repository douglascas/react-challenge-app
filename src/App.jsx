import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import { fetchUsers } from './services/userService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container-fluid p-5">
      <header>
        <h1 className="mb-4 text-center">User Lista</h1>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      
      <div className="row">
        {filteredUsers.length === 0 ? (
          <div className="col-12 text-center">
            <p>Users not found</p>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div key={user.id} className="col-md-4 col-sm-6 col-lg-4 col-xl-3">
              <UserCard user={user} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
