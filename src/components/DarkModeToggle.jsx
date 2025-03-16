import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [theme, setTheme] = useState(() => {
        // Prevent SSR issues by checking if window is defined
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "dark";
        }
        return "dark"; // Default theme
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-md"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
