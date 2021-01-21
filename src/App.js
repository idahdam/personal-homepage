import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { GlobalStyle } from './globalStyles'
import Home from './pages/Homepage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Blog" component={Home}/>
        <Route exact path="/Projects" component={Home}/>
        <Route exact path="/Social" component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
