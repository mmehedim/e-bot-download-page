const software = [

{
    name:"📂 E-Bot_Number_Hunter.exe",
    version:"v1.0.0",
    size:"17 MB",
    released:"19 Jul 2026",
    download:"https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Hunter/E-Bot_Hunter.exe"
},

{
    name:"📂 E-Bot_Recovery_Pro.exe",
    version:"v1.0.0",
    size:"36 MB",
    released:"19 Jul 2026",
    download:"https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Rec_Pro/E-Bot_Rec_Pro.exe"
},

    
{
    name:"📂 E-Bot_Mail_Checker.exe",
    version:"v1.0.0",
    size:"29 MB",
    released:"19 Jul 2026",
    download:"https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Mail_Recovery/E-Bot_Mail_Recovery.exe"
},

{
    name:"📂 E-BOT_Number.exe",
    version:"v1.0.0",
    size:"18 MB",
    released:"19 Jul 2026",
    download:"https://github.com/mmehedim/e-bot-download-page/releases/download/E-BOT_Number/E-BOT_Number.exe"
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
