import React, { useState } from "react";
import { Gift, PartyPopper, Image as ImageIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [showPhoto, setShowPhoto] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/haha')
  };

  const togglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 px-4 py-10 relative overflow-hidden">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 text-center transition-all duration-500 hover:shadow-purple-300 z-10">
        <div className="mb-6 relative">
          <img
            src="/image/img1.jpg"
            alt="Birthday Celebration"
            className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-md"
          />
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
            <PartyPopper size={44} className="text-pink-500 animate-bounce bg-white p-2 rounded-full shadow-md" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-purple-700 mt-10 mb-4">Selamat Ulang Tahun!</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          Semoga segala harapan dan impianmu segera tercapai. Tetap menjadi pribadi yang luar biasa dan menginspirasi! 🥳
        </p>
        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={handleClick}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl transition transform duration-300 ease-in-out flex items-center justify-center shadow-md text-lg font-medium"
          >
            <Gift className="mr-2" size={22} /> Kirim Doa
          </button>
          <button
            onClick={togglePhoto}
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition transform duration-300 ease-in-out flex items-center justify-center shadow-md text-base"
          >
            <ImageIcon className="mr-2" size={20} /> {showPhoto ? "Tutup Foto" : "Lihat Kejutan"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ originX: 0.5 }}
            >
              <img
                src="/image/img2.JPG"
                alt="Surprise Fullscreen"
                className="w-full h-full object-cover"
              />
              <button
                onClick={togglePhoto}
                className="absolute top-5 right-5 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
