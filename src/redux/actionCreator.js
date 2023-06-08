import {
  DELETE_APPLICANTS_LIST,
  FILTER_APPLICANTS_BY_HOUSE,
  GET_APPLICANTS_LIST,
  LOADING_TOGGLE,
} from "./actions";

export const getApplicantsList = () => (dispatch) => {
  fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      dispatch(loadingToggle(false));

      return dispatch({
        type: GET_APPLICANTS_LIST,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch(loadingToggle(true));
      console.error(error);
    });
};

export const loadingToggle = (status) => {
  return {
    type: LOADING_TOGGLE,
    payload: status,
  };
};

export const deleteApplicantsList = () => {
  return {
    type: DELETE_APPLICANTS_LIST,
    payload: []
  };
};

export const filterApplicantsByHouse= (house) => (dispatch) => {
  fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      dispatch(loadingToggle(false));

      return dispatch({
        type: FILTER_APPLICANTS_BY_HOUSE,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch(loadingToggle(true));
      console.error(error);
    });
};