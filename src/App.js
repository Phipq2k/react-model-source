import logo from './logo.svg';
import './App.css';
import { ROUTERS } from './router';
import { Route } from 'react-router-dom';
import AuthRouter from './components/AuthRouter/AuthRouter';

function App() {
  return (
    <AuthRouter router={ROUTERS}>
      {(routes = []) => routes.map((item,key) => <Route key={key} path={item.path} element={item.element}/>)}
    </AuthRouter>
  );
}

export default App;
