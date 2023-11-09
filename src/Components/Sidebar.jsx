import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();


  return (
    
      <div className="container sidebar">
        <ul className="nav-links">
          <li><button onClick={() => { navigate('/') }} className="nav-button">Home</button></li>
          <li><button onClick={() => navigate('/assign-students')} className="nav-button"> AssignStudents </button></li>
          <li><button onClick={() => navigate('/change-mentor')} className="nav-button"> UpdateMentor</button></li>
        </ul>
      </div>
      
  );
};

export default Sidebar;
