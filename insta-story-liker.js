const repeatCount = 30; // عدد التكرارات (يمكنك تغييره)
let currentCount = 0; // عداد التكرار

function performAction() {
    const element = document.querySelector("span[class='x1i64zmx'] span svg path");

    if (element) {
        element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
        element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true }));
        element.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));

        console.log(`✅ تم تنفيذ النقر (${currentCount + 1}/${repeatCount})`);

        // انتظار 1 ثانية ثم تنفيذ الضغط على السهم للأسفل
        setTimeout(() => {
            const event = new KeyboardEvent("keydown", {
                key: "ArrowDown",
                keyCode: 40, // كود السهم للأسفل
                code: "ArrowDown",
                which: 40,
                bubbles: true,
                cancelable: true
            });

            document.dispatchEvent(event);
            console.log("⬇️ تم الضغط على السهم للأسفل");

            currentCount++;
            if (currentCount < repeatCount) {
                setTimeout(performAction, 1000); // تنفيذ الوظيفة مرة أخرى بعد ثانية
            } else {
                console.log("🎯 انتهت جميع التكرارات!");
            }
        }, 1000);
    } else {
        console.log("❌ لم يتم العثور على العنصر!");
    }
}

// بدء التنفيذ
performAction();
