import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // remove when building for production
  // this is to perserve console logs for android studio debugging
  // build: {
  //   minify: "terser",
  //   terserOptions: {
  //     format: {
  //       comments: false,
  //     },
  //     compress: {
  //       drop_console: false,
  //       drop_debugger: false,
  //     },
  //   },
  // },
  //
});
