const buttons = document.querySelectorAll("button");

// تصفية الأزرار التي تحتوي على كلمة "Follow"
const followButtons = Array.from(buttons).filter(btn => btn.textContent.includes("Follow"));

// دالة لتنفيذ النقر على الأزرار بوقت متغير
function clickButtonsWithDelay(index) {
    if (index < followButtons.length) {
        followButtons[index].click();
        console.log(`✅ تم النقر على زر رقم ${index + 1}`);

        // وقت انتظار عشوائي بين 1 إلى 3 ثوانٍ قبل النقر على الزر التالي
        const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

        setTimeout(() => {
            clickButtonsWithDelay(index + 1);
        }, delay);
    } else {
        console.log("🎉 انتهى الضغط على جميع أزرار Follow!");
    }
}

// بدء النقر المتتابع
if (followButtons.length > 0) {
    console.log(`🔍 تم العثور على ${followButtons.length} زر "Follow"، سيتم الضغط عليها بشكل متتابع...`);
    clickButtonsWithDelay(0);
} else {
    console.log("❌ لم يتم العثور على أي أزرار 'Follow'.");
}
