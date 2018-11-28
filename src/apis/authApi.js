import * as authActions from '../actions/auth';

export const fetchToken = (username, password) => {
  return async dispatch => {
    try {
      let response = await fetch('http://localhost:8000/api-token-auth/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username,
			password,
		}),
	});
      let json = await response.json();
      dispatch(authActions.tokenObtained());
      console.log(json);
    } catch (error) {
    }
  };
};

export default fetchToken;