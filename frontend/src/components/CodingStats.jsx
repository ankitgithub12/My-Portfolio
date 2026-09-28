import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaChartLine, FaFire } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const CodingStats = ({ stats, loading, error }) => {
  const { leetcode = {}, gfg = {} } = stats || {};

  const DifficultyBar = ({ label, solved, total, color, bgColor }) => {
    const percentage = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
    return (
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-semibold">
          <span className={color}>{label}</span>
          <span className="text-slate-700 font-mono">
            {solved}
            {total > 0 && <span className="text-slate-400"> ({Math.round(percentage)}%)</span>}
          </span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${bgColor} transition-all duration-1000`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const StatBadge = ({ label, value, icon: Icon, color, bg }) => (
    <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center gap-3.5">
      <div className={`w-11 h-11 rounded-xl ${bg} ${color} flex items-center justify-center text-xl shrink-0 shadow-sm border border-slate-200/50`}>
        <Icon />
      </div>
      <div>
        <span className="text-xl sm:text-2xl font-black text-slate-900 block leading-tight">
          {value}
        </span>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section id="stats" className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="section-label">Problem Solving</span>
          <h2 className="section-title">Coding Progress</h2>
          <div className="h-1 w-12 bg-brand-500 rounded-full mx-auto mt-2"></div>
        </div>
        <div className="flex justify-center items-center h-48">
          <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stats" className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="section-label">Problem Solving</span>
          <h2 className="section-title">Coding Progress</h2>
        </div>
        <div className="bg-rose-50 border border-rose-200 text-rose-600 px-6 py-4 rounded-xl flex items-center max-w-xl mx-auto">
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
    <section id="stats" className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="section-label">Algorithms & Problem Solving</span>
        <h2 className="section-title flex items-center justify-center gap-2">
          <FaChartLine className="text-brand-600 text-2xl" /> Coding Progress
        </h2>
        <div className="h-1 w-12 bg-brand-500 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Top Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatBadge label="LeetCode Solved" value={lcTotal} icon={SiLeetcode} color="text-amber-600" bg="bg-amber-50" />
        <StatBadge label="GFG Solved" value={gfgTotal} icon={SiGeeksforgeeks} color="text-emerald-600" bg="bg-emerald-50" />
        <StatBadge label="Longest Streak" value={gfgLongestStreak ? `${gfgLongestStreak}d` : '78d'} icon={FaFire} color="text-orange-600" bg="bg-orange-50" />
        <StatBadge label="GFG Rank" value={gfgRank ? `#${gfgRank}` : 'Top 10%'} icon={FaMedal} color="text-indigo-600" bg="bg-indigo-50" />
      </div>

      {/* LeetCode & GFG Detailed Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LeetCode Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shadow-sm border border-amber-200">
                  <SiLeetcode />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">LeetCode</h3>
                  <a
                    href="https://leetcode.com/u/Ankit639520/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 font-mono hover:text-amber-600 transition-colors"
                  >
                    leetcode.com/u/Ankit639520
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-amber-500">{lcTotal}</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Total Solved</span>
              </div>
            </div>

            <div className="space-y-4">
              <DifficultyBar label="Easy" solved={lcEasy} total={lcTotal} color="text-emerald-600" bgColor="bg-emerald-500" />
              <DifficultyBar label="Medium" solved={lcMedium} total={lcTotal} color="text-amber-600" bgColor="bg-amber-500" />
              <DifficultyBar label="Hard" solved={lcHard} total={lcTotal} color="text-rose-600" bgColor="bg-rose-500" />
            </div>
          </div>

          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 text-xs text-amber-800 flex items-center justify-between">
            <span className="font-semibold">Consistency in Data Structures & Algorithmic Design</span>
            <span className="font-mono font-bold">Active</span>
          </div>
        </div>

        {/* GFG Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shadow-sm border border-emerald-200">
                  <SiGeeksforgeeks />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">GeeksforGeeks</h3>
                  <a
                    href="https://www.geeksforgeeks.org/profile/ankit6ewub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 font-mono hover:text-emerald-600 transition-colors"
                  >
                    geeksforgeeks.org/profile/ankit6ewub
                  </a>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-emerald-600">{gfgTotal}</span>
                <span className="block text-[10px] uppercase font-bold text-slate-400">Total Solved</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {gfgBreakdown.school > 0 && (
                <DifficultyBar label="School" solved={gfgBreakdown.school} total={gfgTotal} color="text-slate-500" bgColor="bg-slate-400" />
              )}
              {gfgBreakdown.basic > 0 && (
                <DifficultyBar label="Basic" solved={gfgBreakdown.basic} total={gfgTotal} color="text-cyan-600" bgColor="bg-cyan-500" />
              )}
              {gfgBreakdown.easy > 0 && (
                <DifficultyBar label="Easy" solved={gfgBreakdown.easy} total={gfgTotal} color="text-emerald-600" bgColor="bg-emerald-500" />
              )}
              {gfgBreakdown.medium > 0 && (
                <DifficultyBar label="Medium" solved={gfgBreakdown.medium} total={gfgTotal} color="text-amber-600" bgColor="bg-amber-500" />
              )}
              {gfgBreakdown.hard > 0 && (
                <DifficultyBar label="Hard" solved={gfgBreakdown.hard} total={gfgTotal} color="text-rose-600" bgColor="bg-rose-500" />
              )}
              {/* Fallback if breakdown empty */}
              {Object.keys(gfgBreakdown).length === 0 && (
                <div className="text-xs text-slate-500 py-4 text-center">
                  Solved across Array, Tree, Graph, and Dynamic Programming problems.
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs text-emerald-800 flex items-center justify-between">
            <span className="font-semibold">🔥 {gfgLongestStreak > 0 ? `${gfgLongestStreak}-day` : '78-day'} streak milestone achieved</span>
            <span className="font-mono font-bold">Verified</span>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-brand-600 flex items-center justify-center text-xl shrink-0 shadow-sm border border-indigo-200/60">
            <FaTrophy />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">Consistency Champion</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              {lcTotal}+ problems on LeetCode, {gfgTotal}+ on GeeksforGeeks
            </p>
            <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mt-1">
              🔥 {gfgLongestStreak > 0 ? `${gfgLongestStreak}-day` : '78-day'} streak maintained
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl shrink-0 shadow-sm border border-purple-200/60">
            <FaStar />
          </div>
          <div className="space-y-2 flex-1">
            <h4 className="text-base font-bold text-slate-900">Skill Badges</h4>
            <div className="flex flex-wrap gap-2">
              {['5★ Python', '4★ C++', '3★ C', '3★ SQL'].map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-xs font-semibold shadow-sm"
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