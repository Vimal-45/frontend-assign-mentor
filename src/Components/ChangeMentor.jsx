import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdatedMentorAPIData } from '../Features/StudentMentorAction';
import axios from 'axios';

const ChangeMentor = () => {
    const dispatch = useDispatch();
    const allApiData = useSelector((state) => state.StudentMentorAppReducer);
    const [selectedMentor, setSelectedMentor] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    // console.log(allApiData);

    useEffect(() => {
        dispatch(UpdatedMentorAPIData());
    }, []);

    const handleClik = async () => {
        const mentor = selectedMentor;
        const student = selectedStudent;

        if (mentor.length !== 0) {
            if (student.length !== 0) {

                console.log(mentor, student);

                try {
                    await axios.put('https://assign-mentor-9g6m.onrender.com/api/change/mentor',
                        { Mentor: mentor, Student: student })
                        .then(data => { alert(data.data.message) });
                } catch (error) {
                    console.log(error);
                }


            } else {
                alert('Select Student');
            }
        } else {
            alert('Select Mentor');
        }

        dispatch(UpdatedMentorAPIData());

    };

    return (

        <div>
            <h2>Update Mentor:</h2>

            {allApiData && allApiData.changeMentor && allApiData.changeMentor.length > 0 ? (
                <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                    <option value="">Select a Student</option>
                    {allApiData.changeMentor.map((item) =>
                        item.studentData.map((student, index) => {
                            return (
                                <>
                                    <option key={index} value={student.Name}>
                                        {student.Name}
                                    </option>
                                </>
                            )
                        })
                    )}
                </select>
            ) : (
                'No Student found'
            )}
            {allApiData && allApiData.changeMentor && allApiData.changeMentor.length > 0 ? (
                <select value={selectedMentor} onChange={(e) => setSelectedMentor(e.target.value)}>
                    <option value="">Select a mentor</option>
                    {allApiData.changeMentor.map((item, index) => {
                        return (
                            <>
                                <option key={index} value={item.Mentor}>
                                    {item.Mentor}
                                </option>
                            </>
                        )
                    })}
                </select>
            ) : (
                'No mentors found'
            )}

            <button onClick={handleClik}>Update Mentor</button>

            <div style={{paddingLeft:35, border: "1px solid black" }}>
                <h1> All students for a particular mentor Updated Data</h1>
                {allApiData && allApiData.changeMentor && allApiData.changeMentor.length > 0 ?
                    <>
                        {allApiData.changeMentor.map((item, index) => {
                            // console.log(item);

                            return (
                                <>
                                    <div key={index}>
                                        <h2>Mentor: {item.Mentor}</h2>
                                        {item.studentData.map((item, index) => {
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

export default ChangeMentor;
