import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./components/Card";
import "./assets/style.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Card />);
