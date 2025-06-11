const initialState = {
    loading: false, // ✅ Profile data ke liye loading state
    profileImageLoading: false, // ✅ Profile image ke liye separate loading state
    profile: null,
    profileImage: null,
    error: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PROFILE_FETCH_START":
      case "PROFILE_UPDATE_START":
        return { ...state, loading: true, error: null }; // ✅ Profile ke liye loading
  
      case "PROFILE_IMAGE_UPDATE_START":
        return { ...state, profileImageLoading: true, error: null }; // ✅ Profile image ke liye loading
  
      case "PROFILE_FETCH_SUCCESS":
          return { ...state, loading: false, profile: action.payload, profileImage : action.payload.data.profileImage || state.profileImage };
      case "PROFILE_UPDATE_SUCCESS":
        return { ...state, loading: false, profile: action.payload};
  
        case "PROFILE_IMAGE_UPDATE_SUCCESS":
            console.log("✅ PROFILE_IMAGE_UPDATE_SUCCESS Reducer Updated, New Image:", action.payload);
            return { 
              ...state, 
              profileImageLoading: false, 
              profileImage: action.payload 
            };
          
      case "PROFILE_FETCH_ERROR":
      case "PROFILE_UPDATE_ERROR":
        return { ...state, loading: false, error: action.error };
  
      case "PROFILE_IMAGE_UPDATE_ERROR":
        return { ...state, profileImageLoading: false, error: action.error };
  
      default:
        return state;
    }
  };
  
  export default profileReducer;