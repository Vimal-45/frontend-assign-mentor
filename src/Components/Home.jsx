import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MentorApiData, StudentApiData } from '../Features/StudentMentorAction';

import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();
    const allApiData = useSelector((state) => state.StudentMentorAppReducer)
    const [Name, setMentor] = useState('');
    const [sName, setStudent] = useState('');
    const [Specialization, setSpecialization] = useState('');
    const [Email, setEmail] = useState('');
    const [Course, setCourse] = useState('');
    // console.log(allApiData);


    useEffect(() => {

        dispatch(MentorApiData());
        dispatch(StudentApiData());

    }, [])

    const handleClik = async () => {
        const addMentor = { Name, Specialization }
        const addStudent = { Name: sName, Email, Course }            

        if (!addStudent.Email > 0) {

            if (addMentor.Name.length > 0) {
                try {
                    await axios.post('https://assign-mentor-9g6m.onrender.com/api/create/mentors', addMentor)
                    .then(data => { alert(data.data.message); });
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("Enter the Mentor Name")
            }

        } else
            if (addStudent.Name && addStudent.Email && addStudent.Course) {

                try {
                    await axios.post('https://assign-mentor-9g6m.onrender.com/api/create/student', addStudent)
                    .then(data => { alert(data.data.message); });

                } catch (error) {
                    console.log(error);
                }
            } else {
                alert('Enter the all student details')
            }
        dispatch(MentorApiData());
        dispatch(StudentApiData());

    }


    return (
        <div>
            <div>

                <input type="text"
                    placeholder='Enter Mentor Name'
                    value={Name}
                    onChange={(e) => { setMentor(e.target.value) }} />
                <input type="text"
                    placeholder='Enter Specialization'
                    value={Specialization}
                    onChange={(e) => { setSpecialization(e.target.value) }} />
                <button onClick={() => {
                    handleClik()
                    setMentor('');
                    setSpecialization('');

                }}>ADD Mentor</button>
                <h1>All Mentor Data</h1>
                {allApiData && allApiData.Mentors && allApiData.Mentors.length > 0 ?
                    allApiData.Mentors.map((item, index) => {
                        return (
                            <>  
                                    <ul>
                                        <li> <h3>{item.Name} -- {item.Specialization}</h3> </li>
                                    </ul>                                   


                            </>
                        )
                    }) : 'No Mentor found'}

                <input type="text"
                    placeholder='Enter Student Name'
                    value={sName}
                    onChange={(e) => { setStudent(e.target.value) }} />
                <input type="text"
                    placeholder='Enter the E-mail'
                    value={Email}
                    onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text"
                    placeholder='Enter the Course'
                    value={Course}
                    onChange={(e) => { setCourse(e.target.value) }} />
            
                <button onClick={() => {
                    handleClik()
                    setStudent('');
                    setCourse('');
                    setEmail('')



                }}>ADD Student</button>
                <h1>All Student Data</h1>

                {allApiData && allApiData.Students && allApiData.Students.length > 0 ?
                    allApiData.Students.map((item, index) => {
                        return (
                            <>
                                    <ul key={index}>
                                        <li><h3> {item.Name} -- {item.Course}</h3></li>
                                    </ul>
                            </>
                        )
                    }) : 'No student found'}

            </div>


        </div>
    );
};

export default Home;
