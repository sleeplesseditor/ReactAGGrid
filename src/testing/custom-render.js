import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const AppContext = React.createContext({})

const Wrapper = ({ children }) => {
  return (
    <AppContext.Provider>
      <MemoryRouter>{children}</MemoryRouter>
    </AppContext.Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };