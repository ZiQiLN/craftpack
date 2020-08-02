import { Module } from "module";
import signale from "signale";

const module = new Module("", null);
module.paths = Module._nodeModulePaths(
  process.env.TYPESCRIPT_LOOKUP_PATH || process.cwd() + "/"
);

let typescript;

try {
  signale.info("buildkit: Using typescript@" + typescript.version + " (local)");
  typescript = module.require("typescript");
} catch (e) {
  typescript = require("typescript");
  signale.info(
    "buildkit: Using typescript@" + typescript.version + " (buildkit build-in)"
  );
}

export typescript
