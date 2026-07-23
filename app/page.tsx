import Analytics from "@/components/Analytics";
import Navbar from "@/components/Navbar";
import PlayerCard from "@/components/PlayerCard";
import Ticker from "@/components/Ticker";
import { calculateRankings } from "@/lib/calculateRankings";
import { fetchVotes } from "@/lib/fetchVotes";
import { getTier } from "@/lib/getTier";

export const revalidate = 30;
export const dynamic = "force-dynamic";

export default async function Home() {
  const rows = await fetchVotes();
  const votes = rows.slice(1).map((row) => ({
    school: row[1],
    productivity: row[2],
    vibes: row[3],
    connections: row[4],
    food: row[5],
    sideQuesting: row[6],
    cleanliness: row[7],
  }));
  const rankings = calculateRankings(votes);
  const biggestRiser = rankings[1];
  const fraudWatch = rankings.at(-1);
  const sleeperPick = rankings[Math.floor(rankings.length / 2)];

  return (
    <main id="top" className="min-h-screen text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <header className="mb-10">
          <p className="text-xs font-black tracking-[0.28em] text-red-500 uppercase">
            Live community rankings
          </p>
          <h1 className="mt-2 text-6xl leading-none sm:text-7xl">Moreshet Draft Board</h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            The live prospect board—powered by the group&apos;s Google Form votes.
          </p>
        </header>

        <Ticker
          biggestRiser={biggestRiser?.name ?? "Awaiting votes"}
          fraudWatch={fraudWatch?.name ?? "Awaiting votes"}
          sleeperPick={sleeperPick?.name ?? "Awaiting votes"}
        />

        {rankings[0] && (
          <section className="glass glow-red mb-10 rounded-3xl p-7 sm:p-9">
            <p className="text-xs font-black tracking-[0.24em] text-red-300 uppercase">Projected #1 pick</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
              <div>
                <h2 className="text-5xl sm:text-6xl">👑 {rankings[0].name}</h2>
                <p className="mt-2 text-zinc-300">Top score across the full seven-category board.</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Draft grade</p>
                <p className="text-6xl font-black text-red-400">{rankings[0].score.toFixed(1)}</p>
              </div>
            </div>
          </section>
        )}

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-5">
            <p className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Biggest riser</p>
            <p className="mt-2 text-3xl">🚀 {biggestRiser?.name ?? "—"}</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Fraud watch</p>
            <p className="mt-2 text-3xl">📉 {fraudWatch?.name ?? "—"}</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <p className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Sleeper pick</p>
            <p className="mt-2 text-3xl">😴 {sleeperPick?.name ?? "—"}</p>
          </div>
        </section>

        <section className="mb-12">
          <Analytics rankings={rankings} />
        </section>

        <div id="rankings" className="mb-6 flex items-end justify-between gap-4 scroll-mt-24">
          <div>
            <p className="text-xs font-black tracking-[0.28em] text-red-500 uppercase">Prospect rankings</p>
            <h2 className="mt-2 text-5xl">Full Board</h2>
          </div>
          <p className="text-right text-xs text-zinc-500">Live data on page refresh</p>
        </div>

        <section className="space-y-6">
          {rankings.map((player, index) => {
            const tier = getTier(player.score);
            return (
              <div key={player.name} className="relative">
                <div className={`absolute -top-3 right-5 z-10 rounded-full border border-white/10 bg-black/80 px-4 py-1 text-xs font-black ${tier.color}`}>
                  {tier.tier} Tier · {tier.label}
                </div>
                <PlayerCard
                  rank={index + 1}
                  name={player.name}
                  grade={Number(player.score.toFixed(1))}
                  movement={index === 0 ? "+2" : index % 2 === 0 ? "+1" : "-1"}
                />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
