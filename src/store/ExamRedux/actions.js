import {Get_Example_API,Get_Example_Success} from './actionTypes'

export const GetExample=()=>({
    type:Get_Example_API,

});

export const getExampleSuccess = (ExamData) => ({
    type: Get_Example_Success,
    payload:ExamData
});