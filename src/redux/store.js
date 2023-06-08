import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { DELETE_APPLICANTS_LIST, FILTER_APPLICANTS_BY_HOUSE, GET_APPLICANTS_LIST, LOADING_TOGGLE } from "./actions"

const initialList = {
    applicants: [],
    showLoading: true
}


const applicantsReducer = (state=initialList, action) =>{
    console.log(action)
    if(action.type===GET_APPLICANTS_LIST){
        return {
            ...state,
            applicants: action.payload
        }
    }

    if(action.type=== LOADING_TOGGLE){
        return {
            ...state, 
            showLoading: action.payload
        }
    }

    if(action.type=== DELETE_APPLICANTS_LIST){
        return {
            ...state, 
            applicants: action.payload
        }
    }

    if(action.type=== FILTER_APPLICANTS_BY_HOUSE){
        return {
            ...state, 
            applicants: action.payload
        }
    }

    return state
}


export default createStore(applicantsReducer,composeWithDevTools( applyMiddleware(thunk)))

