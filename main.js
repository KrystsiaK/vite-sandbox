document.getElementById("btn").addEventListener("click", async () => {
    const { multiply } = await import("./math.js"); // Загружается только при клике
    console.log(multiply(5, 5)); // 25
});
