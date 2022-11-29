import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function AddRoom(props) {
  const nav = useNavigate();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  return (
    <div>
      <div>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
          id="select"
        >
          <option value="">-- בחר חדר --</option>
          <option value="חדר שינה">חדר שינה</option>
          <option value="אמבטיה/שירותים">אמבטיה/שירותים</option>
          <option value="מטבח">מטבח</option>
        </select>
        <br />
        <br />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="inpt-1"
          type="text"
          placeholder="שם החדר"
          maxLength={5}
        />
        <br />
        <br />
        <div className="cr">
          <label htmlFor="inpt-2"> צבע החדר</label>
          <br />
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            name="inpt-2"
            type="color"
          />
        </div>
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            nav('/');
            props.addRooms(type, name, color);
          }}
          id="btn-add"
        >
          צור
        </button>
      </div>
    </div>
  );
}
