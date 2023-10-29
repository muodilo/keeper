import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import EventNoteIcon from '@mui/icons-material/EventNote';
import KepperForm from './components/KepperForm';
import { ItemsProvider } from './context/AllItemsContext'
import DisplayItems from './components/DisplayItems';

function App() {
  return (
    <div className="App container-lg">

      <header className="App-header">
        <EventNoteIcon />
        Kepper App 
        <EventNoteIcon />
      </header>
      <ItemsProvider>

        <KepperForm />
        <DisplayItems />
        
        <Footer/>

      </ItemsProvider>
      

      
    </div>
  );
}

export default App;
