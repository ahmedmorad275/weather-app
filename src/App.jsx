import Header from './Components/Header';
import Search from './Components/Search';
import Card from './Components/Card';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br flex items-center flex-col justify-center from-(--background) via-(--primary)/5 to-(--secondary)/10 mx-auto p-2.5 md:p-10 text-center">
      <Header />
      <Search />
      <Card />
    </div>
  );
}

export default App;
