import PlayerCard from "@/components/PlayerCard";

import { fetchVotes } from "@/lib/fetchVotes";

import { calculateRankings } from "@/lib/calculateRankings";

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
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-black mb-3">
          MORESHET DRAFT BOARD
        </h1>

        <p className="text-zinc-400 mb-10">
          Live ESPN-style rankings
        </p>

        <div className="space-y-6">
          {rankings.map(
            (player, index) => (
              <PlayerCard
                key={player.name}
                rank={index + 1}
                name={player.name}
                grade={Number(
                  player.score.toFixed(1)
                )}
                movement={
                  index === 0
                    ? "+2"
                    : index % 2 === 0
                    ? "+1"
                    : "-1"
                }
              />
            )
          )}
        </div>
      </div>
    </main>
  );
}