import { Provider } from 'react-redux';
import './App.css';
import Home from './screens/Home/Home';
import { Store } from './screens/redux/store';

function App() {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
}

export default App;
