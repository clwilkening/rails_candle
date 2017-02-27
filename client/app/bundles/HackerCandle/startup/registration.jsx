import ReactOnRails from 'react-on-rails';

import HackerCandle from '../components/HackerCandle';
import Home from '../components/Home';

// This is how react_on_rails can see the HackerCandle in the browser.
ReactOnRails.register({
  HackerCandle,
  Home
});
