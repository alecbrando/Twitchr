import Cookies from 'js-cookie';
const SET_IMAGE = "auth/SET_IMAGE";

export const setImage = (user) => {
    return {
        type: SET_IMAGE,
        user
    }
};

export const postToAws = async (formData) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    // const object = {};
    // formData.forEach((value, key) => {
    //     // Reflect.has in favor of: object.hasOwnProperty(key)
    //     if (!Reflect.has(object, key)) {
    //         object[key] = value;
    //         return;
    //     }
    //     if (!Array.isArray(object[key])) {
    //         object[key] = [object[key]];
    //     }
    //     object[key].push(value);
    // });

    // console.log(object)
    console.log(formData)
    const res = await fetch('/api/pictures', {
        method: "post",
        headers: {
            'XSRF-TOKEN': csrfToken
            // "Content-Type": "application/json"
        },
        body: formData
    })
}