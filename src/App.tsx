import Clock from "./Components/Clock.tsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-green-500">MVP</h1>
      <Clock/>
    </div>
  );
}

export default App;
