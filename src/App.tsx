import * as React from "react";
import { IThemeMode } from "./core-ui/models";
import ThemeProvider from "./core-ui/theme/ThemeProvider";
import Policies from "./feature/Policies";

const App = () => {
  const [themeMode, setThemeMode] = React.useState<IThemeMode>("light");
  const onThemeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const selectedIndex = e.currentTarget.selectedIndex;
    if (selectedIndex === 1) {
      setThemeMode("dark");
    } else if (selectedIndex === 2) {
      setThemeMode("pink");
    } else {
      setThemeMode("light");
    }
  };
  return (
    <ThemeProvider mode={themeMode}>
      <Policies />
      <div>
        <h3>Bonus: choose a theme: </h3>
        <select onChange={onThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="pink">Pink</option>
        </select>
      </div>
    </ThemeProvider>
  );
};

export default App;
