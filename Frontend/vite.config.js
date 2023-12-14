import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //update your Vite config to allow access and prevent issues in the container
  server: {
    host: true,
    strictport: true,
    port: 5173,
  },
  plugins: [react()],
});

//old method without cors
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/test": {
//         target: "http://localhost:8000",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });
