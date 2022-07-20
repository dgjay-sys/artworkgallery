import * as actions from "../action-list";
import Axios from "axios";

export const createAcc = (username, pass, userType) => async (dispatch) => {
  Axios.post("http://localhost:8080/newaccount", {
    user: username,
    password: pass,
    usertype: userType,
  }).then((response) => {
    dispatch({
      type: actions.CREATE_ACCOUNT,
      payload: response.data,
    });
  });
};

export const createInfo = (uid, uname, uage, uemail) => async (dispatch) => {
  Axios.post("http://localhost:8080/newinformation", {
    uID: uid,
    uname: uname,
    uage: uage,
    uemail: uemail,
  }).then((response) => {
    dispatch({
      type: actions.CREATE_INFOS,
      payload: response.data,
    });
  });
};

export const accountLogin = (username, password) => async (dispatch) => {
  Axios.post("http://localhost:8080/getdata", {
    user: username,
    password: password,
  })
    .then((response) => {
      if (response.data) {
        alert("Accesss Complete");
        dispatch({
          type: actions.IS_LOGIN,
          payload: true,
        });
        dispatch({
          type: actions.ACCOUNT_LOGIN,
          payload: response.data,
        });
      } else if(response.data === null) {
        alert("Accesss Denied");
        window.location.href = "/"
        dispatch(
          {
            type: actions.IS_LOGIN,
            payload: false,
          },
        );
       
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getInfo = (uid) => async (dispatch) => {
  Axios.post("http://localhost:8080/getinfo", {
    uID: uid,
  }).then((response) => {
    dispatch({
      type: actions.FETCH_INFO,
      payload: response.data,
    });
  });
};

export const updateN = (id, cname, nname) => async (dispatch) => {
  Axios.post("http://localhost:8080/updatename", {
    id,
    cname,
    nname,
  })
    .then((response) => {
      dispatch({
        type: actions.UPDATE_NAME,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateP = (id, cpass, npass) => async (dispatch) => {
  console.log(id);
  console.log(cpass);
  console.log(npass);
  Axios.post("http://localhost:8080/updatepassword", {
    id,
    cpass,
    npass,
  })
    .then((response) => {
      dispatch({
        type: actions.UPDATE_PASSWORD,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateE = (id, cemail, nemail) => async (dispatch) => {
  Axios.post("http://localhost:8080/updateemail", {
    id,
    cemail,
    nemail,
  })
    .then((response) => {
      dispatch({
        type: actions.UPDATE_EMAIL,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const uploadProfile = (data) => async (dispatch) => {
  Axios.post("http://localhost:8080/uploadprofile", data)
    .then((response) => {
      dispatch({
        type: actions.UPLOAD_PROFILE,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const uploadArtwork = (data) => async (dispatch) => {
  Axios.post("http://localhost:8080/uploadartwork", data).then((response) => {
    dispatch({
      type: actions.UPLOAD_ARTWORK,
      payload: response.data,
    });
  });
};

export const getArtwork = () => async (dispatch) => {
  Axios.get("http://localhost:8080/getartwork").then((response) => {
    dispatch({
      type: actions.GET_ARTWORK,
      payload: response.data,
    });
  });
};

export const getArtworkById = (id) => async (dispatch) => {
  Axios.post("http://localhost:8080/getartworkbyid", {
    id,
  }).then((response) => {
    dispatch({
      type: actions.GET_ARTWORKBYID,
      payload: response.data,
    });
  });
};
