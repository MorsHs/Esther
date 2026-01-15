import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import UploadFile from "./pages/upload/UploadFile";
import Records from "./pages/record/Records";
import ChildRecords from "./pages/record/ChildRecords";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Navigate to="/upload" />} />
          <Route path="/upload" element={<UploadFile />} />
          <Route path="/records" element={<Records />} />
          <Route path="/records/child-records" element={<ChildRecords />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
