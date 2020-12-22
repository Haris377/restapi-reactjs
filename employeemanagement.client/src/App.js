import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddEmployee from './components/AddEmployee'  
import EmployeeList from './components/EmployeeList'  
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <div className="App">
        <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/AddEmployee'} className="nav-link">Add Employee</Link>    
              </li>
              <li className="nav-item">    
                <Link to={'/EmployeeList'} className="nav-link">Employee List</Link>    
              </li>  
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/AddEmployee' component={AddEmployee} />    
          <Route exact path='/edit/:id' component={EditEmployee} />    
          <Route exact path='/EmployeeList' component={EmployeeList} />    
        </Switch>    
      </div>    
    </Router>    
    </div>
  );
}

export default App;
