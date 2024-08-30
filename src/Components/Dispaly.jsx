import React from 'react'
import { useSelector } from 'react-redux'

function Dispaly() {
    const {todo}=useSelector((state)=>state.todoval)
  return (
    <div>
        <div>

            {
                todo.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Dispaly