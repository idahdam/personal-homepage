import React, { useEffect }  from 'react';
import { BrowserRouter, Switch, Route, useLocation, withRouter } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { GlobalStyle } from './globalStyles'
import Home from './pages/Homepage/Home';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import NaP from './pages/NaP/NaP';
import BlogDetails from './pages/Blogs/Blogs';
import ProjectDetails from './pages/Projects/Projects';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <ScrollToTop>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Blogs" component={Blogs}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/Socials" component={NaP}/>
          <Route exact path="/Blogs/:id" render={props => <BlogDetails {...props} />} />
          <Route exact path="/Projects/:id" render={props => <ProjectDetails {...props} />} />
          <Route component={NaP}/>
      </Switch>
        </ScrollToTop>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
