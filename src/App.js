import './App.css';
import Header from './component/Header';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <Header className="header_app" text="This is React Testing Demo"/>
        <Button className="button_app" text="You have clicked the button"/>
    </div>
  );
}

export default App;
