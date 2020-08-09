"use strict";

const OsuBeatmapInfo = require("./index");
let obi = new OsuBeatmapInfo({
    apiKey: require("./apiToken.json").apiToken,
    toMappoolRowCmd: "m",
    toCalPPStringCmd: "c",
    prefix: "?",
    prefix2: "？"
})

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line", async (line) => {
    let output = await obi.apply(line);
    console.log(output);
});
