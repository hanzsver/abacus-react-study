import { useState, useEffect } from 'react';

const CustomInput = ({initialValue}) => {

  const [value, setValue] = useState(initialValue);
  useEffect(()=>{
    return (
      <input type="text" value={value}/>
    );
  })
}

export default CustomInput;