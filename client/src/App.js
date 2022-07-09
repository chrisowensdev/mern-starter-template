import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './pages/AppLayout';

import { theme, resources, sounds } from './settings';

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
