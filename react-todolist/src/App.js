import './App.css';
import ToDoList from './features/todos/components/ToDoList';
import NotFoundPage from './features/todos/components/NotFoundPage';
import {Route, Redirect, Link, BrowserRouter, Switch } from 'react-router-dom';
import ToDoDoneList from './features/todos/components/ToDoDoneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<ul>
          <Link to="/todo">To-Do List</Link><br/>
          <Link to="/todoDone">Completed To-Do List</Link>
        </ul>}
        {<Switch>
          <Route exact path="/">
            <Redirect to="/todo" />
          </Route>
          <Route exact path="/todo" component={ToDoList}/>
          <Route exact path="/todoDone" component={ToDoDoneList}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
