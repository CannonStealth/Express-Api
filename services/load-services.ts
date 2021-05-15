import { join } from "path";
import { readdirSync, lstatSync } from "fs";
import app from "../app"

async function load(dir: string) {

    const folders = readdirSync(join(require.main.path, dir));
    for (const folder of folders) {
      if (lstatSync(join(require.main.path, dir, folder)).isDirectory()) {
        await load(join(dir, folder));
      } else {
          const file = (await import(join(require.main.path, dir, folder))).default;
          if (file.ignored) continue;
          await file.run(app)
          console.log("Loading " + folder.split(".")[0])
      }
    }
}

export default load