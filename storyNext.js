function pressArrowDown() {
    const event = new KeyboardEvent("keydown", {
        key: "ArrowDown",
        keyCode: 40, // كود السهم للأسفل
        code: "ArrowDown",
        which: 40,
        bubbles: true,
        cancelable: true
    });

    document.dispatchEvent(event);
}

// تشغيل الوظيفة
pressArrowDown();
