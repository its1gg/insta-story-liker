let textarea = document.querySelector("textarea[placeholder^='Reply to']");
if (textarea) {
    textarea.value = "x";
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    console.log("تمت الكتابة بنجاح!");
} else {
    console.log("لم يتم العثور على العنصر المطلوب!");
}
