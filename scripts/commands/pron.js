module.exports.config = {
  name: "pron",
  version: "5.0",
  permission: 0,
  credits: "ArYan 🐔",
  description: "pron xvideo video",
  premium: false,
  prefix: true, 
  category: "Media", 
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var ArYan = ["X video 🥵🥵"];
  var know = ArYan[Math.floor(Math.random() * ArYan.length)];
  var link = [
"https://i.imgur.com/kOsVsYz.mp4",
"https://i.imgur.com/7QrEMxo.mp4",
"https://i.imgur.com/jcCNkVY.mp4",
"https://i.imgur.com/d0cMFv0.mp4",
"https://i.imgur.com/Zq9W2DR.mp4",
"https://i.imgur.com/0mrZxLC.mp4",
"https://i.imgur.com/IxN5tpr.mp4",
"https://i.imgur.com/CutKScB.mp4",
"https://i.imgur.com/JavXMee.mp4",
"https://i.imgur.com/jJ6BFii.mp4",
"https://i.imgur.com/i2ttvnP.mp4",
"https://i.imgur.com/jJ6BFii.mp4",
"https://i.imgur.com/dii58yw.mp4",
"https://i.imgur.com/Nmjp1Ra.mp4",
"https://i.imgur.com/wsT40Et.mp4",
"https://i.imgur.com/BekKs7H.mp4",
"https://i.imgur.com/KOsbJwt.mp4",
"https://i.imgur.com/EY0VypQ.mp4",
"https://i.imgur.com/RWSbJyr.mp4",
"https://i.imgur.com/kOsVsYz.mp4",
"https://i.imgur.com/oPhyPMt.mp4",
"https://i.imgur.com/61coeWu.mp4",
"https://i.imgur.com/VozN9qT.mp4",
"https://i.imgur.com/qw2RdGu.mp4",
"https://i.imgur.com/Qu7rd5N.mp4",
"https://i.imgur.com/Gt2zsAN.mp4",
"https://i.imgur.com/Gt2zsAN.mp4",
"https://i.imgur.com/zkHMbgc.mp4",
"https://i.imgur.com/mZf5VBY.mp4",
"https://i.imgur.com/TQmGkcQ.mp4",
"https://i.imgur.com/xgjcmiw.mp4",
"https://i.imgur.com/62QenQs.mp4",
"https://i.imgur.com/C6VXiqE.mp4",
"https://i.imgur.com/DJNwhDg.mp4",
"https://i.imgur.com/YkwmHak.mp4",
"https://i.imgur.com/TQmGkcQ.mp4",
"https://i.imgur.com/xgjcmiw.mp4",
"https://i.imgur.com/62QenQs.mp4",
"https://i.imgur.com/qyhpr1x.mp4",
"https://i.imgur.com/koLsZLc.mp4",
"https://i.imgur.com/URo8bLE.mp4",
"https://i.imgur.com/14eg58m.mp4"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
