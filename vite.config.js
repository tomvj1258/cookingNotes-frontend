import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//    plugins: [react()],
//    base: "/cookingNotes-frontend/",
// });

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), "");
   const basePath = env.VITE_BASE_PATH;

   return {
      plugins: [react()],
      base: basePath,
   };
});
