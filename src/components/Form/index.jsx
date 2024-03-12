import React, { useState } from 'react'
import TextInput from '../TextInput'
import style from "../Form/style.module.css"

function Form({onsubmit}) {
    const [form, setForm] = useState({});
    const initialForm = {
        fullName:'',
        age: '',
        email: '',
        hobby: '',
        salary:''
    }

    function handleSend(){
        console.log(form);
        onsubmit(form);
        setForm(initialForm)
    }

    
    const handleFormChange = (e) =>{
        const dynamicName = e.target.name
        const dynamicValue = e.target.value

        let newForm = {...form}
        newForm[dynamicName] = dynamicValue
        console.log("newForm", newForm);
        setForm(newForm)
    }
  return (
    <div className={style.form}>
        <div className={style.warning}>
        <TextInput
        value={form?.fullName}
        placeholder='Fullname'
        name="fullName"
        onChange={handleFormChange}
        />
        {!form.fullName?.trim()?.length && <span>There are no empty</span>}
        </div>
        <div className={style.warning}>
        <TextInput
        value={form?.email}
        placeholder='Email'
        name="email"
        onChange={handleFormChange}
        />
        {!form.email?.trim()?.length && <span>There are no empty</span>}
        </div>
        <div className={style.warning}>
        <TextInput
        value={form?.age}
        placeholder='Age'
        name="age"
        onChange={handleFormChange}
        />
        {!form.age?.trim()?.length && <span>There are no empty</span>}
        </div>
        <div className={style.warning}>
        <TextInput
        value={form?.hobby}
        placeholder='Hobby'
        name="hobby"
        onChange={handleFormChange}
        />
        {!form.hobby?.trim()?.length && <span>There are no empty</span>}
        </div>
        <div className={style.warning}>
        <TextInput
        value={form?.salary}
        placeholder='Salary'
        name="salary"
        onChange={handleFormChange}
        />
        {!form.salary?.trim()?.length && <span>There are no empty</span>}
        </div>
        <button  onClick={handleSend}>
            Send
        </button>
    </div>
  )
}

export default Form
