'use client';

import { useState } from 'react';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const podcasts = [
  {
    id: 1,
    title: 'The Future of Technology',
    host: 'Alex Johnson',
    duration: '45 min',
    date: 'Nov 15, 2025',
    description: 'Exploring the latest technological advancements and their impact on society.',
    audio: 'https://example.com/podcast1.mp3',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 2,
    title: 'Sustainable Living',
    host: 'Maria Garcia',
    duration: '38 min',
    date: 'Nov 10, 2025',
    description: 'Practical tips for living a more sustainable lifestyle in the modern world.',
    audio: 'https://example.com/podcast2.mp3',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 3,
    title: 'Mindfulness & Productivity',
    host: 'James Wilson',
    duration: '52 min',
    date: 'Nov 5, 2025',
    description: 'How mindfulness practices can significantly boost your productivity at work.',
    audio: 'https://example.com/podcast3.mp3',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  },
];

export default function Podcasts() {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const togglePlay = (id: number, audioUrl: string) => {
    if (currentPlaying === id) {
      // Pause current audio
      if (audio) {
        audio.pause();
        setCurrentPlaying(null);
        setAudio(null);
      }
    } else {
      // Stop any currently playing audio
      if (audio) {
        audio.pause();
      }
      
      // Play new audio
      const newAudio = new Audio(audioUrl);
      newAudio.play();
      setCurrentPlaying(id);
      setAudio(newAudio);
      
      // Handle when audio ends
      newAudio.onended = () => {
        setCurrentPlaying(null);
        setAudio(null);
      };
    }
  };

  return (
    <section id="podcasts" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Latest Podcasts
          <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <motion.div 
              key={podcast.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={podcast.image} 
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => togglePlay(podcast.id, podcast.audio)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  aria-label={currentPlaying === podcast.id ? 'Pause' : 'Play'}
                >
                  {currentPlaying === podcast.id ? (
                    <PauseCircleIcon className="h-16 w-16 text-white hover:text-blue-400 transition-colors" />
                  ) : (
                    <PlayCircleIcon className="h-16 w-16 text-white hover:text-blue-400 transition-colors" />
                  )}
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: currentPlaying === podcast.id ? '70%' : '0%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300 mt-1">
                    <span>{currentPlaying === podcast.id ? 'Playing' : 'Not playing'}</span>
                    <span>{podcast.duration}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {podcast.date}
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full">
                    {podcast.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {podcast.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {podcast.description}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 overflow-hidden">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {podcast.host.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Hosted by</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {podcast.host}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
