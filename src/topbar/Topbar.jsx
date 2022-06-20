import React,{useState} from 'react';
import './topbar.css';

// const[show,setShow]=useState(false)

// export default function Topbar() {
    const Topbar =()=>{
        const[show,setShow]=useState(false)
    
  return (

    <div className="top">
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <button className="btn" onClick={()=>setShow(!show)}>To see styling in functional component</button>
      {
        show ? <div className="box">
            <h2>This is Created using Functional and Class Component</h2>
            <>This is done using External CSS</>
            <div style={{color:"red",padding:'10px'}}>This is done using Inline CSS</div>
        </div>
        :
        null
        
      }
    </div>

  );
}
export default Topbar;