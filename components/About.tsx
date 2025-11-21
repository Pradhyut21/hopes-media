export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About HoPES Media</h2>
          <p className="text-lg text-gray-600 mb-8">
            HoPES Media is a platform dedicated to sharing knowledge, stories, and insights through podcasts and articles. 
            We bring together thought leaders, creators, and enthusiasts to explore diverse topics that matter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-3">50+</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Podcast Episodes</h3>
              <p className="text-gray-600">Hours of engaging content from industry experts</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-3">100+</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Articles</h3>
              <p className="text-gray-600">In-depth articles on various topics</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl font-bold text-indigo-600 mb-3">10K+</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Monthly Listeners</h3>
              <p className="text-gray-600">Growing community of curious minds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
