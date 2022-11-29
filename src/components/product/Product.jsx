import React, {useState} from 'react';

export default function Product(props) {
  const [product, setProduct] = useState('air-conditioner');

  return (
    <div>
      <form action="">
        <label htmlFor="select">select </label>
        <br />
        <select
          onChange={(e) => {
            setProduct(e.target.value);
          }}
          id="select-product"
        >
          <option value="air-conditioner">air-conditioner</option>
          <option value="water heater">water heater</option>
          <option value="stereo system">stereo system</option>
          <option value="lamp">lamp</option>
        </select>
      </form>
      <br />
      <button
        onClick={() => {
          props.change();
          props.addProduct(props.index, product);
        }}
      >
        הוסף
      </button>
    </div>
  );
}
