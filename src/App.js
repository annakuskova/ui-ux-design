import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Task1 } from "./components/task1";
import { Task2 } from "./components/task2";
import { Task3 } from "./components/task3";
import { Task4 } from "./components/task4";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
