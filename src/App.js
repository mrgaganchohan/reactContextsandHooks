import React, { Component , useState } from 'react';

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
 const MyProvider = (props) => {
  var initial_data  = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  const [ data, setData] = useState(initial_data)
  
    return (
      <MyContext.Provider value={{
        state:data,
        growAYearOlder: () => setData(data => ({ ...data, age: data.age + 1  }))
       
      }}>
        {props.children}
      </MyContext.Provider>
    )
  }


const Family = (props) => (
  <div className="family">
           

    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          { context => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
             </React.Fragment> 
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;

