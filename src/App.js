import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="container mt-5 px-3">
        <h3>5TH SEM SGPA CALCULATOR</h3>
        <Calculator/>
        <footer style={{paddingLeft:"300px"}}>
          Made with &hearts; by Anjishnu Kumar
        </footer>
    </div>
  );
}

export default App;
