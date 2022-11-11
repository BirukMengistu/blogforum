
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import AddPostForm from './store/post/AddPostForm';
import  CakeContainer  from './components/CakeContainer';
import  {Counter}  from './store/counter/CounterView';
import {fetchUsers} from './store/user/usersSlice'
import { store } from './app/store';
store.dispatch(fetchUsers())
function App() {
 
  return (
   

<Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/createpost"> Create-Post </Link>
        <Link to="/cafe"> Cafe </Link>
        <Link to="/counter"> counter </Link>
      </nav>
      <main>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cafe" element={<CakeContainer  />} />
        <Route path="/counter" element={<Counter  />} />
        <Route path="/createpost" element={ <AddPostForm  />} />
              </Routes>
         </main>
      </Router> 
   
   
  );
}

export default App;
