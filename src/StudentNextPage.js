import React from 'react'
import{Link} from 'react-router-dom'

const StudentNextPage = ({objPass,toggleFunc,submitHandler,editFunc}) => {
 return (
 <>
  <div className="table">
    <div className="box">
       <div className='name for_left' >Name</div>
       <div className='age for_margin'>Age</div>
      <div className='course for_margin'>Course</div>
      <div className='batch for_margin'>Batch</div>
     <span>Change</span>
    </div>

   {objPass.map((ele)=>{
     return(
     <div className="box" key={ele.id}>
      <div className='name' >{ele.name}</div>
     <div className='age for_margin'>{ele.age}</div>
      <div className='course for_margin'>{ele.course}</div>
      <div className='batch for_margin'>{ele.batch}</div>
      <Link to={`/students-Data/${ele.id}`}><button onClick={()=>editFunc(ele.id)} className='btn_edit'>Edit</button></Link>
       </div>
                )
              })}
        </div>
    </>
  )
}

export default StudentNextPage