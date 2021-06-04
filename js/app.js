document.addEventListener("scroll", () => {
  const st = "scrollTop";
  const sh = "scrollHeight";
  const b = document.body;
  const h = document.documentElement;
  const book = document.querySelector(".book");
  const page1 = document.querySelector(".book__page--1");
  const page2 = document.querySelector(".book__page--2");

  let percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

  if (percent > 10) {
    if (!page1.classList.contains("flip")) {
      book.style.transform = "translateX(0%)";
      page1.classList.add("flip");
      page1.onanimationend = () => {
        page1.style.zIndex = "-1";
        console.log("end");
      };
    }
  } else {
    page1.classList.remove("flip");
    page1.style.zIndex = "5";
    book.style.transform = "translateX(-25%)";
  }

  if (percent > 30) {
    if (!page2.classList.contains("flip")) {
      page2.classList.add("flip");
    }
  } else {
    page2.classList.remove("flip");
  }
});
