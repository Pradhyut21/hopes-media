'use client';

import { motion } from 'framer-motion';

const podcasts = [
  {
    id: 1,
    title: 'Nature Walk for Focus',
    host: 'Calm Voices Collective',
    duration: '12:34',
    date: 'Nov 15, 2025',
    description: 'Guided reflections with a relaxing outdoor scene to help you reset and refocus.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Gentle River Reflections',
    host: 'Riverstone Studio',
    duration: '18:20',
    date: 'Nov 10, 2025',
    description: 'Slow scenes of water and nature paired with prompts for slowing down.',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'Flower Mindfulness Session',
    host: 'Bloom Mindful Lab',
    duration: '21:05',
    date: 'Nov 5, 2025',
    description: 'A short mindfulness session using close-up nature visuals to calm your mind.',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
];

export default function Podcasts() {

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
              <div className="aspect-video w-full bg-black">
                <video
                  className="w-full h-full object-cover"
                  src={podcast.videoUrl}
                  controls
                />
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
