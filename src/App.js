import logo from './logo.svg';
import './App.css';
import Form from './components/Form.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Form/>
    </div>
  );
}

export default App;
