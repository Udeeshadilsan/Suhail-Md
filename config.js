const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_30_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDg1LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNK2VGWjhySE5hd3FYMGU1T2h4MmtmdjZsL1lKeEZPR3hFS0VCYWdSazRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfTXM3N0FnMVI0aVQ0dVVYMUdYYWR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgwYTZkMTI2LWJmZDQtNGU0Mi1hOWQ1LWMwMDY0ZDhiZjA1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA4LFxuICAgICAgNSxcbiAgICAgIDIzMSxcbiAgICAgIDQ0LFxuICAgICAgMjQ1LFxuICAgICAgMjE2LFxuICAgICAgMTA3LFxuICAgICAgMTUzLFxuICAgICAgMTM2LFxuICAgICAgMjQsXG4gICAgICAxMDAsXG4gICAgICAxOSxcbiAgICAgIDIyMyxcbiAgICAgIDE4MyxcbiAgICAgIDE3NixcbiAgICAgIDYxLFxuICAgICAgMjE1LFxuICAgICAgMjQsXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAyNDgsXG4gICAgICA1MCxcbiAgICAgIDU2LFxuICAgICAgMjQxLFxuICAgICAgNTUsXG4gICAgICAyMDAsXG4gICAgICAyMDAsXG4gICAgICA3MyxcbiAgICAgIDE2MixcbiAgICAgIDE0NSxcbiAgICAgIDIxOSxcbiAgICAgIDg2LFxuICAgICAgMTU0LFxuICAgICAgMjAzLFxuICAgICAgMjMwLFxuICAgICAgMjAsXG4gICAgICAxNTUsXG4gICAgICAxNzcsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKOEJNS1FXQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODc0NTk3OTU6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5OTIyMDkwMTUyMTg3OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AraXg1WUhFTDd4MXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMWdxamdxVjZ4ZTgxOGJPZDdFRTZqeUhDb1lwYWhZYTRhOGcyRnVnV1NWWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvWGpTRDZJQkg3ZWlOY20vbnFuYllCeWdDUTFyRVpWN2dGbmcyYjhaR3pjYmhVRWRBK3dENEVLbjhYMkd2REt1a1JsK1Qva3o1ZFBUbHJqUGcyOHJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiZjIwaWg4MnlFZHlySmg0RmN1eW1BYkZjNCtTckNLOHJUbFVDVDd0ajdldDQ0a2l2WVZoRmxSVGNrZkNVUkVYVW9pUTdZOExqamVFbjNaRmhOdStEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzQ1OTc5NToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5OTEwNDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQeDRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB4NC5qc29uIjogIntcImtleURhdGFcIjpcIkJuUTcwTmQzbnB1Wms0TFMvcTVSYkhtRmR4THYranpOeTAyN0tFaTM2MzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNjM1MzI3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODk4MjM5NjE0NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝚁𝙰𝚅𝙴𝙴𝚂𝙷𝙰_𝙱𝙴𝙰💜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
