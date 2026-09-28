import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaChartLine, FaFire, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const CodingStats = ({ stats, loading, error }) => {
  const { leetcode = {}, gfg = {} } = stats || {};

  const DifficultyBar = ({ label, solved, total, color, gradient }) => {
    const percentage = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
    return (
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-bold">
          <span className={color}>{label}</span>
          <span className="text-slate-700 font-mono">
            {solved}
            {total > 0 && <span className="text-slate-400 font-normal"> ({Math.round(percentage)}%)</span>}
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50 shadow-inner">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 shadow-sm`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const StatBadge = ({ label, value, icon: Icon, color, bg, glow }) => (
    <div className={`glass-card-hover glass-card rounded-3xl p-5 border border-white/90 shadow-md flex items-center gap-4 ${glow}`}>
      <div className={`w-12 h-12 rounded-2xl ${bg} ${color} flex items-center justify-center text-xl shrink-0 shadow-md transition-transform group-hover:scale-105`}>
        <Icon />
      </div>
      <div>
        <span className="text-2xl sm:text-3xl font-black text-slate-900 block leading-tight tracking-tight">
          {value}
        </span>
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section id="stats" className="space-y-8 relative z-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="section-label">Problem Solving</span>
          <h2 className="section-title">Coding Progress</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
        </div>
        <div className="flex justify-center items-center h-48">
          <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stats" className="space-y-8 relative z-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="section-label">Problem Solving</span>
          <h2 className="section-title">Coding Progress</h2>
        </div>
        <div className="glass-card bg-rose-50/80 border border-rose-200 text-rose-700 px-6 py-4 rounded-2xl flex items-center max-w-xl mx-auto shadow-sm">
          <span className="mr-3 text-xl">⚠️</span> {error}
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
  const gfgRank = gfg?.stats?.rank || gfg?.rank || null;

  return (
    <section id="stats" className="space-y-8 relative z-10">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Algorithms & Problem Solving</span>
        <h2 className="section-title flex items-center justify-center gap-2">
          <FaChartLine className="text-brand-600 text-2xl" /> Coding Progress
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Top Stats Strip in Frosted Glass */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatBadge label="LeetCode Solved" value={lcTotal} icon={SiLeetcode} color="text-amber-600" bg="bg-amber-50 border border-amber-200/80" glow="hover:shadow-amber-500/15" />
        <StatBadge label="GFG Solved" value={gfgTotal} icon={SiGeeksforgeeks} color="text-emerald-600" bg="bg-emerald-50 border border-emerald-200/80" glow="hover:shadow-emerald-500/15" />
        <StatBadge label="Longest Streak" value={gfgLongestStreak ? `${gfgLongestStreak}d` : '78d'} icon={FaFire} color="text-orange-600" bg="bg-orange-50 border border-orange-200/80" glow="hover:shadow-orange-500/15" />
        <StatBadge label="GFG Rank" value={gfgRank ? `#${gfgRank}` : 'Top 10%'} icon={FaMedal} color="text-indigo-600" bg="bg-indigo-50 border border-indigo-200/80" glow="hover:shadow-indigo-500/15" />
      </div>

      {/* LeetCode & GFG Detailed Cards with High-Grade Glassmorphism */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LeetCode Card */}
        <div className="glass-card-premium rounded-3xl p-7 border border-white/90 shadow-xl space-y-6 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 opacity-80"></div>

          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-xl shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
                  <SiLeetcode />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl">LeetCode</h3>
                  <a
                    href="https://leetcode.com/u/Ankit639520/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 font-mono hover:text-amber-600 transition-colors flex items-center gap-1"
                  >
                    <span>leetcode.com/u/Ankit639520</span>
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-amber-500 block leading-tight">{lcTotal}</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 font-mono">Solved</span>
              </div>
            </div>

            <div className="space-y-4">
              <DifficultyBar label="Easy Problems" solved={lcEasy} total={lcTotal} color="text-emerald-600" gradient="from-emerald-400 to-teal-500" />
              <DifficultyBar label="Medium Problems" solved={lcMedium} total={lcTotal} color="text-amber-600" gradient="from-amber-400 to-orange-500" />
              <DifficultyBar label="Hard Problems" solved={lcHard} total={lcTotal} color="text-rose-600" gradient="from-rose-500 to-red-500" />
            </div>
          </div>

          <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200/70 text-xs text-amber-900 flex items-center justify-between shadow-xs">
            <span className="font-bold flex items-center gap-1.5">
              <FaCode className="text-amber-600 text-sm" /> Focused on Core Data Structures & Algorithms
            </span>
            <span className="font-mono font-bold bg-amber-200/70 px-2 py-0.5 rounded text-[11px]">Active</span>
          </div>
        </div>

        {/* GFG Card */}
        <div className="glass-card-premium rounded-3xl p-7 border border-white/90 shadow-xl space-y-6 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-80"></div>

          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center text-xl shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                  <SiGeeksforgeeks />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl">GeeksforGeeks</h3>
                  <a
                    href="https://www.geeksforgeeks.org/profile/ankit6ewub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 font-mono hover:text-emerald-600 transition-colors flex items-center gap-1"
                  >
                    <span>geeksforgeeks.org/profile/ankit6ewub</span>
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-emerald-600 block leading-tight">{gfgTotal}</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 font-mono">Solved</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {gfgBreakdown.school > 0 && (
                <DifficultyBar label="School" solved={gfgBreakdown.school} total={gfgTotal} color="text-slate-600" gradient="from-slate-400 to-slate-500" />
              )}
              {gfgBreakdown.basic > 0 && (
                <DifficultyBar label="Basic" solved={gfgBreakdown.basic} total={gfgTotal} color="text-cyan-600" gradient="from-cyan-400 to-blue-500" />
              )}
              {gfgBreakdown.easy > 0 && (
                <DifficultyBar label="Easy" solved={gfgBreakdown.easy} total={gfgTotal} color="text-emerald-600" gradient="from-emerald-400 to-teal-500" />
              )}
              {gfgBreakdown.medium > 0 && (
                <DifficultyBar label="Medium" solved={gfgBreakdown.medium} total={gfgTotal} color="text-amber-600" gradient="from-amber-400 to-orange-500" />
              )}
              {gfgBreakdown.hard > 0 && (
                <DifficultyBar label="Hard" solved={gfgBreakdown.hard} total={gfgTotal} color="text-rose-600" gradient="from-rose-500 to-red-500" />
              )}
              {Object.keys(gfgBreakdown).length === 0 && (
                <div className="text-xs text-slate-500 py-4 text-center">
                  Solved across Array, String, and Core Data Structures problems.
                </div>
              )}
            </div>
          </div>

          <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-200/70 text-xs text-emerald-900 flex items-center justify-between shadow-xs">
            <span className="font-bold flex items-center gap-1.5">
              <FaFire className="text-amber-500 text-sm" /> {gfgLongestStreak > 0 ? `${gfgLongestStreak}-day` : '78-day'} continuous streak
            </span>
            <span className="font-mono font-bold bg-emerald-200/70 px-2 py-0.5 rounded text-[11px]">Verified</span>
          </div>
        </div>
      </div>

      {/* Consistency & Badges Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card-hover glass-card rounded-3xl p-6 sm:p-7 border border-white/90 shadow-md flex items-start gap-4">
          <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-brand-600 text-white flex items-center justify-center text-xl shrink-0 shadow-md shadow-brand-500/25">
            <FaTrophy />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-extrabold text-slate-900">Consistency Champion</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {lcTotal}+ problems on LeetCode &amp; {gfgTotal}+ on GeeksforGeeks, solving daily logic challenges.
            </p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold font-mono mt-1 shadow-xs">
              🔥 {gfgLongestStreak > 0 ? `${gfgLongestStreak}-day` : '78-day'} streak maintained
            </div>
          </div>
        </div>

        <div className="glass-card-hover glass-card rounded-3xl p-6 sm:p-7 border border-white/90 shadow-md flex items-start gap-4">
          <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md shadow-purple-500/25">
            <FaStar />
          </div>
          <div className="space-y-2 flex-1">
            <h4 className="text-base font-extrabold text-slate-900">Skill Badges</h4>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {['5★ Python', '4★ C++', '3★ C', '3★ SQL'].map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/90 border border-slate-200/80 rounded-full text-slate-700 text-xs font-bold shadow-xs hover:border-brand-300 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;