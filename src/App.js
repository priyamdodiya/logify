import './App.css';
import Router from './router/Router';
import UserProvider from './context/UserContext';
function App() {
  return (
    <div>
      <UserProvider>
        <Router/>
      </UserProvider>
    </div>
  );
}

export default App;