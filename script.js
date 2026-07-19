const software = [

{
    name:"📂 E-BOT Recovery",
    version:"2.1.0",
    size:"152 MB",
    released:"22 Sep 2025 01:33 PM",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v2.1.0/E-BOT-Recovery.exe"
},

{
    name:"📂 E-BOT Recovery",
    version:"1.5.2",
    size:"149 MB",
    released:"16 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v1.5.2/Account-Creator.exe"
},

{
    name:"📂 E-BOT Recovery",
    version:"3.0",
    size:"138 MB",
    released:"10 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v3.0/Proxy-Manager.exe"
},

{
    name:"📂 E_Bot_Match",
    version:"v1.0.0",
    size:"92 MB",
    released:"13 Jul 2026",
    download:"your download link"
},

{
    name:"📂 E_bot_N_self",
    version:"v1.0.0",
    size:"42 MB",
    released:"22 Sep 2025",
    download:"your download link"
},

{
    name:"📂 E_Bot_Rec_Pro",
    version:"v1.0.0",
    size:"113 MB",
    released:"08 Jul 2026",
    download:"your download link"
},
    
{
    name:"📂 E-BOT Recovery",
    version:"4.4",
    size:"157 MB",
    released:"03 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v4.4/Cookie-Checker.exe"
}

];

const table = document.getElementById("softwareTable");

software.forEach(item=>{

table.innerHTML += `

<tr>

<td>${item.name}</td>

<td>${item.version}</td>

<td>${item.size}</td>

<td>${item.released}</td>

<td>

<a href="${item.download}">

<button>⬇ Download</button>

</a>

</td>

</tr>

`;

});
