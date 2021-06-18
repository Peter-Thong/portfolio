document.addEventListener("scroll", () => {
  const st = "scrollTop";
  const sh = "scrollHeight";
  const b = document.body;
  const h = document.documentElement;
  const book = document.querySelector(".book");
  const coverFront = document.querySelector(".book__cover--front");
  const page2 = document.querySelector(".book__page--2");
  const page4 = document.querySelector(".book__page--4");
  const page6 = document.querySelector(".book__page--6");
  const page8 = document.querySelector(".book__page--8");

  let percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

  if (percent > 10) {
    if (!coverFront.classList.contains("flip1")) {
      book.style.transform = "translateX(0%)";
      coverFront.classList.add("flip1");
    }
  } else {
    coverFront.classList.remove("flip1");
    coverFront.style.zIndex = "10";
    book.style.transform = "translateX(-25%)";
  }

  if (percent > 30) {
    if (!page2.classList.contains("flip2")) {
      page2.classList.add("flip2");
      coverFront.style.zIndex = "-10";
    }
  } else {
    page2.classList.remove("flip2");
    page2.style.zIndex = "9";
  }

  if (percent > 50) {
    if (!page4.classList.contains("flip4")) {
      page4.classList.add("flip4");
      page2.style.zIndex = "-9";
    }
  } else {
    page4.classList.remove("flip4");
    page4.style.zIndex = "8";
  }

  if (percent > 70) {
    if (!page6.classList.contains("flip6")) {
      page6.classList.add("flip6");
      page4.style.zIndex = "-8";
    }
  } else {
    page6.classList.remove("flip6");
    page6.style.zIndex = "7";
  }

  if (percent > 90) {
    if (!page8.classList.contains("flip8")) {
      page8.classList.add("flip8");
      page6.style.zIndex = "-7";
    }
  } else {
    page8.classList.remove("flip8");
  }
});
