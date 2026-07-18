const software = [

{
    program:"E-BOT Recovery",
    version:"2.1.0",
    size:"152 MB",
    released:"18 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v2.1.0/E-BOT-Recovery.exe"
},

{
    program:"Account Creator",
    version:"1.5.2",
    size:"149 MB",
    released:"16 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v1.5.2/Account-Creator.exe"
},

{
    program:"Proxy Manager",
    version:"3.0",
    size:"138 MB",
    released:"10 Jul 2026",
    download:"https://github.com/USERNAME/e-bot-download-page/releases/download/v3.0/Proxy-Manager.exe"
},

{
    program:"Cookie Checker",
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

<td>${item.program}</td>

<td>${item.version}</td>

<td>${item.size}</td>

<td>${item.released}</td>

<td>

<a href="${item.download}">

<button>Download</button>

</a>

</td>

</tr>

`;

});
