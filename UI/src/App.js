import './App.css';
import Header from './component/header/Header';
import Footer from '../src/component/footer';
import Home from './container/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
