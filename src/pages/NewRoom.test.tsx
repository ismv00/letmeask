import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NewRoom } from "./NewRoom";

const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("New Room", () => {
  it("should render newroom page properly", () => {
    renderWithRouter(<NewRoom />);
    expect(screen.getByText(/Crie salas de Q&A ao-vivo/i)).toBeInTheDocument();
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
