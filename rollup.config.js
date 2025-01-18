import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import pkg from "./package.json" assert { type: "json" };

export default defineConfig({
	input: {
		[pkg.name]: "src/index.js",
	},
	output: {
		dir: "lib",
		format: "es",
	},
	plugins: [nodeResolve(), commonjs()],
});
