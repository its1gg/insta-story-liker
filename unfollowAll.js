let buttons = Array.from(document.querySelectorAll("div._ap3a._aaco._aacw._aad6._aade"))
    .filter(button => button.textContent.trim() === "Following");

let index = 0; // متغير لتتبع الزر الحالي

function unfollowNext() {
    if (index >= buttons.length) {
        console.log("✅ تم إلغاء متابعة جميع الحسابات!");
        return;
    }

    let button = buttons[index];
    button.click(); // اضغط على زر "Following"

    setTimeout(() => {
        let confirmButton = document.querySelector("button._a9--"); // زر "Unfollow"
        if (confirmButton) {
            confirmButton.click(); // تأكيد إلغاء المتابعة
            console.log(`🚀 تم إلغاء متابعة الحساب رقم ${index + 1}`);
            index++; // انتقل للزر التالي
            setTimeout(unfollowNext, 2000); // انتظار قليل ثم الانتقال للزر التالي
        } else {
            console.log(`⚠️ لم يتم العثور على زر التأكيد للحساب رقم ${index + 1}`);
        }
    }, 1500); // انتظار 1.5 ثانية قبل البحث عن زر التأكيد
}

// بدء العملية
unfollowNext();
