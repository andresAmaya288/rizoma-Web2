import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AboutSection from "@/components/AboutSection";
import EventSection from "@/components/EventSection";
import FooterSection from "@/components/FooterSection";
import TshirtSection from "@/components/TshirtSection";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe("AboutSection", () => {
  it("renders heading and content", () => {
    render(<AboutSection />);
    expect(screen.getByText("Sobre Rizoma")).toBeInTheDocument();
    expect(screen.getByText(/Frente a un mundo que nos separa/)).toBeInTheDocument();
  });
});

describe("EventSection", () => {
  it("renders event info centered", () => {
    render(<EventSection />);
    expect(screen.getByText("El evento")).toBeInTheDocument();
    expect(screen.getByText("Módulo Azul")).toBeInTheDocument();
    expect(screen.getByText("4 de abril")).toBeInTheDocument();
    expect(screen.getByText(/precios populares/)).toBeInTheDocument();
    expect(screen.getByText(/en efectivo/)).toBeInTheDocument();
  });

  it("renders all schedule items", () => {
    render(<EventSection />);
    expect(screen.getByText("Mercadillo local")).toBeInTheDocument();
    expect(screen.getByText("Actuaciones en vivo")).toBeInTheDocument();
    expect(screen.getByText("DJs")).toBeInTheDocument();
    expect(screen.getByText("Micro abierto de poesía")).toBeInTheDocument();
  });
});

describe("TshirtSection", () => {
  it("renders t-shirt models and form", () => {
    render(<TshirtSection />);
    expect(screen.getByText("Camisetas")).toBeInTheDocument();
    expect(screen.getAllByText("Rizoma Negra").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Rizoma Blanca").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Rizoma Verde").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("submits the reservation form", () => {
    render(<TshirtSection />);
    fireEvent.change(screen.getByPlaceholderText("Nombre"), { target: { value: "Test" } });
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "test@test.com" } });
    fireEvent.click(screen.getByRole("button", { name: /reservar camiseta/i }));
    // Form should reset after submit
    expect(screen.getByPlaceholderText("Nombre")).toHaveValue("");
  });
});

describe("FooterSection", () => {
  it("renders social links and message", () => {
    render(<FooterSection />);
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("Telegram")).toBeInTheDocument();
    expect(screen.getByText(/Cultura viva desde abajo/)).toBeInTheDocument();
  });
});
