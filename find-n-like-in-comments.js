(function likeAllComments() {
    function getRandomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function findAndClickLikes(attempt = 1) {
        console.log(`🔍 المحاولة ${attempt}: البحث عن أزرار اللايك...`);

        const likeButtons = document.querySelectorAll('svg[aria-label="Like"]');

        if (likeButtons.length === 0) {
            console.log(`❌ لم يتم العثور على أزرار لايك! إعادة المحاولة بعد 1 ثانية...`);
            setTimeout(() => findAndClickLikes(attempt + 1), 1000); // إعادة البحث بعد 1 ثانية
            return;
        }

        console.log(`✅ تم العثور على ${likeButtons.length} زر لايك!`);

        let successCount = 0;

        likeButtons.forEach((svg, index) => {
            setTimeout(() => {
                try {
                    let parentButton = svg.closest("button"); // البحث عن أقرب زر button
                    let parentDiv = svg.closest("div[role='button']"); // البحث عن div قابل للضغط إذا لم يوجد button

                    if (!parentButton && parentDiv) {
                        parentButton = parentDiv; // استخدم div كزر إذا لم نجد button
                    }

                    if (parentButton) {
                        parentButton.scrollIntoView({ behavior: "smooth", block: "center" });
                        setTimeout(() => {
                            parentButton.click();
                            console.log(`❤️ تم الضغط على زر اللايك رقم ${index + 1}`);
                            successCount++;
                        }, getRandomDelay(200, 500)); // تأخير عشوائي بعد التمرير
                    } else {
                        console.log(`⚠️ لم يتم العثور على زر الأب (button أو div) لزر لايك رقم ${index + 1}`);
                    }

                    if (index === likeButtons.length - 1) {
                        console.log(`🎉 تم تنفيذ ${successCount} لايك بنجاح!`);
                    }
                } catch (error) {
                    console.log(`❌ خطأ أثناء محاولة اللايك: ${error}`);
                }
            }, index * getRandomDelay(2000, 3000)); // تأخير عشوائي بين 2 - 3 ثوانٍ بين كل ضغطة
        });
    }

    findAndClickLikes();
})();
