# osu-beatmap-info

为聊天bot设计的osu谱面信息查看器/pp查看器

## 使用方法
### osu apiKey
你需要先申请一个[osu apiKey](https://old.ppy.sh/p/api/)
可能需要先登录再重新访问该地址

### 安装
```sh
npm install ArilyChan/osu-beatmap-info
```

### 使用
```javascript
const OsuBeatmapInfo = require("osu-beatmap-info");
let obi = new OsuBeatmapInfo({
    apiKey: "把你的apikey放这里", // osu Api token，必要
    toMappoolRowCmd: "mappoolrow", // 输出为mappool行格式的指令，可省略，默认为mappoolrow
    toCalPPStringCmd: "calpp", // 输出为谱面详细信息的指令，可省略，默认为calpp
    prefixs: ["!", "！"], // 指令前缀，必须为单个字符，默认为["!", "！"]
    // 以下只是为了兼容旧版，不再使用
    // prefix: "!", // 指令前缀，必须为单个字符，可省略，默认为!
    // prefix2: "！" // 备用指令前缀，必须为单个字符，可省略，默认为！
})

let reply = await obi.apply(chatMessage); // 字符串格式
```

### 指令
```javascript
!mappoolrow beatmapId +Mods
!calpp beatmapId +Mods Acc% ComboX MissM
```

### 示例
输入：
```
!mappoolrow 2300458 +DT
```
输出：
```
1101166 ReoNa - Oyasumi no Uta[Insane] // ExSPer
★4.71 BPM: 176
CS/AR/OD/HP: 4.0 / 9.0 / 7.0 / 7.0
Length: 02:54(674x)
osu.ppy.sh/b/2300458
```

输入：
```
!calpp 2300458 +HRDT 95.98% 459x 2m
```
输出：
```
谱面 2300458 ReoNa - Oyasumi no Uta (ExSPer) [Insane]
set： 1101166 模式： Standard 状态： graveyard
CS5.2  AR11.0  OD11.0  HP9.8
BPM: 264 stars: 6.86 max Combo： 674  时长： 01:56

结算 combo: 459  95.98%  2 miss
使用mod：HRDT
计算stars：6.86 stars (3.72 aim, 2.58 speed)
计算pp：265.04 pp (172.68 aim, 56.97 speed, 24.94 acc)
osu.ppy.sh/b/2300458
```