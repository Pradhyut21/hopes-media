'use client';

import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: 'Understanding Mental Health Basics',
    description:
      'A clear introduction to what mental health is, why it matters, and how to start taking care of it.',
    // You can replace this with any YouTube video ID you prefer later
    youtubeId: 'jtiM5L2W2gQ',
  },
  {
    id: 2,
    title: 'Mindfulness for Beginners',
    description:
      'Simple breathing and mindfulness exercises you can use every day to reduce stress.',
    youtubeId: 'ZToicYcHIOU',
  },
  {
    id: 3,
    title: 'Building Healthy Study Habits',
    description:
      'Tips on how to study effectively without burning out, focusing on balance and wellbeing.',
    youtubeId: 'cpkEVZgYb4c',
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Helpful Videos
          <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
