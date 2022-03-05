import { screen, render } from "@testing-library/react";
import { AuthContextProvider } from "contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";

import { NewRoom } from "./NewRoom";

// todo: fix implementation of this mocks
// todo: move this to an config file rtl
jest.mock("firebase/compat/app", () => {
  return {
    initializeApp: jest.fn(),
    auth: jest.fn().mockResolvedValue({
      GoogleAuthProvider: jest.fn(),
      signInWithPopup: jest.fn().mockResolvedValue({
        user: { id: "123", name: "jhon doe", avatar: "" },
      }),
    }),
    database: jest.fn(),
  };
});

// todo: move this to an config file rtl
const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

// todo: move this to an config file rtl
function AuthWrapper(props: any): any {
  return <AuthContextProvider {...props} />;
}

describe("New Room", () => {
  it("should render newroom page properly", async () => {
    renderWithRouter(
      <AuthWrapper>
        <NewRoom />
      </AuthWrapper>
    );

    // fireEvent.click(screen.getByText(/call login/i));

    expect(
      await screen.findByText(/Crie salas de Q&A ao-vivo/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tire as dúvidas da sua audiência em tempo real/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Crie uma nova sala/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Quer entrar em uma sala existente?/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/clique aqui/i)).toBeInTheDocument();
  });
});
