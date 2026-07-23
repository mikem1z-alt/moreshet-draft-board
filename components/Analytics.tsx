"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type AnalyticsProps = {
  rankings: { name: string; score: number }[];
};

export default function Analytics({ rankings }: AnalyticsProps) {
  return (
    <section id="analytics" className="glass scroll-mt-24 rounded-3xl p-5 sm:p-7">
      <div className="mb-5">
        <p className="text-xs font-black tracking-[0.25em] text-red-500 uppercase">Analytics</p>
        <h2 className="mt-1 text-4xl">Draft Grades</h2>
      </div>
      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rankings} margin={{ top: 8, right: 8, left: -20, bottom: 8 }}>
            <XAxis dataKey="name" tick={{ fill: "#a1a1aa", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#71717a", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} contentStyle={{ background: "#18181b", border: "1px solid #3f3f46", borderRadius: "12px" }} labelStyle={{ color: "#fff" }} />
            <Bar dataKey="score" name="Draft Grade" fill="#ef4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
