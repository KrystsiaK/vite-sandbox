console.log("Main script loaded!");

document.getElementById("btn").addEventListener("click", async () => {
    const { greet } = await import("./utils.js");
    console.log(greet("Кирыл"));
});
