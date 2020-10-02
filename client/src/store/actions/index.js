import Cookies from 'js-cookie';
const SET_IMAGE = "auth/SET_IMAGE";

export const setImage = (pictures) => {
    return {
        type: SET_IMAGE,
        pictures
    }
};

export const postToAws = (formData) => async(dispatch) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    console.log(formData)
    const res = await fetch('/api/pictures', {
        method: "post",
        headers: {
            'XSRF-TOKEN': csrfToken
            // "Content-Type": "application/json"
        },
        body: formData
    })
    if (res.ok) {
        const { pictures } = await res.json();
        dispatch(setImage(pictures))
    }
}

export default function picReducer(state = [], action) {
    switch (action.type) {
        case SET_IMAGE:
            return action.pictures;
        default:
            return state;
    }
}
