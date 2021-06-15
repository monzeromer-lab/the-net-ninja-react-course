import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Create from './create';
import BlogDetails from './blogDetails'
import NotFound from './notFound';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          
        </div>
    </div>
    </Router>
    
  );
}

export default App;