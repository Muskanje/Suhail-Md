const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Faisal💔udas]════════\\
global.audio= "my name is Faisal" ;  
global.video= "I love your friend" ;
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/724c9ab488b7e5a07d5f6.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Faisal💔udas" 


global.devs = "923112657705" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923112657705";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,03112657705";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923037484167";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923112657705,923037484167";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBWNDNZVjdxYWhBR3d2Nk43ek03cG51aDVKdnVZSUpSRGZLOHMwRkRTc289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDM3NDg0MTY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QjY2NUMwRThGQkE0NjcyQTM3RjNGQTE0OTYyMEE3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyODM4MjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTmpRWFhXcWpUTFMxSGVmWDhybExNd1wiLFxuICBcInBob25lSWRcIjogXCIzZDBjOWY4Ny0xYjhhLTQzMjYtOGMyOC04MmM4MmRmZWJmMmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICA5NyxcbiAgICAgIDE4NixcbiAgICAgIDE4OCxcbiAgICAgIDEwNixcbiAgICAgIDEwNSxcbiAgICAgIDI0MixcbiAgICAgIDIsXG4gICAgICAxOTEsXG4gICAgICA2OCxcbiAgICAgIDc2LFxuICAgICAgMTEsXG4gICAgICAyNDksXG4gICAgICAxOTgsXG4gICAgICAxMCxcbiAgICAgIDMsXG4gICAgICAxMjEsXG4gICAgICAyMTEsXG4gICAgICA3NyxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMjMsXG4gICAgICAxNDgsXG4gICAgICAxMjIsXG4gICAgICAyMDcsXG4gICAgICAxMDAsXG4gICAgICAxNyxcbiAgICAgIDIyOSxcbiAgICAgIDQ2LFxuICAgICAgMzIsXG4gICAgICAxODAsXG4gICAgICAyNTIsXG4gICAgICAxMDIsXG4gICAgICAyMCxcbiAgICAgIDI0OCxcbiAgICAgIDIxNixcbiAgICAgIDksXG4gICAgICAyMzEsXG4gICAgICAzMixcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUEhBV0FZWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM3NDg0MTY3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR1hTIEJBTktJTkdcIixcbiAgICBcImxpZFwiOiBcIjkwOTU5MjUzNjQ3MzgzOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxRTNaRUdFS1BscGJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkROS2JXSGkzc0JuT1VPeHdtbXhSKy9DeHo3TkpYTGFLTThEOXZCM21EZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3RnJSVEIrYTRLM1J2aE9qSk9Cc20yWVd0Q0J1akw2R3ZTNnV1RG0yb2RTWnNDT0k1cFJvWWJJdGc4T095RGcyNzl3aWcyK2VqRWZXU3BicnliYjBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2T2RFeVN2dVVkRTR1WmRYL2VKVlIyTExGbDBvdnlrbktEa0hYKzJLa0Z0c20rS2N1V3lleDE4d3pqVExoOStXV2FWdldXWEdGamxObVZHUXVOY0xEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMzc0ODQxNjc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI4MzgxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBocFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGhwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1FDdFBYUk5xdVE4Y3NmNmp6Tm9NakFLV0hXeW1hMkZtQTNWdnNtVUZtVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQ3Nzg4NTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MTI1OTY0NDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 my name is Faisal udas love you all friend main kya help kar sakta hoon aapki』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
