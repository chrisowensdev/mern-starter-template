import { Switch, Route } from 'react-router-dom';

import Home from './Home';

const styles = () => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 'auto',
  },
  centered: {
    flex: 1,
    paddingTop: '20px',
    paddingBottom: '10px',
  },
});

const AppLayout = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default AppLayout;
