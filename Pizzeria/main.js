const links = document.querySelectorAll("header a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
    this.scrollIntoView({
      behavior: "smooth",
      inline: "start", 
      block: "nearest"
    });
    });
});
