import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './components/rooms/rooms.css';
import './components/addroom/addroom.css';
import './components/room/room.css';
import AddRoom from './components/addroom/AddRoom.jsx';
import Rooms from './components/rooms/Rooms.jsx';
import Room from './components/room/Room.jsx';

function App() {
  const [rooms, setRooms] = useState([]);

  const addRooms = (type, name, color) => {
    if (name.length <= 0 || type === ('')) {
      alert('לא נבחר שם לחדר')
    } else if (type === ('')) {
      alert('לא נבחר סוג חדר')
    } else {
      setRooms([...rooms, { type: type, name: name, color: color, products: [] }])
    }
  }

  const addProduct = (index, typeOfProduct) => {
    let temp = { condition: false, type: typeOfProduct }
    if (rooms[index].products.length === 5) {
      alert('the room can contain only 5 product')
    } else if (typeOfProduct === 'stereo system' && rooms[index].products
      .filter(val => val.type === 'stereo system').length > 0) {
      alert('אפשר להוסיף מערכת סטריאו אחת בכל חדר')
    } else if (typeOfProduct === 'water heater' && rooms[index].type !== 'אמבטיה/שירותים') {
      alert('דוד אפשר להוסיף רק בחדר אמבטיה/שירותים')
    } else {
      rooms[index].products.push(temp)
      setRooms([...rooms]);
    }
  };

  const changeCondition = (indexOfRoom, indexOfProduct) => {
    rooms[indexOfRoom].products[indexOfProduct].condition = !rooms[indexOfRoom].products[indexOfProduct].condition;
    setRooms([...rooms])
  }

  return (
    <div className="App">
      <div id='main'>
        <h1>Smart house</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Rooms room={rooms} />} />
            <Route path='/addRoom' element={<AddRoom addRooms={addRooms} />} />
            {rooms.map((val, index) => {
              return <Route path={`room${val.name}`} element={<Room name={val.name}
                type={val.type} addProduct={addProduct} products={val.products} index={index} changeCondition={changeCondition} />} />
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
