document.addEventListener("DOMContentLoaded", () => {
    const consoleDiv = document.getElementById("consoleOutput");

    function logToConsole(message) {
        consoleDiv.innerHTML += `<p>> ${message}</p>`;
        consoleDiv.scrollTop = consoleDiv.scrollHeight; // تمرير تلقائي للأسفل عند تحديث السجل
    }

    document.getElementById("clearConsole").addEventListener("click", () => {
        consoleDiv.innerHTML = "";
    });

    document.getElementById("btn1").addEventListener("click", () => {
        logToConsole("🔵 زر 1 تم الضغط عليه! تشغيل find-n-like-in-comments.js...");
    
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["find-n-like-in-comments.js"]
            });
        });
    });

    document.getElementById("btn2").addEventListener("click", () => {
        logToConsole("🟢 زر 2 تم الضغط عليه!");
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["insta-story-liker.js"]
            });
        });
    });

    document.getElementById("btn3").addEventListener("click", () => {
        logToConsole("🟡 زر 3 تم الضغط عليه!");
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["unfollowAll.js"]
            });
        });
    });

    document.getElementById("btn4").addEventListener("click", () => {
        logToConsole("🟠 زر 4 تم الضغط عليه!");
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["autofollow.js"]
            });
        });
    });

    document.getElementById("btn5").addEventListener("click", () => {
        logToConsole("🔴 زر 5 تم الضغط عليه!");
        chrome.scripting.executeScript({
            target: { allFrames: true },
            func: () => console.log("🔴 تنفيذ كود زر 5 في صفحة الويب!")
        });
    });
});
