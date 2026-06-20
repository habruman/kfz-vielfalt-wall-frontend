export default function TiktokBoxIcon({ size = 26 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: "white",
        borderRadius: "2px", // eckiger Kasten
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size * 0.8}    // Symbol ist jetzt deutlich größer
        height={size * 0.8}
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
      >
        <path d="M224 80.1c-22.1 0-40-17.9-40-40V32h-40v128c0 17.6-14.4 32-32 32s-32-14.4-32-32c0-17.6 14.4-32 32-32 5.7 0 11.1 1.5 16 4.2V96.4c-5.2-.7-10.5-1.1-16-1.1-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64V92.5c11.4 9 25.9 14.4 40 14.4V80.1z"/>
      </svg>
    </div>
  );
}
