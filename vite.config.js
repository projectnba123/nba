import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // When your frontend calls `/api`, it'll proxy to Sportradar
      "/api": {
        target: "https://api.sportradar.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: true,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
