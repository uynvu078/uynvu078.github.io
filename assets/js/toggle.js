document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".container .header").forEach(header => {
        header.addEventListener("click", function () {
            let content = this.nextElementSibling;
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });
});
