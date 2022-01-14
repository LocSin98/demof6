import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map( (route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <route.component {...props} />
                  )}
                />
              )
            )
          })
        }
      </Switch>
    </Router>
  );
}

export default App;
