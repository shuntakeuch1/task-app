import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
// import Project from './components/Project';
import Project from './containers/Project';
import Nav from './containers/Nav';

// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

// const App = () => (
//     <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//     </div>
// )
class App extends Component{
  render(){
    return(
        <div className="App">
        <Nav />

        <Switch>
        <Route path="/all" component={Project} />
        <Route
      path="/project/1"
      render={() => <Redirect to="/all" />}
      />
        <Route path="/project/:id"
      render={
          ({match}) => <Project projectId={match.params.id} />
      }
        />
        </Switch>
        </div>
    );
  }
}
export default App
