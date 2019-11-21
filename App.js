/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { createContext,useState,useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const NameContext = createContext()



//This is CLASS Context method   ################################################################

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'class Context method'
    }
  };

  render() {
    return (
      /* Context value.We will use this value in another class */
      <NameContext.Provider value={this.state.name}>   
        <Child />
      </NameContext.Provider>
    )
  }
};


class Child extends React.Component {
  render() {
    return (
      <View>
        <Grandchild />
      </View>
    )
  }
};


class Grandchild extends React.Component {
  render() {
    return (
      <View>
        <Button />
      </View>
    )
  }
}


class Button extends React.Component {
  render() {
    return (
      /* We use context value.Which this created in another class(App class) */
      <NameContext.Consumer>          
        {
          name => <Text>{name}</Text>
        }
      </NameContext.Consumer>
    )
  }
};


//###############################################################################################


//_____________________________________________________________________________________________


//This is FUnctional Context (useContext) ******************************************************

const App1 = ()=>{

const[name,setName] = useState('useContext method');

  return(
    /* Context value.We will use this value in another function */
    <NameContext.Provider value={name}>
      <Child1 />
    </NameContext.Provider>
  )
}

const Child1 =()=>{
  return (
    <View>
      <Grandchild1 />
    </View>
  )
};

const Grandchild1 =()=>{
  return (
    <View>
      <Button1 />
    </View>
  )
};


const Button1 =()=>{
  /* We use context value.Which this created in another function(App class) */
  const name = useContext(NameContext)
  return(
  <Text>{name}</Text>
  )
}

//****************************************************************************************

export default App1;
