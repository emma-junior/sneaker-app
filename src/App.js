import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-[100%] lg:py-16 ">
      <div className="bg-white shadow-lg shadow-black-500/50 lg:w-4/5 w-5/5 py-5 px-8 lg:px-16 mx-auto">
        <Navbar />
        <hr />
        <Content />
      </div>
    </div>
  );
}

export default App;
