type TickerProps = {
  biggestRiser: string;
  fraudWatch: string;
  sleeperPick: string;
};

export default function Ticker({ biggestRiser, fraudWatch, sleeperPick }: TickerProps) {
  const headlines = [
    `🚀 Biggest riser: ${biggestRiser}`,
    `📉 Fraud watch: ${fraudWatch}`,
    `😴 Sleeper pick: ${sleeperPick}`,
    "🐐 The GOAT race is heating up",
    "📊 Board refreshes from live voting",
  ];

  return (
    <section className="mb-10 overflow-hidden border-y border-red-500/30 bg-red-950/40 py-3" aria-label="Draft board headlines">
      <div className="ticker flex w-max gap-12 whitespace-nowrap pr-12 text-xs font-black tracking-wide uppercase sm:text-sm">
        {[...headlines, ...headlines].map((headline, index) => (
          <span key={`${headline}-${index}`}>{headline}</span>
        ))}
      </div>
    </section>
  );
}
