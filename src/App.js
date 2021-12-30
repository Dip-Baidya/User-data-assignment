import logo from './logo.svg';
import './App.css';
import User from './User/User';
import { useEffect, useState } from 'react';
import fakeData from './FakeData/UserData.json'
import Cart from './Cart/Cart';
import './User/User.css';
import './Cart/Cart.css';

function App() {
  const [users, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState(" ");
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setUser(fakeData)
  }, [])

  const handleAddUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
    setName(user.name);
    setTeam([...team, user]);
  }
  return (
    <div className="App">
      <div className="cart-container">
        <div className="cart">
          <h3>Our Cart History</h3>
          <Cart cart={cart} name={name} ></Cart>
        </div>
        <ul>
          {
            team.map(member=> <li>{member.name}</li>)
          }
        </ul>
      </div>
      <div className="user-container">
        <div className="user-info-container">
          <h2>Our all User info In Here</h2>
          {
            users.map(user => <User handleAddUser={handleAddUser} user={user} key={user.id}></User>)
            
          }
        </div>
      </div>

    </div>
  );
}

export default App;
