

const initialState = {
  user: '',
  isLogged: false,
  data: [],
  repos:[],
  follower:[],
  following:[]
}

export const ReducerTypes = {
	  CHANGE_USER: 'CHANGE_USER',
    LOGOUT:'LOGOUT',
    GET_REPO:'GET_REPO',
    GET_FOLLOWERS: 'GET_FOLLOWERS',
    GET_FOLLOWING:'GET_FOLLOWING'
  };



export const ReducerActions = {
	logout() {
		return (dispatch, getState) => {
			const state = getState().reducer;

			dispatch({
				type: ReducerTypes.LOGOUT,
        info: "Change the current user",
				payload: '',
			});
		};
	},
  changeUser(user,data) {
    return (dispatch, getState) => {
		//	const state = getState().reducer;
			dispatch({
				type: ReducerTypes.CHANGE_USER,
        info: "Logout the current user",
				payload: user,
        data:data
			});
		};
  },
  changeRepo(repos) {
    return (dispatch, getState) => {
		//	const state = getState().reducer;
			dispatch({
				type: ReducerTypes.GET_REPO,
        repos:repos
			});
		};
  },
   changeFollower(follower){
    return (dispatch, getState) => {
			//const state = getState().reducer;
			dispatch({
				type: ReducerTypes.GET_FOLLOWERS,
        follower:follower
			});
		};
  }, 
  changeFollowing(following){
    return (dispatch, getState) => {
			//const state = getState().reducer;
			dispatch({
				type: ReducerTypes.GET_FOLLOWING,
        following:following
			});
		};
  }, 

}; 

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ReducerTypes.CHANGE_USER:
			return { ...state, user: action.payload,data:action.data,isLogged: true, };
    
      case ReducerTypes.LOGOUT:
        return {
                ...state,
                user: '',
                data: [],
                repos:[],
                follower:[],
                isLogged: false,
                following:[]
                }
      case ReducerTypes.GET_REPO:
        return {
          ...state,
         repos: action.repos
        }
      case ReducerTypes.GET_REPO:
        return {
          ...state,
         repos: action.repos
        }
     case ReducerTypes.GET_FOLLOWERS:
      return {
        ...state,
        follower: action.follower
      } 
      case ReducerTypes.GET_FOLLOWING:
      return {
        ...state,
        following: action.following
      }
		default:
			return state;
	}
}