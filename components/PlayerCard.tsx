export default function PlayerCard({
  rank,
  name,
  grade,
  movement,
}: {
  rank: number;
  name: string;
  grade: number;
  movement?: string;
}) {
  const safeMovement =
    movement || "0";

  const isUp =
    safeMovement.startsWith("+");

  const isDown =
    safeMovement.startsWith("-");

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:scale-[1.01] transition-all duration-300">
      <div className="flex justify-between">
        <div>
          <p className="text-zinc-400">
            Rank #{rank}
          </p>

          <h2 className="text-4xl font-black mt-1">
            {name}
          </h2>

          <div className="mt-4">
            {isUp && (
              <div className="flex items-center gap-2 text-green-400 font-bold animate-bounce">
                <span className="text-2xl">
                  ↑
                </span>

                <span>
                  STOCK RISING {safeMovement}
                </span>
              </div>
            )}

            {isDown && (
              <div className="flex items-center gap-2 text-red-500 font-bold animate-bounce">
                <span className="text-2xl">
                  ↓
                </span>

                <span>
                  STOCK FALLING {safeMovement}
                </span>
              </div>
            )}

            {!isUp && !isDown && (
              <div className="text-zinc-400">
                → HOLDING POSITION
              </div>
            )}
          </div>
        </div>

        <div className="text-right">
          <p className="text-zinc-500 uppercase text-sm">
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