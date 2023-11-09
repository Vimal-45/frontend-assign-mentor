import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AssignStudentApiData, MentorApiData, StudentApiData } from '../Features/StudentMentorAction';
import Select from 'react-dropdown-select';
import axios from 'axios';


const AssignStudents = () => {

    const dispatch = useDispatch();
    const allApiData = useSelector((state) => state.StudentMentorAppReducer)
    const [selectedMentor, setSelectedMentor] = useState('')
    const [selectedStudents, setSelectedStudents] = useState('');    
    // console.log(allApiData);


    useEffect(() => {

        dispatch(MentorApiData());
        dispatch(StudentApiData());
        dispatch(AssignStudentApiData());

    }, [])

    const handleClik = async () => {
        
        const mentor = selectedMentor;
        const students = selectedStudents;

        // console.log(mentor.length);
        if (mentor.length !== 0) {

            if (students.length !== 0) {
               
                try {
                await axios.post('http://localhost:4000/api/assign/student',
                {Mentor:mentor,studentData:students})
                .then(data => { alert(data.data.message)});
                                    
            } catch (error) {
                    console.log(error);  
                }


            } else {
                alert('Select Students')
            }
        } else { alert('Select Mentor') }


        dispatch(AssignStudentApiData());
        dispatch(MentorApiData());
        dispatch(StudentApiData());
       

    }




    return (
        <div>
            <h2> Assign Students to Mentor:</h2>
            {allApiData && allApiData.Mentors && allApiData.Mentors.length > 0 ? (
                <select value={selectedMentor} onChange={(e) => setSelectedMentor(e.target.value)}>
                    <option value="">Select a mentor</option>
                    {allApiData.Mentors.map((item, index) => {
                        return (
                            <>
                                <option key={index} value={item.Name}>
                                    {item.Name}
                                </option>

                            </>
                        )
                    })}
                </select>
            ) : (
                'No mentors found'
            )}

            {allApiData && allApiData.Students && allApiData.Students.length > 0 ?
                <>
                    {allApiData.Students && allApiData.Students ?
                        <Select
                            name='select'
                            options={allApiData.Students}
                            labelField='Name'
                            valueField='Email'
                            multi onChange={(value) => { setSelectedStudents(value) }}
                        />
                        : 'No Student found'}
                </>
                : 'No Student found'
            }


            <button onClick={() => { handleClik() }}>Assign student </button>

            <div style={{ paddingLeft: 35 , border: "1px solid black" }}>
            <h1>previously assigned mentor for a particular student Data</h1>
            {allApiData && allApiData.assignStudent && allApiData.assignStudent.length > 0 ?
                <>
                    {allApiData.assignStudent.map((item, index) => {
                        // console.log(item);
                        
                        return (
                            <>
                            
                                <div key={index}>
                                   
                                    <h2>Mentor: {item.Mentor}</h2>                                   
                                  
                                         {item.studentData.map((item,index)=>{
                                            return (
                                               <ul key={index}>
                                            <li> {item.Name} - {item.Course} </li>
                                               </ul> 
                                            )
                                        })}
                               

                                </div>

                            </>
                        )
                    })}
                </>
                : 'No Data found'
            }


            </div>

        </div>
    );
};

export default AssignStudents;