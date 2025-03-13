const element = document.querySelector("span[class='x1i64zmx'] span svg path");

if (element) {
    element.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
    element.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true }));
    element.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
} else {
    console.log("❌ لم يتم العثور على العنصر!");
}
