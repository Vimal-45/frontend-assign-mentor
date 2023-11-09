
import axios from 'axios'
import { AssignStudentOldData, ChangeMentorNewData, mentorsData, studentData } from './StudentMentorSlice';



export const MentorApiData = ()=>async(dispatch)=>{
        try {
            const res = await axios.get('http://localhost:4000/api/get/mentors');
            dispatch(mentorsData(res.data))
            // console.log(res.data);
        } catch (error) {
            // console.log(error); 
        }
   
}

export const StudentApiData = ()=>async(dispatch)=>{
        try {
            const res = await axios.get('http://localhost:4000/api/get/student');
            // console.log(res.data);
            dispatch(studentData(res.data))
            // console.log(res.data);
        } catch (error) {
            // console.log(error); 
        }
   
}
export const AssignStudentApiData = ()=>async(dispatch)=>{
        try {
            

            const res = await axios.get('http://localhost:4000/api/previous/data');
            dispatch(AssignStudentOldData(res.data))
            // console.log(res.data);
        } catch (error) {
            console.log(error); 
        }
   
}
export const UpdatedMentorAPIData = ()=>async(dispatch)=>{
        try {
            const res = await axios.get('http://localhost:4000/api/updated/data');
            dispatch(ChangeMentorNewData(res.data))
            // console.log(res.data);
        } catch (error) {
            console.log(error); 
            
        }
   
}