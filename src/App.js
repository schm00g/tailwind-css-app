import './App.css';
import Notification from './components/Notification';
import Card from './components/Card';
import Button from './components/Button';
import ProfileList from './components/ProfileList';
import Form from './components/Form';
import NewProjectButton from './components/NewProjectButton';
import Item from './components/Item';
import DarkMode from './components/DarkMode';
import Contributors from './components/Contributors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notification />
        <Card />
        <Button />
        <ProfileList />
        <Form />
        <NewProjectButton />
        <Item />
        <DarkMode />
        <Contributors />
      </header>
    </div>
  );
}

export default App;
