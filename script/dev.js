const path = require("path");
const { spawn } = require("child_process");
const electron = require("electron");
const { createServer } = require("vite");

const log = (message) =>
  console.log(`[${new Date().toISOString()}] ${message}`);

process.env.NODE_ENV = "development";

(async () => {
  try {
    log("Starting development server...");
    const server = await createServer({
      root: process.cwd(),
      server: {
        port: process.env.SERVER_PORT,
      },
    });
    await server.listen();
    log("Development server is running.");

    const child = spawn(
      electron.toString(),
      [path.join(process.cwd(), "electron", "main.js")],
      {
        stdio: "inherit",
      }
    );

    child.on("close", () => {
      log("Child process exited.");
      process.exit();
    });

    child.on("error", (err) => {
      log(`Child process error: ${err}`);
      process.exit(1);
    });
  } catch (error) {
    console.error(error);
  }
})();
