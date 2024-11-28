import { Fragment } from "react";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Todo from './components/Todo/Todo'
function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Todo/>
      <Todo/>
      <Todo/>
      <Todo/>
     </Fragment>
  );
}

export default App;
