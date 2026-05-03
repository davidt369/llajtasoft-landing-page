import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useState, useEffect } from "react";

const ProductPresentation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Automatización",
      subtitle: "Procesos manuales → Flujos automáticos",
      icon: "⚙️",
      color: "#2684ff"
    },
    {
      title: "Integraciones",
      subtitle: "WhatsApp, Excel, POS, Facturación",
      icon: "🔌",
      color: "#18b3dc"
    },
    {
      title: "Dashboards",
      subtitle: "Datos en tiempo real para decidir mejor",
      icon: "📊",
      color: "#50a6ff"
    },
    {
      title: "Resultados",
      subtitle: "-60% errores • +40% eficiencia",
      icon: "📈",
      color: "#22c55e"
    }
  ];

  const slideDuration = 45; // frames per slide
  const slideIndex = Math.floor(frame / slideDuration) % slides.length;
  const progress = (frame % slideDuration) / slideDuration;

  const opacity = interpolate(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = interpolate(progress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const translateY = interpolate(progress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const currentSlideData = slides[slideIndex];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020617",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${currentSlideData.color}40 0%, transparent 70%)`,
          filter: "blur(100px)",
          opacity: 0.6,
          animation: "float 3s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateY}px)`,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: "120px",
            marginBottom: "40px",
            filter: "drop-shadow(0 0 40px " + currentSlideData.color + ")",
          }}
        >
          {currentSlideData.icon}
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "30px",
            textShadow: "0 0 60px " + currentSlideData.color + "40",
          }}
        >
          {currentSlideData.title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "36px",
            color: "#cbd5e1",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          {currentSlideData.subtitle}
        </p>

        {/* Progress indicator */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              style={{
                width: index === slideIndex ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor:
                  index === slideIndex ? currentSlideData.color : "#334155",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* LlajtaSoft branding */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "60px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#f8fafc",
        }}
      >
        LlajtaSoft
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "60px",
          fontSize: "20px",
          color: "#94a3b8",
        }}
      >
        {slideIndex + 1} / {slides.length}
      </div>
    </AbsoluteFill>
  );
};

export default ProductPresentation;
