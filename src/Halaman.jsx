import { useNavigate } from "react-router-dom";


function Halaman() {
    const navigate = useNavigate();

const handleClick = () => {
    navigate('/haha2')
  };
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <button className=" hover:cursor-pointer px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={handleClick}>
                Pencet Ini
            </button>
        </div>
    );
}

export default Halaman;
