import Cookies from 'js-cookie';
export const SET_COMMENT = "twtr/SET_COMMENT";
export const GET_COMMENT = "twtr/GET_COMMENT";

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


export const postComment = (obj) => async(dispatch) => {
    const {pictureId} = obj;

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

export const deleteComment = (id) => async(dispatch) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const res = await fetch(`/api/pictures/comment/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': csrfToken
        },
    })
    try {
      if (res.ok) {
          console.log("success")
      }
      else {
        throw res;
      }
    } catch (error) {
      console.log(error)
    }
      
}