import Cookies from 'js-cookie';
export const SET_IMAGE = "twtr/SET_IMAGE";
export const LOAD_IMAGE = "twtr/LOAD_IMAGE";
export const SET_CURRENT = "twtr/SET_CURRENT";
export const GET_IMAGE = "twtr/GET_IMAGE";



export const setImage = (picture) => {
    return {
        type: SET_IMAGE,
        picture
    }
};



export const loadImages = (pictures) => {
    return {
        type: LOAD_IMAGE,
        pictures
    }
};

export const getPic = (picture) => {
  return {
      type: GET_IMAGE,
      picture
  }
};

export const setCurrent = (userPhotos) => {
    return {
      type: SET_CURRENT,
      userPhotos
    };
  };

export const postToAws = (formData, User) => async(dispatch) => {

    const csrfToken = Cookies.get("XSRF-TOKEN");
    const res = await fetch('/api/pictures', {
        method: "post",
        headers: {
            'XSRF-TOKEN': csrfToken
        },
        body: formData
    })

    try {
      if (res.ok) {
        let { picture } = await res.json();
        picture = {...picture, User: User}
        dispatch(setImage(picture))
      }
      else {
        throw res;
      }
    } catch (error) {
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


  export const getPhoto = (id) => async (dispatch) => {
    const res = await fetch(`/api/pictures/${id}`);
    if (res.ok) {
      const { picture } = await res.json();
      dispatch(getPic(picture))
      return picture
    }
  };


  