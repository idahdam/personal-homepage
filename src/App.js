import React, { Component }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { GlobalStyle } from './globalStyles'
import Home from './pages/Homepage/Home';
import Projects from './pages/Projects/Projects';
import Blogs from './pages/Blogs/Blogs';
import NaP from './pages/NaP/NaP';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Blogs" component={Blogs}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Socials" component={NaP}/>
        <Route component={NaP}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
