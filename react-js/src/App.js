import './App.css';
import Introduction from './components/Introduction'
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Profile />
      <Introduction name="dreamerdream" />
      <Introduction name="gakure" />
    </>
  );
}

export default App;
