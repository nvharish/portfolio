import Header from "./components/Header";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <div id="page">
        <Header />
      </div>
    </>
  );
}

export default App;
