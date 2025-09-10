import React from 'react'

function App() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex flex-col">
    {/* Header */}
    <header className="flex items-center px-6 py-4 bg-white shadow">
      <div className="flex items-center">
        <span className="bg-green-500 text-white rounded-full p-2 mr-2">
          {/* Logo icon */}
          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#22C55E" />
            <path
              d="M12 8v8m0 0l-4-4m4 4l4-4"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <span className="text-green-600 font-bold text-lg">Clean City</span>
          <span className="block text-xs text-slate-500">
            Urban Care Initiative
          </span>
        </div>
      </div>
    </header>

    {/* Main */}
    <main className="flex flex-col md:flex-row items-center justify-between px-6 pt-12 pb-8 grow">
      {/* Left Section */}
      <section className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Building <span className="text-green-600">Cleaner Cities</span> Together
        </h1>
        <p className="text-lg text-slate-700 mb-8">
          Join our community-driven initiative to make our cities cleaner, greener, and more sustainable. Report issues, volunteer for events, and track our collective progress.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition">
            Report an Issue
          </button>
          <button className="bg-white border-2 border-green-600 text-green-700 px-6 py-3 rounded shadow hover:bg-green-100 transition flex items-center gap-2">
            Join as Volunteer
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
              <path
                d="M16 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2"
                stroke="#22C55E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="6" r="3" stroke="#22C55E" strokeWidth={2} />
            </svg>
          </button>
        </div>
      </section>

      {/* Right Section - Image & Impact Card */}
      <section className="mt-10 md:mt-0 relative flex justify-center items-center w-full max-w-md">
        <div className="relative rounded-xl shadow-lg overflow-hidden w-full aspect-video flex items-center justify-center bg-white">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Handshake urban initiative"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Community Impact Card */}
        <div className="absolute left-4 bottom-4 bg-white rounded-lg shadow-lg px-5 py-3 flex flex-col items-start border border-green-100">
          <span className="flex items-center gap-2 text-sm text-green-600 font-semibold mb-0.5">
            <svg
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block"
            >
              <path d="M5 12l5 5L20 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Community Impact
          </span>
          <span className="text-xl font-bold text-slate-900">98% Satisfaction</span>
        </div>
      </section>
    </main>

    {/* Community Impact Section */}
    <section className="bg-white py-12 px-6 text-center border-t border-green-100">
      <h2 className="text-3xl font-bold mb-3">Our Community Impact</h2>
      <p className="text-lg text-slate-700 max-w-2xl mx-auto">
        Together, we're making a real difference in urban cleanliness and environmental sustainability.
      </p>
    </section>
  </div>
  )
}

export default App
