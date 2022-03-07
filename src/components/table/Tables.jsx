import React, { useEffect, useState }from 'react';
import {useAuthValue} from '../firebase/AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../firebase/firebase'
import { useNavigate }  from 'react-router-dom'
import { Table } from 'react-bootstrap'
// import './table.css


export const View = ({workss, deleteWork }) => {
    
    return workss.map(worki =>(
        <tr key={worki.date}>
            <td>{worki.date}</td>
            <td>{worki.company}</td>
            <td>{worki.work}</td>
            <td>{worki.test}</td>
            <td>{worki.from}</td>
            <td>{worki.too}</td>
            <td><button className='delete-btn btn-danger btn-sm delete' onClick={()=>deleteWork(worki.date)}>X</button></td>
        </tr>
    ))
}



const getDatafromLS=()=>{
    const data = localStorage.getItem('workss');
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}


const Tables = () => {

    
    const deleteWork=(date)=>{
        const filteredWorks=workss.filter((element,index)=>{
          return element.date !== date
        })
        setWorkss(filteredWorks);
      }

    const {currentUser} = useAuthValue()

    const [workss, setWorkss] = useState((getDatafromLS()));

    const navigate=useNavigate();

    const [date, setDate] = useState('');
    const [company, setComapny] = useState('');
    const [work, setWork] = useState('');
    const [test, setTest] = useState('')
    const [from, setFrom] = useState('')
    const [too, setToo] = useState('')
    

    const handleAddWorkSubmit=(e)=>{
        e.preventDefault();

        let worki={
            date,
            company,
            work,
            test,
            from,
            too
        }
        setWorkss([...workss, worki]);
        setDate('');
        setComapny('');
        setWork('');
        setTest('');
        setFrom('');
        setToo('');
    }



    useEffect(()=>{
        localStorage.setItem('workss',JSON.stringify(workss));
        if(!currentUser) navigate('/');
      },[workss])


      
  return (
    <div className='container-fluid'>
        
      <div className='work-form'>
          {/* //////////////// User info /////////////////////// */}
        <div className='profile' style={{marginTop: '10rem'}}>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <button className='btn btn-danger mb-3' onClick={() => {navigate('/'); signOut(auth)}}>Sign Out</button>
        </div>
        {/* ////////////////////////////////////////////////// */}
      </div>
    <h5>Pridėkite atlitką darbą</h5>
    <div className='form-container'>
        <form autoComplete='off' className='form-group' onSubmit={handleAddWorkSubmit}>
            <h6>Pasirinkite datą</h6> 
            <input type='date' className='input-group mb-3 input-group-prepend form-control' onChange={(e) => setDate(e.target.value)} value={date}></input>
            <h6>Pasirinkite įmonę</h6>
            <select id='types' className='form-control' onChange={(e) => setComapny(e.target.value)} defaultValue={company}>
                <option disabled selected value='' >Pasirinkite įmonė</option>
                <option value="React Masters">React Masters</option>
                <option value="React Gamers">React Gamers</option>
            </select>
            <h6>Pasirinkite suteiktą paslaugą</h6>
            <select id='typess' className='form-control' onChange={(e) => setWork (e.target.value)} defaultValue={work}>
                <option disabled selected value=''>Pasirinkite suteiktą paslaugą</option>
                <option value="React Developing">React Developing</option>
                <option value="React Modders">React Modders</option>
            </select>
            <h6>Atlikto komponento testavimas</h6>
            <input type="text" className='form-control mysize' onChange={(e) => setTest(e.target.value)} value={test}></input>
            <h6>Nuo:</h6>
            <input type='time' className='input-group mb-3 input-group-prepend form-control ' onChange={(e) =>setFrom(e.target.value)} value={from}></input>
            <h6>Iki</h6>
            <input type='time' className='input-group mb-3 input-group-prepend form-control ' onChange={(e) => setToo(e.target.value)} value={too}></input>
            <input type="submit" value="Saugoti" className="btn-primary btn"></input>
        </form>
    </div>
    <form id="table-form">
        <div className="table-group">
            <h1>Darbų sarašas:</h1>
        </div>
      </form>
      <Table  responsive className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Data</th>
                <th>Klientas</th>
                <th>Suteikta paslauga</th>
                <th>Atlikto komponento testavunas</th>
                <th>Pradeta</th>
                <th>Baigta</th>
                <th>Delete</th>
            </tr>
        </thead>    
        <tbody id="work-list">
        <View workss={workss} deleteWork={deleteWork}></View></tbody>      
    </Table>
  </div>
  );
};

export default Tables;
