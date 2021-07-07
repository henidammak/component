import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import { FullName } from './Components/Profile/FullName';
import  Adresse  from './Components/Profile/Adresse';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
