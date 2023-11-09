import {configureStore} from '@reduxjs/toolkit'
import StudentMentorReducer from './StudentMentorSlice'


export const store =  configureStore  ({
     reducer:{
        StudentMentorAppReducer :  StudentMentorReducer
     }

})

