
import {Provider} from 'react-redux';
import { store } from './Features/StudentMentorStore';
import Home from './Components/Home';
import AssignStudents from './Components/AssignStudents';
import ChangeMentor from './Components/ChangeMentor';
import {  Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';


const App = () => {

  return (
    <div> 

      
      <Provider store={store} >
        <Sidebar/>

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path="/assign-students" element={ <AssignStudents/>}/>
      <Route path="/change-mentor" element={<ChangeMentor/>}/>
     
      

      </Routes> 
        
      </Provider>

      
    </div>
  );
};

export default App;