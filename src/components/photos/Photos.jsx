import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../navigation/Navigation';
import img1 from '../uploads/c0.jpg'
import img2 from '../uploads/c1.jpg'
import img3 from '../uploads/c2.jpg'
import img4 from '../uploads/c3.jpg'
import img5 from '../uploads/c4.jpg'
import img6 from '../uploads/c5.jpg'
import img7 from '../uploads/c6.jpg'
import img8 from '../uploads/c7.jpg'
import img9 from '../uploads/c8.jpg'
import img10 from '../uploads/c9.jpg'
import img11 from '../uploads/c10.jpg'
import img12 from '../uploads/c11.jpg'
import img13 from '../uploads/c12.jpg'
import img14 from '../uploads/c13.jpg'
import img15 from '../uploads/c14.jpg'
import img16 from '../uploads/c15.jpg'
import img17 from '../uploads/c16.jpg'
import img18 from '../uploads/j1.jpg'
import img19 from '../uploads/j2.jpg'
import img20 from '../uploads/j3.jpg'
import img21 from '../uploads/j4.jpg'
import img22 from '../uploads/j5.jpg'
import img23 from '../uploads/j6.jpg'
import img24 from '../uploads/j7.jpg'
import img25 from '../uploads/j8.jpg'
import img26 from '../uploads/j9.jpg'
import img27 from '../uploads/j10.jpg'
import img28 from '../uploads/j11.jpg'
import img29 from '../uploads/j12.jpg'
import img30 from '../uploads/j13.jpg'
import img31 from '../uploads/j14.jpg'

const Photos = () => {
  // Sample photo data with dates
  const photoData = [
    { id: 1, url: img1, date: '2024-07-20', caption: 'You!!!' },
    { id: 2, url: img2, date: '2025-01-19', caption: 'Looking Cutieeee' },
    { id: 3, url: img3, date: '2024-06-07', caption: 'Us at Dominos' },
    { id: 4, url: img4, date: '2024-06-07', caption: 'Our Room' },
    { id: 5, url: img5, date: '2024-06-07', caption: 'Our Room' },
    { id: 6, url: img6, date: '2025-01-13', caption: 'Our Second Meetup' },
    { id: 7, url: img7, date: '2025-01-13', caption: 'Our Second Meetup' },
    { id: 8, url: img8, date: '2025-04-20', caption: 'Together Forever' },
    // { id: 9, url: img9, date: '2025-04-20', caption: 'Together Forever' },
    { id: 10, url: img10, date: '2025-04-20', caption: 'Together Forever' },
    { id: 11, url: img11, date: '2025-04-20', caption: 'Together Forever' },
    { id: 12, url: img12, date: '2025-04-20', caption: 'Together Forever' },
    { id: 13, url: img13, date: '2025-04-20', caption: 'Together Forever' },
    { id: 14, url: img14, date: '2025-04-20', caption: 'Together Forever' },
    { id: 15, url: img15, date: '2025-04-20', caption: 'Together Forever' },
    { id: 16, url: img16, date: '2025-04-20', caption: 'Together Forever' },
    { id: 17, url: img17, date: '2025-04-20', caption: 'Together Forever' },
    { id: 18, url: img18, date: '2025-04-19', caption: 'TEAM' },
    { id: 19, url: img19, date: '2025-04-19', caption: 'TEAM' },
    { id: 20, url: img20, date: '2025-04-19', caption: 'TEAM' },
    { id: 21, url: img21, date: '2025-04-19', caption: 'TEAM' },
    { id: 22, url: img22, date: '2025-04-19', caption: 'TEAM' },
    { id: 23, url: img23, date: '2025-04-19', caption: 'TEAM' },
    { id: 24, url: img24, date: '2025-04-19', caption: 'TEAM' },
    { id: 25, url: img25, date: '2025-04-19', caption: 'TEAM' },
    { id: 26, url: img26, date: '2025-04-19', caption: 'TEAM' },
    { id: 27, url: img27, date: '2025-04-19', caption: 'TEAM' },
    { id: 28, url: img28, date: '2025-04-19', caption: 'TEAM' },
    { id: 29, url: img29, date: '2025-04-19', caption: 'TEAM' },
    { id: 30, url: img30, date: '2025-04-19', caption: 'TEAM' },
    { id: 31, url: img31, date: '2026-01-24', caption: 'Our Second Date'}
  ];

  const [selectedDate, setSelectedDate] = useState('random');
  const [randomDates, setRandomDates] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  // Get unique dates and shuffle them
  const uniqueDates = [...new Set(photoData.map(photo => photo.date))];
  
  useEffect(() => {
    if (selectedDate === 'random') {
      // Pick 2 random dates
      const shuffled = [...uniqueDates].sort(() => 0.5 - Math.random());
      setRandomDates(shuffled.slice(0, 2));
    }
  }, [selectedDate]);

  // Filter photos based on selection
  const filteredPhotos = selectedDate === 'random' 
    ? photoData.filter(photo => randomDates.includes(photo.date))
    : selectedDate === 'all' 
    ? photoData 
    : photoData.filter(photo => photo.date === selectedDate);

  return (
    <>
    < Navigation />
    <div className="min-h-screen bg-lavender-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-3xl text-lavender-900 mb-8 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          >
          Memory Collection
        </motion.h1>

        {/* Date Selector */}
        <motion.div className="mb-8">
          <label htmlFor="date-select" className="block text-lavender-700 mb-2">
            Choose a Date:
          </label>
          <select
            id="date-select"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-3 rounded-lg border border-lavender-300 bg-white w-full"
            >
            <option value="random">🎲 Surprise Me!</option>
            <option value="all">📅 All Photos</option>
            {uniqueDates.map(date => (
                <option key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Collection Header */}
        {selectedDate === 'random' && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-lavender-700"
            >
            Showing memories from {randomDates.length} random days
          </motion.div>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPhotos.map(photo => (
              <motion.div
              key={photo.id}
              layout
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
              >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                  />
              </div>
              <div className="p-4">
                <p className="text-lavender-800 font-medium">{photo.caption}</p>
                <p className="text-lavender-500 text-sm">
                  {new Date(photo.date).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-lavender-600"
            >
            No photos found for this selection
          </motion.div>
        )}

        {/* Photo Modal */}
        <AnimatePresence>
          {selectedPhoto && (
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedPhoto(null)}
              >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                >
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full max-h-[70vh] object-contain"
                  />
                <div className="p-4">
                  <h3 className="text-xl text-lavender-900 font-medium">
                    {selectedPhoto.caption}
                  </h3>
                  <p className="text-lavender-600">
                    {new Date(selectedPhoto.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default Photos;