import React, { Component } from 'react';
import './App.css';


/**
 * [App Connects all the Components together]
 * @extends Component
 */
class App extends Component {  
  render() {
    
    //inline Stlyes
    const AppStlye = {
      
    };
    
    return (
      <div style={AppStlye}>
        <ReflectionPage/>
      </div>
    );
  }
}

/**
 * [ReflectionPage this is the outer most Component]
 * @extends Component
 */
 class ReflectionPage extends Component {
   
   render() {
     
     // inline styles
     const ReflectionPageStyle = {
       backgroundColor: 'gray'
     };
     
     return (
       <div>
         <Board/>
       </div>  
     );
   }
 }

/**
 * [Board this Component surrounds the text area]
 * @extends Component
 */
class Board extends Component {
  render() {
    
    
    //inline styles
    const BoardStyle = {
      border: '1px solid black',
      width: '900px',
      height: '625px',
      marginLeft: '175px',
      marginTop: '50px',
      textAlign: 'center',
      outline: '5px solid black',
      outlineOffset: '10px'
    };
    
    return (
      <div>
        <div style={BoardStyle}>
          <h2>Reflections of the Day</h2>
          <ReflectionDiary/>
        </div>  
      </div>  
    );
  }
}

/**
 * [ReflectionDiary This is the textArea that allows the user to write anything they want]
 * @extends Component
 */
class ReflectionDiary extends Component {
  render() {
    
    //inline styles
    const ReflectionDiaryStyle = {
    
    };
    
    const TextAraStyle = {
      width: '500px',
      height: '500px',
      backgroundColor: '#9EA09F',
      fontSize: '12pt'
    };
    
    return (
      <div style={ReflectionDiaryStyle}>
        <form >
          <label>
            <textarea placeholder="Type Away" style={TextAraStyle} type="text" />
          </label>
          
        </form>
      </div>  
    );
  }
}


export default App;
