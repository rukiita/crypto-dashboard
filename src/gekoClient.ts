import Coingecko from "@coingecko/coingecko-typescript";

const gekoClient = new Coingecko({
  proAPIKey: process.env["API_KEY"],
  environment: "demo",
  logLevel: "debug",
});

export default gekoClient;
