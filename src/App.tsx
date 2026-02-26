import { ThemeProvider } from "@emotion/react";
import { Resume } from "./Resume/Resume";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Resume />
    </ThemeProvider>
  );
}

export { App };
