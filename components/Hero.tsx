export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to HoPES Media</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Discover insightful podcasts and articles from the HoPES community.
          Stay updated with the latest trends, stories, and discussions.
        </p>
        <div className="space-x-4">
          <a 
            href="#podcasts" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Podcasts
          </a>
          <a 
            href="#articles" 
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block"
          >
            Read Articles
          </a>
        </div>
      </div>
    </div>
  );
}
