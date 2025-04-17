const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "MTA4Njk5MDUzNzAyODAyNjQ0MA.GfpcMs.FwkqbRfxWo5_XjwicxLaxOzkU6qDsbH6HnIxPE",
  prefix: "sn.",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "b3f28c18f585754662e1b8b9265f531b",
  }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")
