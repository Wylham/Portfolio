// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Skills Tab Switching
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"))

      // Show the corresponding tab content
      const target = btn.getAttribute("data-target")
      document.getElementById(target).classList.add("active")
    })
  })

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      const filter = btn.getAttribute("data-filter")

      // Filter projects
      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
        } else if (card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Calculate header height for offset
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section")
  const navLinksElements = document.querySelectorAll(".nav-links a")

  window.addEventListener("scroll", () => {
    let current = ""
    const headerHeight = document.querySelector("header").offsetHeight

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerHeight - 100
      const sectionHeight = section.offsetHeight

      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute("id")
      }
    })

    navLinksElements.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Form Validation and Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Basic form validation
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      if (!name || !email || !subject || !message) {
        alert("Por favor, preencha todos os campos.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.")
        return
      }

      // Here you would typically send the form data to a server
      // For this example, we'll just show a success message
      alert("Mensagem enviada com sucesso! Obrigado pelo contato.")
      contactForm.reset()
    })
  }
})
