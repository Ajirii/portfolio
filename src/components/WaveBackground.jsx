import Wave from "react-wavify";
import { useTheme } from "../context/ThemeContext";

export const WaveBackground = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed bottom-0 right-0 left-0 h-1/3 md:h-1/3 overflow-hidden pointer-events-none z-0">
      {isDarkMode ? (
        <Wave
          fill="url(#gradient)"
          paused={false}
          style={{ display: "flex", height: "100%" }}
          options={{
            height: 50,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#1E5880" />
              <stop offset="90%" stopColor="#8fc3db" />
            </linearGradient>
          </defs>
        </Wave>
      ) : (
        <div className="fixed bottom-0 right-0 left-0 h-1/3 md:h-1/3 overflow-hidden pointer-events-none z-0">
          <Wave
            fill="url(#gradient)"
            paused={false}
            style={{ display: "flex", height: "100%" }}
            options={{
              height: 50,
              amplitude: 40,
              speed: 0.15,
              points: 3,
            }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%" stopColor="#70C2D7" />
                <stop offset="90%" stopColor="#CAECFB" />
              </linearGradient>
            </defs>
          </Wave>
        </div>
      )}
    </div>
  );
};
