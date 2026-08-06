document.getElementById("downloadmenu").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "menu.pdf";
    link.download = "menu.pdf";
    link.click();
});