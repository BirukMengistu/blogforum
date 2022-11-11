import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount , resetAll} from './counterSlice'

export function Counter() {
 
  const [incrementValue ,setIncrementValue] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const addValue = Number(incrementValue)|| 0
 

  const reset =()=>{
      setIncrementValue(0)
      dispatch(resetAll())
  }

  return (
    <div className='container'>
         <div className='d-flex border-none m-3'>
                    <div >
                        <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                        >
                        Increment
                        </button>
                    </div>
                 <span className='m-2 font-size-15'>{count}</span>
                    <div>
                    <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                    </button>
                    </div>
         </div>
      
     

      <div  className='m-3'>
      <input  className ='w-20'
               type='text' 
                 value={incrementValue}
                onChange={
                    (e)=> setIncrementValue(e.target.value)
                }>
         </input>
         <button className ='btn btn-info m-2'
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          increamnet by amount 
        </button>
        <button className ='btn btn-warning m-2'
          aria-label="Decrement value"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}