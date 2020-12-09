import { SET_COMMENT, GET_COMMENT, DEL_COMMENT }  from '../actions/actionComment';



export default function commentReducer(state = [], action) {
    switch (action.type) {
        case SET_COMMENT:
            return [...state, action.comment];
        case GET_COMMENT:
            return action.comments;
        case DEL_COMMENT:
            let newState = state.filter(comment => comment.id !== action.id)
            return newState;
        default:
            return state;
    }
}