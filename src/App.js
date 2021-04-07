import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';

class App extends React.Component {
  initialState = {
    main: {
      classforfirstchild: ['main__info-container'], 
      classforsecondchild: ['hide'],
      classforthirdchild: ['hide']
    }
  }

  state = this.initialState

  setMainClass = (index) => {
    if(index === 0){
      if(this.state.main.classforfirstchild.length > 1) {
        if(this.state.main.classforsecondchild.length === 1){
          this.setState((state, props) => ({
            main: {
              classforfirstchild: ['main__info-container', 'main__info-container--show'],
              classforsecondchild: ['hide'],
              classforthirdchild: ['main__guide-container', 'main__guide-container--hide']
            }
          }))
        }else if(this.state.main.classforthirdchild.length === 1) {
          this.setState((state, props) => ({
            main: {
              classforfirstchild: ['main__info-container', 'main__info-container--show'],
              classforsecondchild: ['main__info-container', 'main__info-container--hide'],
              classforthirdchild: ['hide']
            }
          }))
        }else {
          this.setState((state, props) => ({
            main: {
              classforfirstchild: ['main__info-container', 'main__info-container--show'],
              classforsecondchild: ['main__info-container', 'main__info-container--hide'],
              classforthirdchild: ['main__guide-container', 'main__guide-container--hide']
            }
          }))
        }
        
      }
    }else if(index === 1){
      if(this.state.main.classforthirdchild[0] !== 'hide'){
        this.setState((state, props) => ({
          main: {
            classforfirstchild: ['main__info-container', 'main__info-container--hide'],
            classforsecondchild: ['main__info-container', 'main__info-container--show'],
            classforthirdchild: ['main__guide-container', 'main__guide-container--hide']
          }
        }))
      }else{
        this.setState((state, props) => ({
          main: {
            classforfirstchild: ['main__info-container', 'main__info-container--hide'],
            classforsecondchild: ['main__info-container', 'main__info-container--show'],
            classforthirdchild: ['hide']
          }
        }))
      }
    }else {
      if(this.state.main.classforsecondchild[0] !== 'hide') {
        this.setState((state, props) => ({
          main: {
            classforfirstchild: ['main__info-container', 'main__info-container--hide'],
            classforsecondchild: ['main__info-container', 'main__info-container--hide'],
            classforthirdchild: ['main__guide-container', 'main__guide-container--show']
          }
        }))
      }else{
        this.setState((state, props) => ({
          main: {
            classforfirstchild: ['main__info-container', 'main__info-container--hide'],
            classforsecondchild: ['hide'],
            classforthirdchild: ['main__guide-container', 'main__guide-container--show']
          }
        }))
      }
    }
  }
  
  render() {
    const main_strings = [{
      title: 'What is React?',
      info: ['React is a JavaScript library for building user interfaces for single page application.', 'It was developed by Facebook & It allows developers to create large web apps whitout reloading the page.', 'The main purpose of React is to be fast, scalable, and simple.']
    },
    {
      title: 'What can do React?',
      info: [
        'React is a JavaScript library! The JavaScript libraries are collections of pre-written code JavaScript that frees us from perform repetitive functions.',
        'So when we use React, we are using JavaScript behind so we can do everything that JavaScript can do: create and control dynamic web content.',
        "React specializes in helping developers build user interfaces or UI's as screen menus, search bars, buttons or anything else someone interacts with."
    ]
    }]

    return (
        <div className="app">
        <Header setMainClass={this.setMainClass}/>
        <Main main_strings={main_strings} main_childs_class={this.state.main}/>
      </div>
    )
  }
}

export default App;
