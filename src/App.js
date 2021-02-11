import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header.component'
import Body from './components/body.component'
import Persons from './pages/persons/persons.component'
import Companies from './pages/companies/companies.component'
import Available from './pages/available/available.component'

function App() {
  return (
    <Router>
      <Header>
        <h2>
          <Link to="/persons">Personer</Link>
        </h2>
        <h2>
          <Link to="/companies">Företag</Link>
        </h2>
        <h2>
          <Link to="/available">Tillgängliga personer</Link>
        </h2>
      </Header>

      <Body>
        <Switch>
          <Route path="/persons">
            <Persons />
          </Route>
          <Route path="/companies">
            <Companies />
          </Route>
          <Route path="/available">
            <Available />
          </Route>
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
