import {EMAIL_VALIDATIONS } from "./actions";


const initialState = {
    validations: []
}

export default function reducer(state= initialState, actions){

    switch (actions.type){
        case EMAIL_VALIDATIONS:
            return{
            ...state,
            validations: actions.payload
            
        
            }
        default:
            return state
    }
}