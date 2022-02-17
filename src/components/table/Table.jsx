import React, { useEffect, useState }from 'react';
// import './table.css'


export const View = ({workss}) => {
    return workss.map(worki =>(
        <tr key={worki.date}>
            <td>{worki.date}</td>
            <td>{worki.company}</td>
            <td>{worki.work}</td>
            <td>{worki.test}</td>
            <td>{worki.from}</td>
            <td>{worki.too}</td>
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


const Table = () => {

    const [workss, setWorkss] = useState((getDatafromLS()));


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
      },[workss])

  return (
    <div>
      <div className='work-form'>
      <button type='primary' className='btn btn-primary'>Pridėti</button>
      </div>
      <form id="table-form">
        <div class="table-group">
            <div className='filter'>
            <h4>Duomenų filtravimas</h4>
            <select className='form-select' name='filters'>
                <option>Pasirinkite imonę</option>
            </select>
            <select className='form-select' name='filters'>
                <option>Pasirinkite paslaugą</option>
            </select>
            </div>
            <h1>Darbų sarašas:</h1>
        </div>
      </form>
      <table class="table table-hover table-bordered table-striped">
        <thead>
            <tr>
                <th>Data</th>
                <th>Klientas</th>
                <th>Suteikta paslauga</th>
                <th>Atlikto komponento testavunas</th>
                <th>Pradeta</th>
                <th>Baigta</th>
                <th>Plačiau</th>
            </tr>
        </thead>    
        <tbody id="work-list">
        <View workss={workss}></View></tbody>      
    </table>
    <h5>Pridėkite atlitką darbą</h5>
    <div className='form-container'>
        <form autoComplete='off' className='form-group' onSubmit={handleAddWorkSubmit}>
            <h6>Pasirinkite datą</h6> 
            <input type='date' className='input-group mb-3 input-group-prepend form-control' onChange={(e) => setDate(e.target.value)} value={date}></input>
            <h6>Pasirinkite įmonę</h6>
            <select id='types' className='form-control' onChange={(e) => setComapny(e.target.value)} value={company}>
                <option disabled selected value >Pasirinkite įmonė</option>
                <option value="React Masters">React Masters</option>
                <option value="React Gamers">React Gamers</option>
            </select>
            <h6>Pasirinkite suteiktą paslaugą</h6>
            <select id='typess' className='form-control' onChange={(e) => setWork (e.target.value)} value={work}>
                <option disabled selected value>Pasirinkite suteiktą paslaugą</option>
                <option value="React Developing">React Developing</option>
                <option value="React Modders">React Modders</option>
            </select>
            <h6>Atlikto komponento testavimas</h6>
            <input type="text" className='form-control mysize' onChange={(e) => setTest(e.target.value)} value={test}></input>
            <h6>Nuo:</h6>
            <input type='time' className='input-group mb-3 input-group-prepend form-control ' onChange={(e) =>setFrom(e.target.value)} value={from}></input>
            <h6>Iki</h6>
            <input type='time' className='input-group mb-3 input-group-prepend form-control ' onChange={(e) => setToo(e.target.value)} value={too}></input>
            <input type="submit" value="Saugoti" class="btn-primary btn"></input>
        </form>
    </div>
  </div>
  );
};

export default Table;
