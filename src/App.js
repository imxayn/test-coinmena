import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './component/Home'
import EditProduct from './component/EditProduct'
import {editData} from './store/productAction'
import {connect} from 'react-redux'

function App() {
 
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path={"/edit-products/:id"} component={EditProduct}/>
      </Switch>
   
  </Router>
  );
}
const mapStateToProps=(state)=>({ data:state.data })
const mapDispatchToProps = (dispatch) => {
  return {
    editData: ()=> dispatch(editData)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
