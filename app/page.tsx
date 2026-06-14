import PlayerCard from "@/components/PlayerCard";

import { fetchVotes } from "@/lib/fetchVotes";

import { calculateRankings } from "@/lib/calculateRankings";

import { getTier } from "@/lib/getTier";

export const revalidate = 30;

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

  const rankings =
    calculateRankings(votes);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}

        <div className="mb-12 border-b border-zinc-800 pb-6">
          <p className="text-red-500 font-black tracking-[0.3em] uppercase text-sm">
            ESPN MORESHET
          </p>

          <h1 className="text-6xl md:text-7xl font-black mt-2">
            Draft Board
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Live rankings powered by
            community voting
          </p>
        </div>

        {/* #1 Prospect */}

        {rankings[0] && (
          <div className="mb-10 bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 shadow-2xl">
            <p className="uppercase tracking-[0.3em] text-sm font-black">
              #1 OVERALL PROSPECT
            </p>

            <h2 className="text-5xl md:text-6xl font-black mt-2">
              {rankings[0].name}
            </h2>

            <p className="text-2xl mt-3 font-bold">
              Draft Grade:{" "}
              {rankings[0].score.toFixed(
                1
              )}
            </p>
          </div>
        )}

        {/* Rankings */}

        <div className="space-y-6">
          {rankings.map(
            (player, index) => {
              const tier =
                getTier(player.score);

              return (
                <div
                  key={player.name}
                  className="relative"
                >
                  {/* Tier Badge */}

                  <div
                    className={`absolute -top-3 right-6 z-10 px-4 py-1 rounded-full bg-black border border-zinc-700 text-sm font-black ${tier.color}`}
                  >
                    {tier.tier} Tier
                  </div>

                  <PlayerCard
                    rank={index + 1}
                    name={player.name}
                    grade={Number(
                      player.score.toFixed(
                        1
                      )
                    )}
                    movement={
                      index === 0
                        ? "+2"
                        : index % 2 === 0
                        ? "+1"
                        : "-1"
                    }
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}