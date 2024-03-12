import React from 'react'
import style from "../Users/style.module.css"
function Users({list}) {
  return (
    <div className={style.userform}>
       {list?.map((item, index) =>
        <div className={style.usercard} key={"users"+index}>
            <p>{item.fullName}</p>
            <p>{item.email}</p>
            <p>{item.age}</p>
            <p>{item.hobby}</p>
            <p>{item.salary}</p>
        </div>
        )}  
    </div>
  )
}

export default Users
