import { SET_IMAGE, LOAD_IMAGE, SET_CURRENT, GET_IMAGE, SET_COMMENT, GET_COMMENT }  from '../actions';



export default function picReducer(state = [], action) {
    switch (action.type) {
        case SET_IMAGE:
            return action.pictures;
        case LOAD_IMAGE:
            return [...action.pictures];
        case SET_CURRENT:
            return action.userPhotos;
        case GET_IMAGE:
            return action.picture;
        case SET_COMMENT:
            return action.comment;
        case GET_COMMENT:
            return action.comments;
        default:
            return state;
    }
}