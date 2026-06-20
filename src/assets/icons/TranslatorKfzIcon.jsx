export default function TranslatorKfzIcon({ size = 26 }) {
  const box = size;
  const small = size * 0.65;

  return (
    <div
      style={{
        width: box,
        height: box,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* BACK BLACK SQUARE */}
      <div
        style={{
          width: small,
          height: small,
          backgroundColor: "black",
          borderRadius: "2px",
          position: "absolute",
          top: size * 0.08,
          left: size * 0.08,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* star / translate symbol */}
        <svg
          width={small * 0.55}
          height={small * 0.55}
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 2L9 9H3l5 4-2 7 6-4 6 4-2-7 5-4h-6z" />
        </svg>
      </div>

      {/* FRONT WHITE SQUARE */}
      <div
        style={{
          width: small,
          height: small,
          backgroundColor: "white",
          borderRadius: "2px",
          position: "absolute",
          bottom: size * 0.08,
          right: size * 0.08,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: small * 0.45,
            fontFamily: "Arial",
          }}
        >
          A
        </span>
      </div>

      {/* LEFT WHITE ARROW */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: `${size * 0.12}px solid transparent`,
          borderBottom: `${size * 0.12}px solid transparent`,
          borderRight: `${size * 0.12}px solid white`,
          position: "absolute",
          left: -size * 0.15,
        }}
      ></div>

      {/* TOP WHITE ARROW */}
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size * 0.12}px solid transparent`,
          borderRight: `${size * 0.12}px solid transparent`,
          borderBottom: `${size * 0.12}px solid white`,
          position: "absolute",
          top: -size * 0.15,
        }}
      ></div>
    </div>
  );
}
