// import { ADS_FETCHED } from "../actions/index";
import { AD_FETCHED } from "../actions/index";
import { AD_CREATE } from "../actions/index";
import { AD_UPDATE } from "../actions/index";
import { AD_DELETE } from "../actions/index";

export default (state = null, action) => {
  switch (action.type) {
    // case ADS_FETCHED:
    //   return (state = action.ads);
    case AD_FETCHED:
      return (state = action.ad);
    case AD_CREATE:
      return (state = action.ad);
    case AD_UPDATE:
      return (state = action.ad);
    case AD_DELETE:
      return state.filter(ad => ad.id !== action.id);
    default:
      return state;
  }
};
