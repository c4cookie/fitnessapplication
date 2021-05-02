import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar'
import Dashboard from './views/Dashboard';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Account from './views/Account';
import React from 'react'
import { MyFitnessPalExtractor } from './API/MyFitnessPalExtractor'

class App extends React.Component {

  componentDidMount() {
     MyFitnessPalExtractor();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/account" component={Account}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}
export default App;