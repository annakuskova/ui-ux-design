import { Form } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Task1 } from "./components/task1";
import { Task2 } from "./components/task2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="/" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
