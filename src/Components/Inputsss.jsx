import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodos, Inputss } from '../Reduxtoolkit/Todovalue'
import Dispaly from './Dispaly'

function Inputsss() {
    const {input}=useSelector((state)=>state.todoval)
    const dispatch=useDispatch()
  return (
    <div>
        <div className='flex flex-col justify-center items-center w-[100%] h-[100vh]'>
            <div className='flex'>
                <Input label='Names' onChange={(e)=>dispatch(Inputss(e.target.value))}></Input>
                <Button onClick={()=>dispatch(addtodos())}>Add</Button>
               
            </div>
            <div>
                <Dispaly/>
            </div>

        </div>
    </div>
  )
}

export default Inputsss