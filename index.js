"use strict";

const Command = require("./Command");

class OsuBeatmapInfo {
    /**
     * @param {Object} params 
     * @param {String} params.apiKey osu Api token，必要
     * @param {String} params.toMappoolRowCmd 输出为mappool行格式的指令，默认为mappoolrow
     * @param {String} params.toCalPPStringCmd 输出为谱面详细信息的指令，默认为calpp
     * @param {String} params.prefix 指令前缀，必须为单个字符，默认为!
     * @param {String} params.prefix2 备用指令前缀，必须为单个字符，默认为！
     */
    constructor(params) {
        this.apiKey = params.apiKey || "";
        this.toMappoolRowCmd = params.toMappoolRowCmd || "mappoolrow";
        this.toCalPPStringCmd = params.toCalPPStringCmd || "calpp";
        this.prefix = params.prefix || "!";
        this.prefix2 = params.prefix2 || "！";
    }

    /**
     * 获得返回消息
     * @param {String} message 输入的消息
     */
    apply(message) {
        try {
            if (!message.length || message.length < 2) return "";
            if (message.substring(0, 1) !== this.prefix && message.substring(0, 1) !== this.prefix2) return "";
            let cmd = new Command(message.substring(1));
            let reply = cmd.apply(this.toMappoolRowCmd, this.toCalPPStringCmd, this.apiKey);
            return reply;
        } catch (ex) {
            console.log(ex);
            return "";
        }
    }

}


module.exports = OsuBeatmapInfo;
