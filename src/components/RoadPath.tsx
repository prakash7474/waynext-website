export default function RoadPath() {
  return (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 pointer-events-none"
    >
      <path
        id="road"
        d="M900 700 Q600 250 300 450"
        fill="none"
        stroke="transparent"
      />
    </svg>
  );
}
