const software = [
    {
        name: "📂 E-Bot_Hunting_Multi_Browser.exe",
        details: "Multi Browser Number Recovery",
        version: "v1.0.0",
        size: "44 MB",
        released: "20 November 2026",
        download: "https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Hunting_Multi_Browser/E-Bot_Hunting_Multi_Browser.exe"
    },
    
    {
        name: "📂 E-Bot_Number_Hunter.exe",
        details: "Using self VPN/proxy",
        version: "v1.0.5",
        size: "20 MB",
        released: "17 November 2026",
        download: "https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Hunter/E-Bot_Hunter.exe"
    },

    {
        name: "📂 E-Bot_Recovery_Pro.exe",
        details: "Number Recovery.",
        version: "v1.0.5",
        size: "36 MB",
        released: "20 November 2026",
        download: "https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Rec_Pro/E-Bot_Rec_Pro.exe"
    },

    
    {
        name: "📂 E-Bot_Mail_Checker.exe",
        details: "Checks email accounts.",
        version: "v1.0.3",
        size: "29 MB",
        released: "5 September 2026",
        download: "https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Mail_Recovery/E-Bot_Mail_Recovery.exe"
    },
    {
        name: "📂 E-BOT_Number.exe",
        details: "Using Hotspot Shield VPN.",
        version: "v1.0.3",
        size: "18 MB",
        released: "8 October 2026",
        download: "https://github.com/mmehedim/e-bot-download-page/releases/download/E-BOT_Number/E-BOT_Number.exe"
    },
    {
        name: "📂 E-Bot_Proxy_Checker.exe",
        details: "Bulk Proxy Checker",
        version: "v1.0.3",
        size: "31 MB",
        released: "18 November 2026",
        download: "https://github.com/mmehedim/e-bot-download-page/releases/download/E-Bot_Proxy_Checker/E-Bot_Proxy_Checker.exe"
    }

    
];

const table = document.getElementById("softwareTable");

software.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.details}</td>
        <td>${item.version}</td>
        <td>${item.size}</td>
        <td>${item.released}</td>
        <td>
            <a href="${item.download}">
                <button>⬇ Download</button>
            </a>
        </td>
    `;

    table.appendChild(row);
});
