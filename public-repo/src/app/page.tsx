"use client";

// Example main page - anonymized for public repository

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1012] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">MoonFun Launchpad</h1>
        <p className="text-gray-400 mb-8">
          Example main page for public repository
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#18191c]/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-400">Example component</p>
          </div>
          
          <div className="bg-[#18191c]/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-400">Example component</p>
          </div>
          
          <div className="bg-[#18191c]/50 backdrop-blur-md rounded-xl border border-gray-800/50 p-6">
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-400">Example component</p>
          </div>
        </div>
      </div>
    </div>
  );
}
