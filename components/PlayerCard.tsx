export default function PlayerCard({
  rank,
  name,
  grade,
  movement,
}: {
  rank: number;
  name: string;
  grade: number;
  movement: string;
}) {
  const isUp =
    movement.startsWith("+");

  const isDown =
    movement.startsWith("-");

  const getComp = () => {
    const comps = [
      "Prime Sonny D with elite side-quest upside",
      "Michael Mizrahi with high productivity ceiling",
      "Baruch Ellman with stronger vibes metrics",
      "Eli Chenova with lockdown cleanliness defense",
      "Rev with sleeper GOAT potential",
      "AI T generational aura prospect",
    ];

    return comps[
      rank % comps.length
    ];
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:scale-[1.01] transition-all duration-300 shadow-2xl">
      <div className="flex justify-between gap-6">
        <div className="flex-1">
          <p className="text-zinc-500 text-sm font-bold uppercase">
            Rank #{rank}
          </p>

          <h2 className="text-4xl font-black mt-1">
            {name}
          </h2>

          {/* Analysts */}

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-red-600 px-2 py-1 rounded text-xs font-black">
              Michael Mizrahi
            </span>

            <span className="bg-zinc-800 px-2 py-1 rounded text-xs font-black">
              Eli Chenova
            </span>

            <span className="bg-zinc-800 px-2 py-1 rounded text-xs font-black">
              Baruch Ellman
            </span>

            <span className="bg-zinc-800 px-2 py-1 rounded text-xs font-black">
              AI T
            </span>
          </div>

          {/* Stock Movement */}

          <div className="mt-5">
            {isUp && (
              <div className="flex items-center gap-2 text-green-400 font-black animate-pulse">
                <span className="text-2xl">
                  ↑
                </span>

                <span>
                  STOCK RISING{" "}
                  {movement}
                </span>
              </div>
            )}

            {isDown && (
              <div className="flex items-center gap-2 text-red-500 font-black animate-pulse">
                <span className="text-2xl">
                  ↓
                </span>

                <span>
                  STOCK FALLING{" "}
                  {movement}
                </span>
              </div>
            )}

            {!isUp && !isDown && (
              <div className="text-zinc-400 font-bold">
                → HOLDING POSITION
              </div>
            )}
          </div>

          {/* Player Comp */}

          <p className="text-zinc-400 mt-5 text-sm italic">
            Player Comp: {getComp()}
          </p>

          {/* Breakdown */}

          <div className="grid grid-cols-2 gap-2 mt-6 text-sm">
            <div className="bg-zinc-800 rounded-xl p-2">
              School: Elite
            </div>

            <div className="bg-zinc-800 rounded-xl p-2">
              Cleanliness: Strong
            </div>

            <div className="bg-zinc-800 rounded-xl p-2">
              Vibes: Generational
            </div>

            <div className="bg-zinc-800 rounded-xl p-2">
              Food: Sleeper
            </div>
          </div>
        </div>

        {/* Grade */}

        <div className="text-right">
          <p className="text-zinc-500 uppercase text-sm font-bold">
            Draft Grade
          </p>

          <div className="text-red-500 text-6xl font-black">
            {grade}
          </div>
        </div>
      </div>
    </div>
  );
}