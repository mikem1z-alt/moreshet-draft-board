export function getTier(
  score: number
) {
  if (score >= 85) {
    return {
      tier: "S",
      color: "text-yellow-400",
      label: "Elite",
    };
  }

  if (score >= 70) {
    return {
      tier: "A",
      color: "text-green-400",
      label: "Great",
    };
  }

  if (score >= 55) {
    return {
      tier: "B",
      color: "text-blue-400",
      label: "Solid",
    };
  }

  if (score >= 40) {
    return {
      tier: "C",
      color: "text-orange-400",
      label: "Mid",
    };
  }

  return {
    tier: "D",
    color: "text-red-500",
    label: "Washed",
  };
}