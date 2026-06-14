const CATEGORY_POINTS = {
  school: 18,
  cleanliness: 25,
  vibes: 15,
  connections: 7,
  food: 7,
  productivity: 15,
  sideQuesting: 13,
};

const multipliers = [
  1,
  0.85,
  0.72,
  0.6,
  0.48,
  0.36,
  0.24,
  0.12,
];

function getPoints(
  rank: number,
  maxPoints: number
) {
  return (
    multipliers[rank] * maxPoints
  );
}

export function calculateRankings(
  votes: Record<string, string>[]
) {
  const scores: Record<
    string,
    number
  > = {};

  Object.entries(CATEGORY_POINTS).forEach(
    ([category, maxPoints]) => {
      const voteCounts: Record<
        string,
        number
      > = {};

      votes.forEach((vote) => {
        const raw =
          vote[category];

        if (!raw) return;

        const players = raw
          .split(",")
          .map((p: string) =>
            p.trim()
          );

        players.forEach(
          (player: string) => {
            voteCounts[player] =
              (voteCounts[player] || 0) +
              1;
          }
        );
      });

      const rankedPlayers =
        Object.entries(voteCounts).sort(
          (a, b) => b[1] - a[1]
        );

      rankedPlayers.forEach(
        ([player], index) => {
          scores[player] =
            (scores[player] || 0) +
            getPoints(
              index,
              maxPoints
            );
        }
      );
    }
  );

  return Object.entries(scores)
    .map(([name, score]) => ({
      name,
      score,
    }))
    .sort(
      (a, b) => b.score - a.score
    );
}