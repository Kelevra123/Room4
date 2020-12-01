import MainPage from "./pages/MainPage"
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import SongReducer from './store/reducers/mainReducer'
import ArtistPage from "./pages/ArtistPage"
import SearchPage from './pages/SearchPage'


const rootReducer = combineReducers({
  song: SongReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact  component={MainPage}/>
          <Route path='/artist' component={ArtistPage}/>
          <Route path='/search/' component={SearchPage}/>
        </Switch> 
      </Router>  
    </Provider>
  );
}

export default App;
