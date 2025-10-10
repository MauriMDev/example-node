import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { 
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest
    }
  } },
  // Treat most .js files as CommonJS by default (project uses require/module.exports),
  // then explicitly mark some folders as modules where import/export are used.
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["config/**/*.js", "lib/**/*.js", "test/**/*.js"], languageOptions: { sourceType: "module" } },
]);
