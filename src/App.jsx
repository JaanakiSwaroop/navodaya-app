import ListGroup from "./components/ListGroup";
import SlideShow from "./components/SlideShow";
import Info from "./components/Info";
import Location from "./components/Location";

function App() {
  return (
    <>
      <ListGroup />
      <div className="container mt-5 pt-5">
        <SlideShow />
        <Info />
        <Location />
      </div>
    </>
  );
}

export default App;
