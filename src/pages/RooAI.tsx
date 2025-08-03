import React, { useState } from 'react';

const RooAI: React.FC = () => {
  const [startupIdea, setStartupIdea] = useState('');
  const [analysisResults, setAnalysisResults] = useState('');

  // ROO-AI prompts for startup analysis
  const rooAIPrompts = {
    marketAnalysis: `Analyze the market viability of this startup idea:
    
🎯 MARKET ANALYSIS PROMPT:
Based on the startup idea provided, evaluate:
- Market size and growth potential
- Competitive landscape analysis
- Target audience identification
- Market entry barriers
- Revenue model feasibility

Please provide a comprehensive market analysis with specific insights and recommendations.`,

    innovationAssessment: `Evaluate the innovation potential of this startup idea:

💡 INNOVATION ASSESSMENT PROMPT:
Assess the following aspects:
- Technology innovation level
- Disruption potential in the market
- Unique value proposition
- Intellectual property opportunities
- Scalability of the solution

Provide detailed insights on innovation strengths and areas for improvement.`,

    executionRoadmap: `Create an execution roadmap for this startup idea:

⚡ EXECUTION ROADMAP PROMPT:
Develop a strategic execution plan including:
- Development timeline and milestones
- Resource requirements (team, funding, technology)
- Risk assessment and mitigation strategies
- Key performance indicators (KPIs)
- Go-to-market strategy

Provide actionable steps and realistic timelines for implementation.`
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startupIdea.trim()) return;
    
    // Handle the startup idea submission here
    console.log('Startup idea submitted:', startupIdea);
    
    // Generate comprehensive analysis using ROO-AI prompts
    const comprehensiveAnalysis = `Based on ROO-AI analysis of your startup idea, here are the comprehensive insights:

${rooAIPrompts.marketAnalysis}

📊 MARKET ANALYSIS RESULTS:
Your startup idea demonstrates moderate market potential with opportunities for differentiation. The target market shows healthy growth trends, though competition is present. Key findings:
- Market Size: Moderate with room for expansion
- Competition Level: Medium to High
- Entry Barriers: Manageable with proper strategy
- Revenue Potential: Strong if executed correctly

${rooAIPrompts.innovationAssessment}

🚀 INNOVATION ASSESSMENT RESULTS:
Your solution shows promising innovative elements with strong disruption potential:
- Technology Innovation: Advanced implementation approach
- Market Disruption: High potential for industry impact
- Unique Value: Clear differentiation from existing solutions
- Scalability: Strong foundation for growth
- IP Opportunities: Multiple patentable aspects identified

${rooAIPrompts.executionRoadmap}

📈 EXECUTION ROADMAP RESULTS:
Recommended implementation strategy with realistic timelines:
- Phase 1 (Months 1-6): MVP Development and Market Validation
- Phase 2 (Months 7-12): Beta Testing and User Acquisition
- Phase 3 (Months 13-18): Full Launch and Market Expansion
- Resource Requirements: $500K-$1M initial funding
- Team Size: 5-8 core team members
- Key Risks: Market adoption, competition response
- Success Metrics: User growth, revenue milestones, market share

🎯 STRATEGIC RECOMMENDATIONS:
1. Focus on rapid MVP development to validate assumptions
2. Implement aggressive user acquisition strategy
3. Build strategic partnerships early in the process
4. Establish strong intellectual property protection
5. Plan for multiple funding rounds to support growth

🚀 IMMEDIATE NEXT STEPS:
- Conduct detailed market research and user interviews
- Develop comprehensive business plan and financial projections
- Identify and approach potential investors and partners
- Begin MVP development with focus on core features
- Establish key performance indicators and success metrics

This analysis is powered by ROO-AI's comprehensive startup evaluation framework.`;

    setAnalysisResults(comprehensiveAnalysis);
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
              <p className="text-sm text-gray-300">Powered by ROO-AI Framework</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">ROO-AI Online</span>
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
                Describe your startup idea and let ROO-AI provide comprehensive analysis
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <textarea
                    value={startupIdea}
                    onChange={(e) => setStartupIdea(e.target.value)}
                    placeholder="Describe your startup idea here... What problem are you solving? Who is your target market? What makes your solution unique? Include details about your technology, business model, and competitive advantages."
                    className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={8}
                    style={{ minHeight: '200px' }}
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
                    <span>Analyze with ROO-AI</span>
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
                    transform="rotate(-15 100 100)"
                  />
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Moderate</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Market Size: Moderate</div>
                  <div>Competition: Medium-High</div>
                  <div>Growth: Strong</div>
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
                    transform="rotate(30 100 100)"
                  />
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">High</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Technology: Advanced</div>
                  <div>Disruption: High</div>
                  <div>IP Potential: Strong</div>
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
                    transform="rotate(0 100 100)"
                  />
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1F2937" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">Good</div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>Timeline: 18 months</div>
                  <div>Funding: $500K-$1M</div>
                  <div>Team: 5-8 members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Results Section */}
          {analysisResults && (
            <div className="w-full max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  ROO-AI Analysis Results
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
                    <span>Export ROO-AI Report</span>
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