import "./App.scss";
import HomePage from "./pages/page/HomePage/HomePage";
import UploadPage from "./pages/page/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header element={<Header />} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uploadpage" element={<UploadPage />} />
        <Route path="/videoplayer/:videoplayerid" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
