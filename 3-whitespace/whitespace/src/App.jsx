import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/gallery/Gallery'
import Info from './components/info/Info'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gallery />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
