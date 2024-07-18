import React from 'react';

const Twittercard = ({ data }:any) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans">
      <header className="flex justify-between items-center p-6">
        <nav>
          <ul className="flex space-x-6">
            <li>Features</li>
            <li>Method</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Company</li>
          </ul>
        </nav>
        <div>
          <button className="px-4 py-2 text-sm">Log in</button>
          <button className="px-4 py-2 bg-indigo-600 rounded-md text-sm ml-4">Sign up</button>
        </div>
      </header>
      
      <main className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Linear is a better way to build products</h1>
        <p className="text-xl mb-2">Meet the new standard for modern software development.</p>
        <p className="text-xl mb-8">Streamline issues, sprints, and product roadmaps.</p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Get started
        </button>
      </main>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {data.map((item:any, index:any) => (
          <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Twittercard;