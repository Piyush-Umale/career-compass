import './index.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Jobs from './components/jobs';
import Login from './components/login';
import NotFound from './components/notFound';
import ProtectedRoute from './components/protectedRoute';
import JobsItemDetails from './components/jobsitemDetails';

const App = ()=>{
  

 
  return(
      <div id="app-wrapper">
            <Routes>

      <Route path='/' element = {<ProtectedRoute Component = {Home}/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/jobs' element = {<ProtectedRoute Component = {Jobs}/>}></Route>
      <Route path='/jobs/:id' element = {<ProtectedRoute Component = {JobsItemDetails}/>}></Route>
      <Route path='/*' element = {<NotFound/>}></Route>

    </Routes>
      </div>
  )
}

export default App;