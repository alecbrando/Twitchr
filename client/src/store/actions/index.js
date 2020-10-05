import Cookies from 'js-cookie';
export const SET_IMAGE = "twtr/SET_IMAGE";
export const LOAD_IMAGE = "twtr/SET_IMAGE";
export const SET_CURRENT = "twtr/SET_CURRENT";
export const GET_IMAGE = "twtr/GET_IMAGE";
export const SET_COMMENT = "twtr/SET_COMMENT";
export const GET_COMMENT = "twtr/GET_COMMENT";


export const setImage = (pictures) => {
    return {
        type: SET_IMAGE,
        pictures
    }
};

export const setComment = (comment) => {
  return {
      type: SET_COMMENT,
      comment
  }
};

export const getComment = (comments) => {
  return {
      type: GET_COMMENT,
      comments
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

export const postToAws = (formData) => async(dispatch) => {
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
        const { pictures } = await res.json();
        dispatch(setImage(pictures))
        window.location.href="/photos";
      }
      else {
        throw res;
      }
    } catch (error) {
      console.log(error)
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


  export const postComment = (obj) => async(dispatch) => {
    const {pictureId} = obj;
    console.log(obj)
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const res = await fetch(`/api/pictures/photo/${pictureId}`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': csrfToken
        },
        body: JSON.stringify(obj)
    })

    try {
      if (res.ok) {
        const { comments } = await res.json();
        dispatch(setComment(comments))
      }
      else {
        throw res;
      }
    } catch (error) {
      console.log(error)
    }
      
}

export const grabComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/pictures/photo/${id}`);
  if (res.ok) {
    const { comments } = await res.json();
    dispatch(getComment(comments))
    return comments
  }
};