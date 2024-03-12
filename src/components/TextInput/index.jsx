import React from 'react';
import style  from "../TextInput/style.module.css"

function TextInput({value,onChange, placeholder, ...props}) {
  return (
    <div>
        <input 
        className={style.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
        />

    </div>
  )
}

export default TextInput
