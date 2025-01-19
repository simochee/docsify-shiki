import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import pkg from "./package.json" assert { type: "json" };

export default defineConfig({
	input: {
		[pkg.name]: "src/index.js",
	},
	output: {
		dir: "lib",
		format: "es",
		sourcemap: true,
	},
	external: [/^https:\/\/esm\.sh\//],
	plugins: [nodeResolve(), commonjs(), terser()],
});
