import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Product from '../product/Product';
export default function Room(props) {
  const [flag, setFlag] = useState(false);
  // const nav = useNavigate();

  const change = () => {
    setFlag(!flag);
  };

  const show = () => {
    if (flag === true) {
      return (
        <div>
          <Product
            products={props.products}
            type={props.type}
            addRooms={props.addRooms}
            change={change}
            index={props.index}
            addProduct={props.addProduct}
          />
        </div>
      );
    } else {
      return (
        <button style={{display: 'inline-block'}} onClick={change}>
          הוסף מוצר
        </button>
      );
    }
  };

  return (
    <div>
      <div className="div-room">
        <div className="div-room1">
          <h3>{`  שם החדר : ${props.name}`}</h3>
        </div>
        <br />
        <div className="div-room1">
          <h3>{`  סוג החדר  : ${props.type}`}</h3>
        </div>
        <br />

        {props.products.map((val, index) => {
          let condition = val.condition ? 'green' : 'red';
          return (
            <button
              id="product"
              onClick={() => {
                props.changeCondition(props.index, index);
              }}
              style={{backgroundColor: condition}}
            >
              {val.type}
            </button>
          );
        })}
        <br />
        {show()}
        <br />
        <br />

        <Link to={'/'}>
          <button style={{marginRight: '220px'}}>x</button>
        </Link>
      </div>
    </div>
  );
}
