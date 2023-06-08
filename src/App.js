import { Provider } from 'react-redux';

import store from './redux/store'
import Landing from './components/Pages/Landing/Landing';
import { useEffect } from 'react';
import { getApplicantsList } from './redux/actionCreator';

function App() {

  useEffect(()=>{
    store.dispatch(getApplicantsList())
  },[])

  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;

