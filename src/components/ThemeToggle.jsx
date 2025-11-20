import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={"z-50 pb-4"}>
      {!isDarkMode ? (
        <div className="flex items-end">
          <img
            src="/themeicons/clickmeblack.png"
            alt="Click Me Text"
            className="h-50 w-38 pb-2"
          />
          <img
            src="/themeicons/sunicon.PNG"
            alt="Sun"
            className="h-30 w-30 animate-float"
          />
        </div>
      ) : (
        <div className="flex items-end">
          <img
            src="/themeicons/clickmewhite.png"
            alt="Click Me Text"
            className="h-50 w-38 pb-2"
          />
          <img
            src="/themeicons/moonicon.PNG"
            alt="Moon"
            className="h-30 w-30 animate-float"
          />
        </div>
      )}
    </button>
  );
};
