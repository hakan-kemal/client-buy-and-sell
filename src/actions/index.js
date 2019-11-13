import superagent from "superagent";

export const ADS_FETCHED = "ADS_FETCHED";
export const AD_FETCHED = "AD_FETCHED";
// export const USERS_FETCHED = "USERS_FETCHED";

const baseUrl = "http://localhost:4000";

// export const SET_ADS = "SET_ADS";
// export const SET_USERS = "SET_USERS";

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

const adFetched = ad => ({
  type: AD_FETCHED,
  event
});

export const loadAds = () => (dispatch, getState) => {
  // when the state already contains advertisements, we don't fetch them again
  if (getState().ads) return;

  // a GET /advertisements request
  superagent(`${baseUrl}/advertisements`)
    .then(response => {
      // dispatch an ADS_FETCHED action that contains the advertisements
      dispatch(adsFetched(response.body));
    })
    .catch(console.error);
};

export const loadAd = id => dispatch => {
  superagent(`${baseUrl}/advertisements/${id}`)
    .then(response => {
      dispatch(adFetched(response.body));
    })
    .catch(console.error);
};

// export function setAds (ads) {
//   return {
//     type: "SET_ADS",
//     payload: ads
//   };
// }

// export function setUsers (users) {
//   return {
//     type: "SET_USERS",
//     payload: users
//   };
// }
