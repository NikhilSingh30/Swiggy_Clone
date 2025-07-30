
const About = () => {
  return (
    <div className="px-6 py-12 md:px-20 lg:px-40 bg-green-50 min-h-screen text-gray-800">
     
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
          About Swiggy Clone 🥗🚴‍♂️
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          A fast and feature-rich clone of Swiggy, built to deliver delicious food at lightning speed!
        </p>
      </div>

     
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">🌱 Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To provide users with a seamless food ordering experience with a beautiful UI, real-time menus,
          and smooth navigation. This project is built with <strong>React</strong>, styled using <strong>Tailwind CSS</strong>,
          and powered by <strong>Swiggy’s public API</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-green-200 transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">🧱 Tech Stack</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>React Router DOM</li>
            <li>Swiggy API integration</li>
            <li>Custom hooks (e.g., <code>useOnline</code>)</li>
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-green-200 transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">✨ Features</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Restaurant listing with dynamic data</li>
            <li>Menu page with live item list</li>
            <li>Shimmer effect for loading UI</li>
            <li>Offline detection with emoji indicators</li>
            
          </ul>
        </div>
      </div>

    
      <div className="text-center mt-20 text-sm text-gray-500">
        Made with 💚 by Nikhil | This is a demo project and not affiliated with Swiggy
      </div>
    </div>
  );
};

export default About;