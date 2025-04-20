import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Halamandua() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/haha3');
    };

    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-amber-600 to-red-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >   <div className='mt-70 ml-10'>
                <button
                    className="hover:cursor-pointer px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 transition duration-300"
                    onClick={handleClick}
                >
                    Ini
                </button>
            </div>
        </motion.div>
    );
}

export default Halamandua;
