function toggleMenu() {
    document.querySelector(".Right ul").classList.toggle("show");
}

document.querySelectorAll(".Right ul li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".Right ul").classList.remove("show");
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 10) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Ethical Hacker', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 50,
});

const scriptURL = "https://script.google.com/macros/s/AKfycbwJWDawXjp1g1ekxc1haYnTs8UMop5l7QqrDItp7c5rjX8SU7FySw7gYznskDcmaW8y/exec";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const status = document.getElementById("status");
    btn.innerHTML = "Sending... ⏳";
    status.innerText = "";
    status.className = "form-status"; // reset class

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data),
            mode: 'no-cors'
        });
        status.innerText = "Message sent successfully!";
        status.classList.add("success");
        e.target.reset();
    } catch (error) {
        console.error("Error!", error.message);
        status.innerText = "Failed to send message.";
        status.classList.add("error");
    } finally {
        btn.innerHTML = "Let's Talk →";
    }
});
