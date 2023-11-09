import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    Mentors: [],
    Students: [],
    assignStudent: [],
    changeMentor: []

}


const StudentMentorSlice = createSlice({

    name: 'StudentMentorApp',
    initialState,
    reducers: {

        mentorsData: (state, actions) => {
                // console.log(actions.payload);
                state.Mentors = actions.payload

        },
        studentData: (state, actions) => {
            // console.log(actions.payload);
            state.Students = actions.payload

        },     
    
        AssignStudentOldData: (state, actions) => {
            state.assignStudent=actions.payload
            

        },

        ChangeMentorNewData: (state, actions) => {
            state.changeMentor=actions.payload

        },


    }

})

export const { mentorsData,
    studentData,   
    AssignStudent,
    AssignStudentOldData,
    ChangeMentorNewData } = StudentMentorSlice.actions;
export default StudentMentorSlice.reducer;