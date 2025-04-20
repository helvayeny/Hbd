import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Halaman from "./Halaman";
import Halamandua from "./Halamandua";
import HalamanTiga from "./HalamanTiga";
import HalamanEmpat from "./HalamanEmpat";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/haha" element={<Halaman />} />
                <Route path="/haha2" element={<Halamandua />} />
                <Route path="/haha3" element={<HalamanTiga />} />
                <Route path="/foto" element={<HalamanEmpat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
