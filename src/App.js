import React, { Component } from 'react'
import Class from './Components/Class';
import Function from './Components/Function';
import './Components/style.css';


export default class App extends Component {
  constructor(){
    super();
      this.state = {
        isClass : false,
        isSomeRandom : false
      }
    
  }
  funClickHandler = ()=>{
    this.setState({ isSomeRandom: !this.state.isSomeRandom })
  }
  classClickHandler = ()=>{ 
    this.setState({ isClass: !this.state.isClass })
  }
  
  render() {
    return (
      <div className='App'>
      <h1 style={{color : "green", marginLeft: "380px"}}>Styling using Functional and Class Components</h1>
      <div className='mybtn'>
        <button className='leftbtn' onClick={ this.funClickHandler}> To see styling in function component </button>
        <button className="rightbtn" onClick={ this.classClickHandler }>To see styling in class component</button>
      </div>
      <div className='flex--box'>
      {
        this.state.isSomeRandom
        ?
        <Function />
        :
        null
      }
      {
        this.state.isClass
        ?
        
        <Class />
        :
        null
      }
      </div>
      </div>
    )
  }
}


// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name: "harsh"
//     }
//   }
//   handleChange = () =>{
//     this.setState({
//       name: "mavani"
//     });
//   }
//   render() {
//     return (
//       <div>
//       <h1>{this.state.name}</h1>
//         <button onClick={this.handleChange}>my name is </button>
//       </div>
//     )
//   }
// }

