// Fictional standings, presented with the Tichu site's compact leaderboard.
const players = [
  { name: "Alex R.", rating: "1128.0", games: 12, gt: "2/3", tichu: "6/8" },
  { name: "Jamie K.", rating: "1084.5", games: 10, gt: "1/2", tichu: "5/7" },
  { name: "Sam T.", rating: "1036.2", games: 8, gt: "1/1", tichu: "4/6" },
];

export const TichuPreview = () => (
  <div className="border-border bg-card/80 mt-auto w-full max-w-sm overflow-hidden rounded-xl border font-sans text-xs shadow-sm">
    <div className="border-border border-b px-3 py-2">
      <span className="inline-flex rounded-full border border-(--tichu-badge-border) px-2 py-0.5 text-(--tichu-badge-text)">
        Standings
      </span>
      <p className="mt-2 text-sm font-semibold">Leaderboard</p>
    </div>
    {players.map((player, index) => (
      <div
        key={player.name}
        className="border-border border-t px-3 py-2 first:border-t-0"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-(--tichu-rank)">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0 flex-1 font-medium">{player.name}</span>
          <span className="font-mono text-(--tichu-rating)">
            {player.rating}
          </span>
        </div>
        <div className="text-muted-foreground mt-1 grid grid-cols-3 gap-2 pl-6">
          <span>Games {player.games}</span>
          <span>GT {player.gt}</span>
          <span>Tichu {player.tichu}</span>
        </div>
      </div>
    ))}
  </div>
);
