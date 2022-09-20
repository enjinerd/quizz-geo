import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "pages/public";
import { Login, Register } from "pages/public/auth";
import Private from "./Private";
import Quiz from "pages/private/Quiz";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
