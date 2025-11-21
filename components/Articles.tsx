'use client';

import { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: 'The Art of Modern Web Development',
    author: 'Sarah Chen',
    date: 'Nov 14, 2025',
    readTime: '8 min read',
    excerpt: 'Exploring the latest trends and best practices in modern web development frameworks and tools.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    content: 'Full article content would go here...',
    tags: ['Web Dev', 'Frameworks', 'Best Practices']
  },
  {
    id: 2,
    title: 'Sustainable Design Principles',
    author: 'Michael Brown',
    date: 'Nov 9, 2025',
    readTime: '6 min read',
    excerpt: 'How sustainable design is shaping the future of product development and user experience.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1533090161767-a6bede912b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    content: 'Full article content would go here...',
    tags: ['Sustainability', 'UI/UX', 'Eco-friendly']
  },
  {
    id: 3,
    title: 'The Future of Remote Work',
    author: 'Emily Wilson',
    date: 'Nov 4, 2025',
    readTime: '10 min read',
    excerpt: 'Analyzing how remote work is transforming company cultures and productivity metrics.',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1522071820081-009c01201c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    content: 'Full article content would go here...',
    tags: ['Remote Work', 'Productivity', 'Company Culture']
  },
];

export default function Articles() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Technology': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
      'Design': 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
      'Business': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <section id="articles" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Articles
          <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div 
              key={article.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                expandedArticle === article.id ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:flex h-full">
                <div className={`${expandedArticle === article.id ? 'md:w-1/3' : 'w-full'} h-64 md:h-auto`}>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className={`p-6 ${expandedArticle === article.id ? 'md:w-2/3' : 'w-full'}`}>
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-2 ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {expandedArticle === article.id ? article.content : article.excerpt}
                  </p>
                  
                  {expandedArticle === article.id && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 overflow-hidden">
                        <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Written by</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {article.author}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleExpand(article.id)}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      {expandedArticle === article.id ? 'Read Less' : 'Read More'}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
