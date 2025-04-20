import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function HalamanTiga() {

        const navigate = useNavigate();
    
        const handleClick = () => {
            navigate('/foto');
        };
    return (
        <motion.div
            className="w-screen h-screen flex items-center justify-center bg-amber-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className='mb-70 mr-20'>
            <button className=" hover:cursor-pointer px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300" onClick={handleClick}>
                Ini
            </button>
            </div>
        </motion.div>
    );
}

export default HalamanTiga;
