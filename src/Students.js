import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentNextPage from './StudentNextPage';


const Students = () => {
  
    const[myData,setMyData]=useState(
        [
          { 
              id:1,
              name:'John',
              age: '26',
              course: 'MERN',
              batch: 'October'
          },
          {
              id:2,
              name:'Biden',
              age: '25',
              course: 'MERN',
              batch: 'November'
          },
          {
              id:3,
              name:'Doe',
              age: '26',
              course: 'MERN',
              batch: 'September'
          },
          {
              id:4,
              name:'Barar',
              age: '26',
              course: 'MERN',
              batch: 'October'
          },
          {
              id:5,
              name:'John',
              age: '22',
              course: 'MERN',
              batch: 'September'
          },
          {
              id:6,
              name:'christ',
              age: '23',
              course: 'MERN',
              batch: 'October'
          },
          {
              id:7,
              name:'Elent',
              age: '24',
              course: 'MERN',
              batch: 'November'
          },
      
      ]
      )

      const [EditData,setEditData] = useState ( true );
      const [editId,setEditId] = useState ( null );
      var [addBtn,setAddBtn] = useState ( true );
     const [AddUpdate,setAddUpdate] = useState (true);
     
     const [data,setData]=useState({
              toggleShow: true,
       });

  

  const [objState,setObjState] = useState ({
    id:'',
    name:'',
    age : '',
    course : '',
    batch : '',
  })


const HandleUpdate=(e)=>{
  setObjState({...objState,[e.target.name]:e.target.value})
}

const HandleClick=(e)=>{

  e.preventDefault()
  
  if(!EditData && !addBtn){
    setAddBtn(true);
    setTimeout(()=>{
      alert('Your details Updated Succesfully ');
    },500)
    setMyData(
      myData.map((e)=>{
        if(e.id === editId){
          return {...e,name:objState.name,age:objState.age,course:objState.course,batch:objState.batch}
        }
        return e;
       
      })
    )
  }


  var MyDataObj={
    name:objState.name,
    age:objState.age,
    course:objState.course,
    batch:objState.batch,
  }

//   console.log(MyDataObj);
//   console.log(myData.length);
  MyDataObj=myData;

  MyDataObj=objState;
  myData.push(MyDataObj)
  setObjState({id:myData.length,name:'',age:'',course:'',batch:''})
  
  setData({toggleShow:!data.toggleShow})
}

  const toggleFunc=(e)=>{
    setData({toggleShow:!data.toggleShow})
    setAddUpdate(!AddUpdate)
  }
   
  const editFunc=(id)=>{
    // console.log(id);
    setEditId(id);
    setEditData(false);
    setAddBtn(false);
    console.log(editId);
    var editData=myData.filter((ele)=>(ele.id)===id);
    
  
    setObjState({...objState,name:editData[0].name,age:editData[0].age,course:editData[0].course,batch:editData[0].batch})
    console.log(objState.name);
    setData({toggleShow:!data.toggleShow})
    editData={};
    // console.log(editData);
   
    
  }

  return (
    <>
      {data.toggleShow ?
        <div>
          <div className="header">
            <div className="head">
              Student Details
            </div>
            <div className="head_btn">
              <Link to='/students-Data' ><button className='h_btn' onClick={toggleFunc} >AddNew Student</button></Link>
            </div>
          </div>
          <StudentNextPage objPass={myData}  toggleFunc={toggleFunc} HandleClick={HandleClick} editFunc={editFunc} AddUpdate={AddUpdate} />
        </div>
        : 
        <div className='container'>
          <form onSubmit={toggleFunc} className='form_submit'>
            <input type="text" className='inpt' name='name' onChange={HandleUpdate} value={objState.name} placeholder='name' />
            <input type="text" className='inpt' name='age' onChange={HandleUpdate} value={objState.age} placeholder='age' />
            <br /><br />
            <input type="text" className='inpt' name='course' onChange={HandleUpdate} value={objState.course} placeholder='course' />
            <input type="text" className='inpt' name='batch' onChange={HandleUpdate} value={objState.batch}  placeholder='batch'/>
            <br /><br />
            <button onClick={toggleFunc} className='simplebtns'><Link to='/Students'>CANCEL</Link></button>
            <button type='submit' onClick={HandleClick} className='form_btn simplebtns' ><Link to='/Students'>SUBMIT</Link></button> 
            
          </form>
        </div>
      }
    </>
  )
}

export default Students