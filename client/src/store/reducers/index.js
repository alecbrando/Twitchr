import { SET_IMAGE, LOAD_IMAGE, SET_CURRENT, GET_IMAGE }  from '../actions/actionPicture';

const INITIAL_STATE = {
    allImages: [],
    singleImage: {},
    userImages: [],
}

export default function picReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_IMAGE:
            //appending
            console.log(state)
            console.log(action)
            let allImages = [...state.allImages, action.picture]
            return {...state, allImages}
        case LOAD_IMAGE:
            //all images
            console.log(state)
            console.log(action)
            let loadImgs = [...action.pictures]
            return { ...state, allImages: loadImgs};
        case SET_CURRENT:
            //user images
            console.log(state)
            console.log(action)
            let userImages = [...action.userPhotos]
            return {...state, userImages};
        case GET_IMAGE:
            //single image
            console.log(state)
            console.log(action)
            let singleImage = {...action.picture}
            return {...state, singleImage};
        default:
            return state;
    }
}