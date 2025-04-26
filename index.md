---
layout: default
title: "Uyen Vu"
---

<style>
@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in {
  animation: fadeSlide 2s ease forwards;
}
</style>

---

<div class="intro">
  
  <!-- Greeting Line -->
  <div class="fade-in" style="font-size: 2.5rem; margin-bottom: 1.5rem;">
    👩‍💻 Hello, I'm <span style="color: #1a73e8;">Uyen Vu</span>
  </div>

  <!-- Flex container: Image + Description -->
  <div class="fade-in" style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; justify-content: center;">
    
    <!-- Image -->
    <img src="images/profile.png" alt="Uyen Vu"
      style="width: 220px; height: 290px; border-radius: 20%; object-fit: cover;
             box-shadow: 0 4px 12px rgba(0,0,0,0.15);">

    <!-- Description -->
    <div style="flex: 1; min-width: 280px; max-width: 480px; text-align: left;">
      <p style="font-size: 1.2rem;">
        I'm a <strong>Software Developer</strong> passionate about building clean, scalable, and user-friendly web applications.<br><br>
        I specialize in <strong>JavaScript, React, Node.js, and Django</strong>, and love turning ideas into elegant digital solutions.
      </p>
      <p style="margin-top: 1.5rem;">
        <a href="https://www.linkedin.com/in/uyen-vu-sf8358/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a> &nbsp;•&nbsp;
        <a href="https://github.com/uynvu078" target="_blank" rel="noopener noreferrer">💻 GitHub</a> &nbsp;•&nbsp;
        <a href="mailto:uyenvu315@gmail.com">📧 Email Me</a>
      </p>
    </div>

  </div>
</div>


---

<section style="max-width: 600px; margin: 0 auto; text-align: center;">
  <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">🏫 Education</h2>
  <hr style="width: 60%; margin: 0.5rem auto; border: 1px solid #ddd;">

  <div style="font-size: 1.2rem; line-height: 1.6;">
    <strong>University of Houston</strong><br>
    <em>Bachelor of Science in Computer Science</em> — Class of 2025<br>
    <em>Minor in Business Administration</em>
  </div>
</section>

---

<section style="max-width: 700px; margin: 0.5rem auto; text-align: center;">
  <h2 style="font-size: 2.2rem; margin-bottom: 0.3rem;">🌐 Portfolio & Resume</h2>
  <hr style="width: 60%; margin: 0.5rem auto 1rem auto; border: 1px solid #ddd;">
  <p style="font-size: 1.1rem; color: #444; margin-bottom: 2rem;">
    Explore my project showcase and download a copy of my latest resume.  
    Perfect for recruiters, collaborators, and curious devs!
  </p>
  <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
    <a href="https://uynvu078.github.io/Portfolio-UyenVu/" target="_blank" rel="noopener noreferrer" class="custom-button">
      💻 Visit My Portfolio
    </a>
    <a href="https://uynvu078.github.io/Resume.pdf" target="_blank" rel="noopener noreferrer" class="custom-button">
      📄 View My Resume (PDF)
    </a>
  </div>
</section>

---

<section style="max-width: 700px; margin: 2rem auto; text-align: center;">
  <h2 style="font-size: 2.2rem; margin-bottom: 0.3rem;">📈 Featured Projects</h2>
  <hr style="width: 60%; margin: 0.5rem auto; border: 1px solid #ddd;">
</section>

<!-- Project 1 Zentasker -->
<section class="project-card">
  <img src="images/zentasker.png" alt="ZenTasker Preview" style="width: 100%; max-width: 430px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <div style="flex: 1; min-width: 280px;">
    <h3 style="margin-top: 0; text-align: left; font-size: 1.5rem;">ZenTasker – Task Management App</h3>
    <p style="text-align: justify;">A full-stack productivity tool with JWT authentication, category-based task filtering, priority tags, and drag-and-drop functionality.</p>
    <p><strong>Tech:</strong> React, Node.js, Express, MongoDB</p>
    <p style="text-align: left;">
      <a href="https://github.com/uynvu078/ZenTasker-Todo" target="_blank" rel="noopener noreferrer">🔗 GitHub Repo</a> • 
      <a href="https://uynvu078.github.io/ZenTasker-Todo/" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
    </p>
  </div>
