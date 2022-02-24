import { Get_Example_Success } from "./actionTypes"

const INIT_STATE = {
    ExamData:[],
}

const Exam = (state = INIT_STATE, action) => {
    switch (action.type) {
        case Get_Example_Success:
            return {
              ...state,
              ExamData: action.payload,
            }
            default:
                return state
        }
}
export default Exam ;