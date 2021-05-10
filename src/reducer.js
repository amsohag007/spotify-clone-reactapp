export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //set token to null after devlopment
  // token:
  //   "BQAA6faCSLBpUWD-5nnmIzTn2xeUDx3wNf3DlPlUplMWsdtA4-l9koNnUpqlvTzOHLeOM77TzjEyNWruDQuwHziDOHcWqta6JubdfI7fOewmCaQ2Y41oEnpUMGtaKl8J5oaSqnMiuS2rHl73DLWuxS3ZhcLU11hZTIo2h5nhtRUJTQTM",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
