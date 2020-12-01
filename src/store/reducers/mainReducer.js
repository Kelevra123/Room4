import { GET_ALL, GET_ONE } from "../actions/songActions"

const initialState = {
   songs: [],
   artist: {name: '', about: 'Opss', tags: [], img: ''}
}
const SongReducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_ALL:
    return {
      ...state,
      songs: action.topTracks
    }
    case GET_ONE:
      return {
        ...state,
        artist: action.artist 
      }

  default:
    return state
  }
}

export default SongReducer;