</section>

<!-- Project 2 BEAUShop -->
<section class="project-card">
  <img src="images/beau-shop.png" alt="BEAU Shop Preview" style="width: 100%; max-width: 430px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <div style="flex: 1; min-width: 280px;">
    <h3 style="margin-top: 0; text-align: left; font-size: 1.5rem;">BEAU Shop – E-Commerce Website</h3>
    <p style="text-align: justify;">An elegant online storefront with product sorting, cart system, checkout flow, and integrated Stripe payments.</p>
    <p><strong>Tech:</strong> React, Express, MongoDB, Stripe API</p>
    <p style="text-align: left;">
      <a href="https://github.com/uynvu078/BEAUShop" target="_blank" rel="noopener noreferrer">🔗 GitHub Repo</a> • 
      <a href="https://uynvu078.github.io/BEAUShop/" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
    </p>
  </div>
</section>

<!-- Project 3 ChatApp -->
<section class="project-card">
  <img src="images/chatterbox.png" alt="ChatterBox Preview" style="width: 100%; max-width: 430px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <div style="flex: 1; min-width: 280px;">
    <h3 style="margin-top: 0; text-align: left; font-size: 1.5rem;">ChatterBox – Real-Time Chat App</h3>
    <p style="text-align: justify;">A feature-rich messaging platform using Stream Chat API with group channels, custom theming, and Microsoft OAuth login.</p>
    <p><strong>Tech:</strong> React, Stream Chat, Node.js, Express</p>
    <p style="text-align: left;">
      <a href="https://github.com/uynvu078/ChatterBox" target="_blank" rel="noopener noreferrer">🔗 GitHub Repo</a> • 
      <a href="https://uynvu078.github.io/ChatterBox/" target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
    </p>
  </div>
</section>

---

<section style="max-width: 700px; margin: 1rem auto 1.5rem auto; text-align: center;">
  <h2 style="font-size: 2.2rem; margin-bottom: 0.3rem;">🎓 School Project</h2>
  <hr style="width: 60%; margin: 0.5rem auto; border: 1px solid #ddd;">
</section>

<section class="project-card">
  <img src="images/cambridge-project.png" alt="Cambridge Project Preview" style="width: 100%; max-width: 450px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  <div style="flex: 1; min-width: 280px;">
    <h3 style="margin-top: 0; text-align: left; font-size: 1.5rem;">Cambridge Approval System – University Team Project</h3>
    <p style="text-align: justify;">An internal request approval system for academic forms, including delegated approvals, form versioning, dynamic routing, and authentication with Microsoft OAuth.</p>
    <p><strong>Tech:</strong> Django, PostgreSQL, Docker, LaTeX</p>
    <p style="text-align: left;">
      <a href="https://github.com/uynvu078/Cambridge_teamProject" target="_blank" rel="noopener noreferrer">🔗 GitHub Repository</a> • 
      <a href="https://youtu.be/Y1gwqXkWhXM?si=SJFdUItgNU_WTDRj" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>
    </p>
  </div>
</section>

---

<footer style="width: 100%; padding: 3rem 1rem 2rem; background: none; text-align: center;">
  <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin-bottom: 1rem;">
    <a href="https://github.com/uynvu078" target="_blank" rel="noopener noreferrer" style="color: #444; font-size: 1.6rem; text-decoration: none;">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com/in/uyen-vu-sf8358/" target="_blank" rel="noopener noreferrer" style="color: #444; font-size: 1.6rem; text-decoration: none;">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>

  <div style="font-size: 0.95rem; color: #777;">
    © 2025 Uyen Vu. All rights reserved.
  </div>
</footer>


<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
