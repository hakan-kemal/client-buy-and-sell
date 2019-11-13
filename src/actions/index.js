import superagent from "superagent";

export const ADS_FETCHED = "ADS_FETCHED";
export const AD_FETCHED = "AD_FETCHED";
export const AD_CREATE = "AD_CREATE";
export const AD_UPDATE = "AD_UPDATE";
export const AD_DELETE = "AD_DELETE";

const baseUrl = "http://localhost:4000";

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

const adFetched = ad => ({
  type: AD_FETCHED,
  ad
});

const adCreate = ad => ({
  type: AD_CREATE,
  ad
});

const adUpdate = ad => ({
  type: AD_UPDATE,
  ad
});

const adDelete = ad => ({
  type: AD_DELETE,
  ad
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

export const createAd = data => dispatch => {
  superagent
    .post(`${baseUrl}/advertisements`)
    .send(data)
    .then(response => {
      dispatch(adCreate(response.body));
    })
    .catch(console.error);
};

export const updateAd = (id, data) => dispatch => {
  superagent
    .patch(`${baseUrl}/advertisements/${id}`)
    .send(data)
    .then(response => {
      dispatch(adUpdate(response.body));
    })
    .catch(console.error);
};

export const deleteAd = ad => dispatch => {
  superagent
    .delete(`${baseUrl}/advertisements/${ad.id}`)
    .then(response => {
      if (response.ok) {
        // passing the original event object because the api
        // returns {} instead of the deleted record
        dispatch(adDelete(ad));
      }
    })
    .catch(console.error);
};
