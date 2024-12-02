let G = gsap.timeline();

G.from("h2", {
  opacity: 0,
  y: -25,
  duration: 1,
  color: "yellow",
  delay: 0.5,
});
G.from("#nav a", {
  opacity: 0,
  y: -25,
  duration: 1,
  color: "yellow",
  delay: 0.5,
  stagger: 0.5,
});

let anchorall = document.querySelectorAll("#nav a");
anchorall.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
    cursor.style.border = "2px solid yellow";
    cursor.style.backgroundColor = "transparent";
    boxShadow: "0px 0px 200px 50px yellow";
    elem.style.color = "yellow";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "yellow";
    cursor.style.boxShadow = "0px 0px 200px 50px yellow";
    elem.style.color = "white";
  });
});
gsap.from("#resAnchors", {
  transform: "translateX(100%)",
  duration: 0.5,
});
G.from(".about h1", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.5,
  color: "yellow",
  stagger: 1,
});
gsap.to(".content .first", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: ".content",
    scroller: "body",
    start: "top 25%",
    scrub: 2,
  },
});
gsap.to(".content .second", {
  transform: "translateX(200%)",
  scrollTrigger: {
    trigger: ".content",
    scroller: "body",
    start: "top 25%",
    scrub: 2,
  },
});
gsap.to(".content .third", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: ".content",
    scroller: "body",
    start: "top 25%",
    scrub: 2,
  },
});
gsap.to(".content .forth", {
  transform: "translateX(200%)",
  scrollTrigger: {
    trigger: ".content",
    scroller: "body",
    start: "top 25%",
    scrub: 2,
  },
});
gsap.to(".experience h1", {
  transform: "translateX(-160%)",
  scrollTrigger: {
    trigger: ".experience",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    // markers:true,
    scrub: 2,
    pin: true,
  },
});

let line = document.querySelector("#seprater");
let linepath1 = document.getElementById("path1");
let linepath2 = document.getElementById("path2");
let linepath3 = document.getElementById("path3");
let path1 = `M 0 80 Q 500 80 ${line.offsetWidth} 80`;
let path2 = `M 0 100 Q 500 100 ${line.offsetWidth} 100`;
let path3 = `M 0 120 Q 500 120 ${line.offsetWidth} 120`;
linepath1.setAttribute("d", `${path1}`);
linepath2.setAttribute("d", `${path2}`);
linepath3.setAttribute("d", `${path3}`);

line.addEventListener("mousemove", (dets) => {
  const rect = line.getBoundingClientRect();
  const relativeY = dets.clientY - rect.top;
  path1 = `M 0 80 Q 500 ${relativeY - 20} ${line.offsetWidth} 80`;
  path2 = `M 0 100 Q 500 ${relativeY} ${line.offsetWidth} 100`;
  path3 = `M 0 120 Q 500 ${relativeY + 20} ${line.offsetWidth} 120`;

  gsap.to("svg #path1", {
    attr: { d: path1 },
  });
  gsap.to("svg #path2", {
    attr: { d: path2 },
  });
  gsap.to("svg #path3", {
    attr: { d: path3 },
  });
});

line.addEventListener("mouseleave", (dets) => {
  gsap.to("svg #path1", {
    attr: { d: `M 0 80 Q 500 80 ${line.offsetWidth} 80` },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
  gsap.to("svg #path2", {
    attr: { d: `M 0 100 Q 500 100 ${line.offsetWidth} 100` },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
  gsap.to("svg #path3", {
    attr: { d: `M 0 120 Q 500 120 ${line.offsetWidth} 120` },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
});

let mainDiv = document.getElementById("main");
let experienceHeading = document.getElementById("ExpHeading");
let cursor = document.getElementById("cursor");

mainDiv.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    display: "block",
    duration: 0.3,
    x: dets.x,
    y: dets.y,
  });
});
mainDiv.addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    display: "none",
  });
});

experienceHeading.addEventListener("mousemove", () => {
  cursor.innerHTML = "Scroll";
  gsap.to("#cursor", {
    width: "75px",
    duration: 0,
    borderRadius: "50px",
  });
});
experienceHeading.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to("#cursor", {
    width: "20px",
    duration: 0,
    borderRadius: "50%",
  });
});

let resAnchors = document.getElementById("resAnchors");
let resNavbtn = document.getElementById("resNav-btn");
var BtnValue = false;
const resNavbar = () => {
  if (BtnValue == true) {
    gsap.to("#resNav a",{
      x: 500,
      duration:1,
      stagger: 0.5
    })
    BtnValue = false;
    resNavbtn.setAttribute("class", "ri-menu-3-line")
    gsap.to("#resAnchors", {
      transform: "translateX(200%)",
      duration: 0.5,
    });
  } else if (BtnValue == false) {
    gsap.from("#resNav a",{
      x: 500,
      duration:1,
      stagger: 0.5
    })
    BtnValue = true;
    resNavbtn.setAttribute("class", "ri-close-line")
    resNavbtn.setAttribute("style", "border:2px solid white; border-radius: 50%; background: rgba(255, 255, 255, 0.2);")
    gsap.to("#resAnchors", {
      transform: "translateX(0%)",
      display:"flex",
      duration: 0.5,
    });
    gsap.from(resNavbtn,{
      opacity:0,
      transform: "scale 0",
      duration: 1,
      delay: 0.5
    })
  }
};
