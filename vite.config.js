import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const someValue = process.env.SOME_ENV_VARIABLE;

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   npm,
//   assetsInclude: ["**/*.glb"],
// });
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
});

// import { resolve } from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   npm,
//   assetsInclude: ["**/*.glb"],

//   build: {
//     lib: {
//       entry: resolve(__dirname, "src/index.ts"),
//       name: "myLib",
//       fileName: "myLib",
//     },
//     rollupOptions: {
//       external: [/^node:\w+/], // <-- ignores all 'node:*'
//     },
//   },
// });
