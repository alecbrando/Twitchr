import Cookies from 'js-cookie';
export const SET_IMAGE = "auth/SET_IMAGE";
export const LOAD_IMAGE = "auth/SET_IMAGE";
export const SET_CURRENT = "auth/SET_CURRENT";

export const setImage = (pictures) => {
    return {
        type: SET_IMAGE,
        pictures
    }
};

export const loadImages = (pictures) => {
    return {
        type: LOAD_IMAGE,
        pictures
    }
};

export const setCurrent = (userPhotos) => {
    return {
      type: SET_CURRENT,
      userPhotos
    };
  };

export const postToAws = (formData) => async(dispatch) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const res = await fetch('/api/pictures', {
        method: "post",
        headers: {
            'XSRF-TOKEN': csrfToken
        },
        body: formData
    })
    if (res.ok) {
        const { pictures } = await res.json();
        dispatch(setImage(pictures))
        window.location.href="/photos";
    } else {
        alert('Failed to Upload!');
    }
}


export const getPhotos = () => async (dispatch) => {
    const res = await fetch(`/api/pictures`);
    if (res.ok) {
      const { pictures } = await res.json();
      dispatch(loadImages(pictures))
      return pictures
    }
  };

  export const getUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    if (res.ok) {
      const { userPhotos } = await res.json();
      dispatch(setCurrent(userPhotos))
      return userPhotos
    }
  };