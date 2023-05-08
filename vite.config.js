import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "src/assets/images", dest: "dist/assets" }],
    }),
  ],
  server: {
    port: 3000,
  },
});
