import { ADS_FETCHED } from "../actions/index";
import { AD_FETCHED } from "../actions/index";
// import { AD_CREATE_SUCCESS } from "../actions/index";
// import { AD_UPDATE_SUCCESS } from "../actions/index";
// import { AD_DELETE_SUCCESS } from "../actions/index";

export default (state = null, action) => {
  switch (action.type) {
    case ADS_FETCHED:
      return (state = action.ads);
    case AD_FETCHED:
      return [...state, { ...action.payload }];
    // case AD_CREATE_SUCCESS:
    //   return (state = action.ad);
    // case AD_UPDATE_SUCCESS:
    //   return (state = action.ad);
    // case AD_DELETE_SUCCESS:
    //   return (state = action.ad);
    default:
      return state;
  }
};
