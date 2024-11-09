import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Widget from "../components/Widget";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<main className="h-screen bg--zinc-50 dark:bg-black flex items-center justify-center text-zinc-800 dark:text-zinc-50">
			<Widget />
		</main>
	</StrictMode>,
);
