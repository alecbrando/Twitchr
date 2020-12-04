import { SET_COMMENT, GET_COMMENT }  from '../actions/actionComment';



export default function commentReducer(state = [], action) {
    console.log(state)
    switch (action.type) {
        case SET_COMMENT:
            return action.comment;
        case GET_COMMENT:
            return action.comments;
        default:
            return state;
    }
}