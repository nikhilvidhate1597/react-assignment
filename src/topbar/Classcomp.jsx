import React, { Component } from 'react'
import './topbar.css';
export default class Classcomp extends Component {
    constructor() {
        super()
        this.state={
            Show:false
        }
    }
            Operation=()=>{
                this.setState({
                    Show:!this.state.Show
                })
            }
    render() {
        return (
            <>
            {
                this.state.Show ?
            <div className="box1">
                <h2>This is Created using Class Component</h2>
                <>This is done using External CSS </>
                <div style={{color:"red",padding:'10px'}}>This is done using Inline CSS</div>
            </div>
            :
            null
            }
            <button className="button1" onClick={()=>this.Operation()}>To see styling in class component</button>
            </>
    )
  }
}
