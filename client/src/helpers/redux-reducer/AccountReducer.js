import * as actions from "../action-list";
import produce from "immer";

const InitialState = {
  account: [],
  loginAcc: [],
  isLogin: null,
  user_info: [],
  user_artwork: [],
  user_getartworkbyid: [],
};

export const AccountReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actions.CREATE_ACCOUNT:
      return produce(state, (draft) => {
        draft.account = action.payload;
      });
    case actions.ACCOUNT_LOGIN:
      return produce(state, (draft) => {
        draft.loginAcc = action.payload;
      });
    case actions.IS_LOGIN:
      return produce(state, (draft) => {
        draft.isLogin = action.payload;
      });
    case actions.FETCH_INFO:
      return produce(state, (draft) => {
        draft.user_info = action.payload;
      });
    case actions.UPLOAD_ARTWORK:
      return produce(state, (draft) => {
        draft.user_artwork = action.payload;
      });
    case actions.GET_ARTWORK:
      return produce(state, (draft) => {
        draft.user_artwork = action.payload;
      });
    case actions.GET_ARTWORKBYID:
      return produce(state, (draft) => {
        draft.user_getartworkbyid = action.payload;
      });
    default:
      return state;
  }
};
