import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import Project from './components/Project';
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
        <ul>
        <li><Link to="/all">すべてのタスク</Link></li>
        <li><Link to="/project/1">First Project</Link></li>
        <li><Link to="/project/2">Next Project</Link></li>
        </ul>

        <Route path="/all" component={Project} />
        <Route path="/project/:id"
      render={
          ({match}) => <Project projectId={match.params.id} />
      }
        />
        </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
export default App
