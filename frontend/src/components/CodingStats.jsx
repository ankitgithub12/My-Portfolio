import React from 'react';
import { FaChartLine, FaTrophy, FaStar, FaFire, FaMedal } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const CodingStats = ({ stats, loading, error }) => {
  const { leetcode = {}, gfg = {} } = stats || {};

  const DifficultyBar = ({ label, solved, total, color, bgColor }) => {
    const percentage = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
    return (
      <div className="mb-4 last:mb-0">
        <div className="flex justify-between text-sm mb-2">
          <span className={`font-semibold ${color}`}>{label}</span>
          <span className="font-bold text-white">
            {solved}
            {total > 0 && <span className="text-slate-500 font-normal"> / {total}</span>}
          </span>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden border border-slate-600/30">
          <div
            className={`h-full rounded-full ${bgColor} relative transition-all duration-1000`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const StatBadge = ({ label, value, icon: Icon, color }) => (
    <div className={`flex items-center gap-2 px-3 py-2 bg-slate-900/60 rounded-xl border border-slate-700/50`}>
      <Icon className={`${color} text-lg`} />
      <div>
        <p className="text-white font-bold text-lg leading-tight">{value}</p>
        <p className="text-slate-500 text-xs">{label}</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section id="stats" className="section-container relative">
        <h2 className="section-title">Coding Progress</h2>
        <div className="flex justify-center items-center h-64">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-t-2 border-cyan-500 animate-spin"></div>
            <div className="absolute inset-3 rounded-full border-r-2 border-indigo-500 animate-spin" style={{animationDirection:'reverse'}}></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stats" className="section-container">
        <h2 className="section-title">Coding Progress</h2>
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-6 py-4 rounded-xl flex items-center">
          <span className="mr-3 text-2xl">⚠️</span>{error}
        </div>
      </section>
    );
  }

  const lcTotal = leetcode?.total || 0;
  const lcEasy = leetcode?.easy || 0;
  const lcMedium = leetcode?.medium || 0;
  const lcHard = leetcode?.hard || 0;

  const gfgTotal = gfg?.stats?.problemsSolved || gfg?.problemsSolved || 0;
  const gfgBreakdown = gfg?.problemBreakdown || gfg?.breakdown || {};
  const gfgLongestStreak = gfg?.stats?.longestStreak || gfg?.longestStreak || 0;
  const gfgRank = gfg?.stats?.instituteRank || gfg?.rank || 0;

  return (
    <section id="stats" className="section-container relative">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center mb-16 relative">
        <h2 className="section-title">
          <FaChartLine className="inline-block mr-3 text-cyan-400 mb-1" />
          Coding Progress
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-[-2rem]"></div>
      </div>

      {/* Summary Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
        <StatBadge label="LeetCode Solved" value={lcTotal} icon={SiLeetcode} color="text-yellow-400" />
        <StatBadge label="GFG Solved" value={gfgTotal} icon={SiGeeksforgeeks} color="text-emerald-400" />
        <StatBadge label="Longest Streak" value={gfgLongestStreak ? `${gfgLongestStreak}d` : 'N/A'} icon={FaFire} color="text-orange-400" />
        <StatBadge label="GFG Rank" value={gfgRank ? `#${gfgRank}` : 'N/A'} icon={FaMedal} color="text-indigo-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* LeetCode Card */}
        <div className="group card border-yellow-500/10 hover:border-yellow-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-yellow-500/20 text-yellow-400 shadow-lg">
                <SiLeetcode className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">LeetCode</h3>
                <a href="https://leetcode.com/u/Ankit639520/" target="_blank" rel="noopener noreferrer"
                   className="text-xs text-slate-500 hover:text-yellow-400 transition-colors">
                   leetcode.com/u/Ankit639520
                </a>
              </div>
            </div>

            {leetcode?.error ? (
              <p className="text-red-400 text-sm">{leetcode.error}</p>
            ) : (
              <div className="flex-grow flex flex-col">
                <div className="text-center mb-8 p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {lcTotal}
                  </span>
                  <p className="text-slate-400 mt-2 text-sm font-medium uppercase tracking-widest">Total Solved</p>
                </div>

                <DifficultyBar label="Easy"   solved={lcEasy}   total={lcTotal} color="text-emerald-400" bgColor="bg-emerald-500" />
                <DifficultyBar label="Medium" solved={lcMedium} total={lcTotal} color="text-yellow-400"  bgColor="bg-yellow-500"  />
                <DifficultyBar label="Hard"   solved={lcHard}   total={lcTotal} color="text-red-400"     bgColor="bg-red-500"     />
              </div>
            )}
          </div>
        </div>

        {/* GFG Card */}
        <div className="group card border-emerald-500/10 hover:border-emerald-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-emerald-500/20 text-emerald-400 shadow-lg">
                <SiGeeksforgeeks className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GeeksforGeeks</h3>
                <a href="https://www.geeksforgeeks.org/profile/ankit6ewub" target="_blank" rel="noopener noreferrer"
                   className="text-xs text-slate-500 hover:text-emerald-400 transition-colors">
                   geeksforgeeks.org/profile/ankit6ewub
                </a>
              </div>
            </div>

            {gfg?.error ? (
              <p className="text-red-400 text-sm">{gfg.error}</p>
            ) : (
              <div className="flex-grow flex flex-col">
                <div className="text-center mb-8 p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                    {gfgTotal}
                  </span>
                  <p className="text-slate-400 mt-2 text-sm font-medium uppercase tracking-widest">Total Solved</p>
                </div>

                {Object.keys(gfgBreakdown).length > 0 && (
                  <div className="space-y-4">
                    {gfgBreakdown.school  > 0 && <DifficultyBar label="School" solved={gfgBreakdown.school}  total={gfgTotal} color="text-slate-400"  bgColor="bg-slate-500" />}
                    {gfgBreakdown.basic   > 0 && <DifficultyBar label="Basic"  solved={gfgBreakdown.basic}   total={gfgTotal} color="text-cyan-400"   bgColor="bg-cyan-500"  />}
                    {gfgBreakdown.easy    > 0 && <DifficultyBar label="Easy"   solved={gfgBreakdown.easy}    total={gfgTotal} color="text-emerald-400" bgColor="bg-emerald-500" />}
                    {gfgBreakdown.medium  > 0 && <DifficultyBar label="Medium" solved={gfgBreakdown.medium}  total={gfgTotal} color="text-yellow-400"  bgColor="bg-yellow-500"  />}
                    {gfgBreakdown.hard    > 0 && <DifficultyBar label="Hard"   solved={gfgBreakdown.hard}    total={gfgTotal} color="text-red-400"     bgColor="bg-red-500"     />}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-slate-800/40 border-indigo-500/20 hover:border-indigo-500/50 p-6 flex items-start group">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform">
              <FaTrophy size={20} />
            </div>
            <div>
              <p className="text-lg font-bold text-white mb-1">Consistency Champion</p>
              <p className="text-slate-400 text-sm mb-2">{lcTotal}+ problems on LeetCode, {gfgTotal}+ on GeeksforGeeks</p>
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                🔥 {gfgLongestStreak > 0 ? `${gfgLongestStreak}-day` : '78-day'} streak maintained
              </div>
            </div>
          </div>

          <div className="card bg-slate-800/40 border-purple-500/20 hover:border-purple-500/50 p-6 flex items-start group">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform">
              <FaStar size={20} />
            </div>
            <div>
              <p className="text-lg font-bold text-white mb-1">Skill Badges</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['5★ Python', '4★ C++', '3★ C', '3★ SQL'].map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-slate-300 text-xs font-semibold">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;