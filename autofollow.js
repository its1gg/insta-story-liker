function clickFollowButtons() {
    const buttons = document.querySelectorAll("button");
    
    // تصفية الأزرار بحيث تحتوي فقط على "Follow" وليس "Following"
    const followButtons = Array.from(buttons).filter(btn => 
        btn.textContent.trim() === "Follow"
    );

    if (followButtons.length === 0) {
        console.log("❌ لم يتم العثور على أي أزرار 'Follow' الصحيحة.");
        return;
    }

    console.log(`🔍 تم العثور على ${followButtons.length} زر "Follow"، سيتم الضغط عليها بشكل متتابع...`);

    function clickNext(index) {
        if (index < followButtons.length) {
            followButtons[index].click();
            console.log(`✅ تم النقر على زر رقم ${index + 1}`);

            setTimeout(() => {
                clickFollowButtons(); // إعادة البحث لضمان العثور على الأزرار الجديدة
            }, Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000);
        } else {
            console.log("🎉 انتهى الضغط على جميع أزرار Follow!");
        }
    }

    clickNext(0);
}

// تشغيل الكود بعد 3 ثوانٍ لمنح الصفحة فرصة لتحميل الأزرار
setTimeout(clickFollowButtons, 3000);
