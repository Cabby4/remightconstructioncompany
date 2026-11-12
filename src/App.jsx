
import { useState } from "react";
import {
  Building2,
  Menu,
  X,
  ArrowUpRight,
  HardHat,
  House,
  Ruler,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Building Construction",
    description:
      "Quality residential and commercial construction, managed with attention to detail and lasting value.",
  },
  {
    icon: House,
    number: "02",
    title: "Real Estate Consultancy",
    description:
      "Professional guidance to help you make informed property and real estate investment decisions.",
  },
  {
    icon: Ruler,
    number: "03",
    title: "Project Management",
    description:
      "Practical project coordination, supervision, and planning from the early stages to completion.",
  },
];

const projects = [
  {
    category: "FLOORING PROJECTS",
    title: "Quality Flooring & Finishing",
    image: "/images/7.jpeg",
  },
  {
    category: "DUPLEX BUILDINGS",
    title: "Modern Duplex Construction",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "HOTEL PROJECTS",
    title: "Hospitality & Hotel Developments",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "CHURCH PROJECTS",
    title: "Church Construction & Development",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "FOUNDATION WORKS",
    title: "Strong Foundations & Structural Works",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "COMMERCIAL BUILDINGS",
    title: "Commercial Building Developments",
    image:
      "/images/iyanoba 3.jpg",
  },
  {
    category: "INTERIOR FINISHING",
    title: "Interior Design & Finishing",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "RENOVATION PROJECTS",
    title: "Building Renovation & Upgrades",
    image: "/images/photo_2026-06-16_22-45-07.jpg",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectCategory, setActiveProjectCategory] =
    useState("ALL");

  const projectCategories = [
    "ALL",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeProjectCategory === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeProjectCategory
        );

  const closeMenu = () => setMenuOpen(false);

  const logo = (
    <img
      className="brand-logo"
      src="/images/Main Logo.jpg"
      alt="Remight Construction and Real Estate Company"
    />
  );

  return (
    <>
      <div className="topbar">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>
            Building with purpose. Investing with confidence.
          </span>
          <a href="mailto:remightconstruction@gmail.com">
            <Mail size={14} /> remightconstruction@gmail.com
          </a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg remight-nav sticky-top">
        <div className="container">
          <a
            className="navbar-brand brand"
            href="#home"
            onClick={closeMenu}
          >
            {logo}
            <span className="brand-text">
              <strong>REMIGHT</strong>
              <small>CONSTRUCTION & REAL ESTATE</small>
            </span>
          </a>

          <button
            className="mobile-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div
            className={`nav-links ${
              menuOpen ? "nav-links-open" : ""
            }`}
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a
              className="nav-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Let's Talk <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow">
                <span /> CONSTRUCTION. PROPERTY. EXCELLENCE.
              </div>

              <h1>
                Building Your
                <br />
                Vision. <span>Creating</span>
                <br />
                Lasting Value.
              </h1>

              <p>
                Your trusted partner in construction and real estate.
                We turn ambitious ideas into enduring spaces and
                smarter property opportunities.
              </p>

              <div className="hero-actions">
                <a className="btn-primary-custom" href="#services">
                  Explore Our Services <ArrowUpRight size={18} />
                </a>
                <a className="btn-outline-custom" href="#projects">
                  View Our Projects
                </a>
              </div>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              <span>Built on trust. Defined by quality.</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="container">
              <span>CONSTRUCTION</span>
              <span className="hero-bottom-dot">•</span>
              <span>REAL ESTATE</span>
              <span className="hero-bottom-dot">•</span>
              <span>CONSULTANCY</span>
            </div>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="intro-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85"
                    alt="Modern commercial architecture"
                    className="intro-image"
                  />
                  <div className="image-caption">
                    <Building2 size={22} />
                    <span>Spaces designed for the future</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 intro-copy">
                <div className="eyebrow">
                  <span /> ABOUT REMIGHT
                </div>

                <h2>
                  More Than Buildings.
                  <br />
                  <span>We Build Confidence.</span>
                </h2>

                <p>
                  Remight Construction and Real Estate Company is
                  focused on delivering dependable construction
                  services and practical real estate solutions.
                </p>

                <p>
                  We believe every project deserves thoughtful
                  planning, professional execution, clear communication,
                  and a commitment to quality.
                </p>

                <div className="intro-points">
                  <div><CheckCircle2 /> Quality-focused delivery</div>
                  <div><CheckCircle2 /> Client-centred service</div>
                  <div><CheckCircle2 /> Practical property solutions</div>
                </div>

                <a className="text-link" href="#contact">
                  Get to Know Us <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span /> WHAT WE DO
                </div>
                <h2>
                  Solutions Built Around
                  <br />
                  <span>Your Ambitions.</span>
                </h2>
              </div>

              <p>
                From construction planning to property decisions,
                we help you move forward with greater confidence.
              </p>
            </div>

            <div className="row g-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    className="col-md-6 col-lg-4"
                    key={service.number}
                  >
                    <article className="service-card">
                      <div className="service-top">
                        <div className="service-icon">
                          <Icon size={28} />
                        </div>
                        <span>{service.number}</span>
                      </div>

                      <h3>{service.title}</h3>
                      <p>{service.description}</p>

                      <a
                        href="#contact"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        Discuss your project <ArrowUpRight size={17} />
                      </a>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span /> OUR WORK
                </div>
                <h2>
                  A Vision for
                  <br />
                  <span>Better Spaces.</span>
                </h2>
              </div>

              <p>
                Explore different construction and property project
                categories to see the types of work that inspire us.
              </p>
            </div>

            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects by category"
            >
              {projectCategories.map((category) => {
                const isActive =
                  activeProjectCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    className={`project-filter ${
                      isActive ? "active" : ""
                    }`}
                    aria-pressed={isActive}
                    onClick={() =>
                      setActiveProjectCategory(category)
                    }
                    style={{
                      padding: "10px 15px",
                      color: isActive ? "#ffffff" : "#304158",
                      background: isActive ? "#102b50" : "#ffffff",
                      border: `1px solid ${
                        isActive ? "#102b50" : "#dce4ed"
                      }`,
                      fontSize: "11px",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {category === "ALL" ? "ALL PROJECTS" : category}
                  </button>
                );
              })}
            </div>

            <div className="row g-4">
              {filteredProjects.map((project, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={project.title}
                >
                  <article className="project-card">
                    <div className="project-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="project-info">
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                      <a
                        href="#contact"
                        aria-label={`Enquire about ${project.title}`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <p className="project-disclaimer">
              These images illustrate our design direction and are
              not representations of verified completed Remight
              projects.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-icon">
                <HardHat size={34} />
              </div>

              <div>
                <div className="eyebrow light-eyebrow">
                  <span /> LET'S BUILD SOMETHING
                </div>

                <h2>
                  Have a Project in Mind?
                  <br />
                  <span>Let's Make It Happen.</span>
                </h2>

                <p>
                  Tell us what you have in mind. Let's explore the
                  right solution together.
                </p>
              </div>

              <a className="btn-white-custom" href="#contact">
                Start a Conversation <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="eyebrow">
                  <span /> CONTACT US
                </div>

                <h2>
                  Let's Talk About
                  <br />
                  <span>Your Next Move.</span>
                </h2>

                <p className="contact-description">
                  Whether you're planning a building project or
                  exploring property opportunities, we'd love to hear
                  from you.
                </p>

                <div className="contact-detail">
                  <Mail />
                  <div>
                    <small>EMAIL US</small>
                    <a href="mailto:remightconstruction@gmail.com">
                      remightconstruction@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <MapPin />
                  <div>
                    <small>OUR LOCATION</small>
                    <span>Ago-Okota Palace Way, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <form
                  className="contact-form"
                  action="https://formsubmit.co/remightconstruction@gmail.com"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Remight Website Enquiry"
                  />

                  <input
                    type="hidden"
                    name="_captcha"
                    value="true"
                  />

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Full name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="service">
                        How Can We Help?
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option>Building Construction</option>
                        <option>Real Estate Consultancy</option>
                        <option>Project Management</option>
                        <option>Renovation</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="message">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        placeholder="Write your message here..."
                      />
                    </div>

                    <div className="col-12">
                      <button
                        className="btn-primary-custom"
                        type="submit"
                      >
                        Send Enquiry <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

<footer className="footer">
  <div className="container">
    <div className="footer-main">
     
        <a className="navbar-brand brand footer-brand" href="#home">
          <img
            className="brand-logo"
            src="/images/Main Logo.jpg"
            alt="Remight logo"
          />

          <span className="brand-text">
            <strong>REMIGHT</strong>
            <small>CONSTRUCTION & REAL ESTATE COMPANY</small>
          </span>
        </a>


      <p>
        Building with purpose.
        <br />
        Investing with confidence.
      </p>

      <a href="mailto:remightconstruction@gmail.com">
        <Mail size={16} />
        Get in touch
      </a>
    </div>

    <div className="footer-links">
      <div>
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Our Services</a>
        <a href="#projects">Our Projects</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div>
        <h4>Our Services</h4>
        <a href="#services">Building Construction</a>
        <a href="#services">Real Estate Consultancy</a>
        <a href="#services">Project Management</a>
        <a href="#projects">Flooring & Finishing</a>
        <a href="#projects">Renovation Projects</a>
      </div>

      <div>
        <h4>Contact Information</h4>
        <p>
          <MapPin size={16} />
          Ago-Okota Palace Way, Lagos, Nigeria
        </p>
        <a href="mailto:remightconstruction@gmail.com">
          <Mail size={16} />
          remightconstruction@gmail.com
        </a>
        <a
          href="https://wa.me/8085447180"
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={16} />
          WhatsApp Enquiries
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <span>
        © {new Date().getFullYear()} Remight Construction and Real Estate
        Company. All rights reserved.
      </span>

      <a href="#home">Back to top ↑</a>
    </div>
  </div>
</footer>


      <a
        className="floating-contact"
        href="https://wa.me/8085447180"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Remight on WhatsApp"
      >
        <Phone size={20} />
        <span>Let's Talk</span>
      </a>
    </>
  );
}

export default App;
