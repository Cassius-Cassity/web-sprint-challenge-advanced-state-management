import React, { Component } from "react";
import { fetchSmurfs } from "./actions";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
  const {smurfs} = props;
  useEffect(()=>{
    props.fetchSmurfs()
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList smurfs={smurfs}/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapState = (state) => {
  return {
    smurfs: state.results,
  }
}

export default connect(mapState, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.