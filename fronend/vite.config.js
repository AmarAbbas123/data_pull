import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/upload": "http://localhost:5000/",
      "/api/pull": "http://localhost:5000/",
      "/api/delete": "http://localhost:5000/",
    },
  },
  plugins: [react()],
});
