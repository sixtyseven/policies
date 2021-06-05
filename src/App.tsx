import * as React from "react";
import ThemeProvider from "./core-ui/theme/ThemeProvider";
import Policies from "./feature/Policies";

const App = () => (
  <ThemeProvider mode="light">
    <Policies />
  </ThemeProvider>
);

export default App;
