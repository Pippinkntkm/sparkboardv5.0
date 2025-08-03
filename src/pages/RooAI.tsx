import React, { useState } from 'react';

const RooAI: React.FC = () => {
  const [startupIdea, setStartupIdea] = useState('');
  const [analysisResults, setAnalysisResults] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startupIdea.trim()) return;
    
    // Handle the startup idea submission here
    console.log('Startup idea submitted:', startupIdea);
    
    // Simulate AI analysis results
    setAnalysisResults(`Based on your startup idea analysis, here are the key insights:

🎯 MARKET ANALYSIS
Your idea shows potential in a competitive market. The target market size is moderate, but there's room for differentiation. Consider focusing on a specific niche to reduce competition.

💡 INNOVATION ASSESSMENT
Your solution demonstrates strong innovative elements. The technology approach is sound and could provide significant value to users. The disruption potential is high if executed properly.

⚡ EXECUTION ROADMAP
The feasibility is moderate, requiring approximately 12-18 months for initial development. Resource requirements are manageable with proper planning. Consider starting with an MVP to validate assumptions.

📊 RECOMMENDATIONS
1. Conduct thorough market research to validate demand
2. Develop a minimum viable product (MVP) first
3. Focus on user feedback and iteration
4. Consider strategic partnerships to accelerate growth
5. Plan for multiple funding rounds

🚀 NEXT STEPS
- Create detailed user personas
- Develop a comprehensive business plan
- Identify potential investors and partners
- Set up key performance indicators (KPIs)
- Begin MVP development phase`);
  };

  return (
    <div className="bg-gradient-to-br from-boomerang-black via-boomerang-navy to-boomerang-blue">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">RooAI</h1>
              <p className="text-sm text-gray-300">Your Startup Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Online</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Startup Idea Input Box */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Input Your Startup Idea
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Describe your startup idea and let RooAI help you develop it
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <textarea
                    value={startupIdea}
                    onChange={(e) => setStartupIdea(e.target.value)}
                    placeholder="Describe your startup idea here... What problem are you solving? Who is your target market? What makes your solution unique?"
                    className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={6}
                    style={{ minHeight: '150px' }}
                  />
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!startupIdea.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 text-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Analyze with RooAI</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Analysis Dials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Market Viability Dial */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Market Viability</h3>
              <div className="relative w-full h-32 mb-4">
                {/* Semi-circular gauge */}
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  {/* Background arc */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  {/* Colored segments */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 60 40"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                  />
                  <path
                    d="M 60 40 A 80 80 0 0 1 100 35"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="8"
                  />
                  <path
                    d="M 100 35 A 80 80 0 0 1 140 40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                  />
                  <path
                    d="M 140 40 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                  />
                  {/* Needle */}
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="25"
                    stroke="#1F2937"
                    strokeWidth="3"
                    transform="rotate(-45 100 100)"
                  />
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">Low</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Market Size: Small</div>
                  <div>Competition: High</div>
                  <div>Demand: Moderate</div>
                </div>
              </div>
            </div>

            {/* Innovation Score Dial */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Innovation Score</h3>
              <div className="relative w-full h-32 mb-4">
                {/* Semi-circular gauge */}
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  {/* Background arc */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  {/* Colored segments */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 60 40"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                  />
                  <path
                    d="M 60 40 A 80 80 0 0 1 100 35"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="8"
                  />
                  <path
                    d="M 100 35 A 80 80 0 0 1 140 40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                  />
                  <path
                    d="M 140 40 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                  />
                  {/* Needle */}
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="25"
                    stroke="#1F2937"
                    strokeWidth="3"
                    transform="rotate(15 100 100)"
                  />
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">High</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Uniqueness: Strong</div>
                  <div>Technology: Advanced</div>
                  <div>Disruption: High</div>
                </div>
              </div>
            </div>

            {/* Execution Feasibility Dial */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Execution Feasibility</h3>
              <div className="relative w-full h-32 mb-4">
                {/* Semi-circular gauge */}
                <svg className="w-full h-full" viewBox="0 0 200 100">
                  {/* Background arc */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  {/* Colored segments */}
                  <path
                    d="M 20 80 A 80 80 0 0 1 60 40"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                  />
                  <path
                    d="M 60 40 A 80 80 0 0 1 100 35"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="8"
                  />
                  <path
                    d="M 100 35 A 80 80 0 0 1 140 40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="8"
                  />
                  <path
                    d="M 140 40 A 80 80 0 0 1 180 80"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                  />
                  {/* Needle */}
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="25"
                    stroke="#1F2937"
                    strokeWidth="3"
                    transform="rotate(-15 100 100)"
                  />
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Medium</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Resources: Moderate</div>
                  <div>Timeline: 12-18 months</div>
                  <div>Complexity: Medium</div>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Results Section */}
          {analysisResults && (
            <div className="w-full max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  RooAI Analysis Results
                </h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <pre className="text-white text-sm leading-relaxed whitespace-pre-wrap font-sans">
                    {analysisResults}
                  </pre>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Export Report</span>
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span>Share Analysis</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RooAI; 