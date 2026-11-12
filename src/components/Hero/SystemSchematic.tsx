const stages = [
  { x: 34, y: 70, label: "DATA", note: "source" },
  { x: 162, y: 36, label: "RETRIEVE", note: "rank" },
  { x: 290, y: 104, label: "REASON", note: "orchestrate" },
  { x: 418, y: 48, label: "VALIDATE", note: "ground" },
  { x: 546, y: 88, label: "OUTPUT", note: "serve" },
];

export function SystemSchematic() {
  return (
    <figure className="schematic" aria-labelledby="schematic-caption">
      <div className="schematic-topline"><span>System study / 001</span><span>Evidence pipeline</span></div>
      <svg viewBox="0 0 620 300" role="img" aria-label="Diagram of information moving from data through retrieval, reasoning, validation, and output">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth="1" />
          </pattern>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
        <rect width="620" height="300" fill="url(#grid)" />
        <path className="signal-path" d="M58 91 C105 91 110 57 160 57 S241 125 290 125 S370 69 418 69 S500 109 546 109" fill="none" markerEnd="url(#arrow)" />
        {stages.map((stage, index) => (
          <g key={stage.label} transform={`translate(${stage.x} ${stage.y})`}>
            <circle className="node-pulse" cx="20" cy="20" r="17" style={{ animationDelay: `${index * 0.35}s` }} />
            <circle className="node-core" cx="20" cy="20" r="8" />
            <text x="20" y="58" textAnchor="middle" className="stage-label">{stage.label}</text>
            <text x="20" y="73" textAnchor="middle" className="stage-note">{stage.note}</text>
          </g>
        ))}
        <g className="annotation" transform="translate(38 212)">
          <line x1="0" y1="0" x2="544" y2="0" />
          <text x="0" y="24">01 / provenance retained</text>
          <text x="198" y="24">02 / uncertainty surfaced</text>
          <text x="430" y="24">03 / typed boundary</text>
        </g>
      </svg>
      <figcaption id="schematic-caption">
        <span>Working principle</span>
        Useful AI software is not only a model call. It is a chain of evidence, decisions, checks, and clear interfaces.
      </figcaption>
    </figure>
  );
}
