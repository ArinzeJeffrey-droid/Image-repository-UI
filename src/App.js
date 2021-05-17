import './App.css';
import CardContainer from './components/img-card/CardContainer';
import ConfirmationModal from './components/modals/ConfirmationModal';
import FormModal from './components/modals/FormModal';
import ImageUploadModal from './components/modals/ImageUploadModal';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="container p-0">
      <Navbar/>
      <CardContainer/>
      <FormModal/>
      <ConfirmationModal/>
      <ImageUploadModal/>
    </div>
  );
}

export default App;
