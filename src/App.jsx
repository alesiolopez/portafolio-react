import ProjCard from "./components/ProjCard";
import PortPresentation from "./components/PortPresentation";
import PortContact from "./components/PortContact";
import './index.css'

function App() {
  return (
    <main className="">
      <div className="body">
        <PortPresentation />
        <ProjCard />
        <PortContact />
      </div>
    </main>
  );
}

export default App;
