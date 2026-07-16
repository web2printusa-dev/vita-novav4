"use client"

import type React from "react"
import { useState } from "react"

type PageId = "home" | "about" | "approach" | "programs" | "insurance" | "contact"

const TABS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Mac & Laura" },
  { id: "approach", label: "Our Approach" },
  { id: "programs", label: "Programs" },
  { id: "insurance", label: "Insurance & Payment" },
  { id: "contact", label: "Get Started" },
]

function VNLogoSmall() {
  return (
    <svg viewBox="0 0 64 56" fill="none" style={{ width: 22, height: 20 }} aria-hidden="true">
      <polyline
        points="10,4 32,50 54,4"
        stroke="#f0c060"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="17" y1="44" x2="17" y2="14" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="14" x2="47" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="14" x2="47" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="50" r="3" fill="#f0c060" />
    </svg>
  )
}

function VNLogoLarge({ width = 52 }: { width?: number }) {
  return (
    <svg viewBox="0 0 64 56" fill="none" style={{ width, height: (width * 56) / 64 }} aria-hidden="true">
      <polyline
        points="10,4 32,50 54,4"
        stroke="#f0c060"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="17" y1="44" x2="17" y2="14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="14" x2="47" y2="44" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="14" x2="47" y2="44" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="50" r="3" fill="#f0c060" />
    </svg>
  )
}

function Footer({ full = false }: { full?: boolean }) {
  if (full) {
    return (
      <footer>
        <div className="footer-left">
          Mac and Mac Power Partnership LLC d/b/a Vita Nova
          <br />
          South Florida Private Wellness Residence · Age 21+ · All Private Pay · Maximum 8 Clients
        </div>
        <div className="footer-right">
          (954) 355-2040 · powerpartnershipllc@gmail.com
          <br />
          &copy; 2026 Mac and Mac Power Partnership LLC. All rights reserved.
        </div>
      </footer>
    )
  }
  return (
    <footer>
      <div className="footer-left">Mac and Mac Power Partnership LLC d/b/a Vita Nova · South Florida</div>
      <div className="footer-right">(954) 355-2040 · powerpartnershipllc@gmail.com</div>
    </footer>
  )
}

export default function Page() {
  const [active, setActive] = useState<PageId>("home")
  const [formSuccess, setFormSuccess] = useState(false)

  function showPage(id: PageId) {
    setActive(id)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fname = (form.elements.namedItem("fname") as HTMLInputElement).value
    const lname = (form.elements.namedItem("lname") as HTMLInputElement).value
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value
    const calltime = (form.elements.namedItem("calltime") as HTMLSelectElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value
    const subject = encodeURIComponent("Vita Nova — Private Inquiry from " + fname)
    const body = encodeURIComponent(
      "Name: " +
        fname +
        " " +
        lname +
        "\n" +
        "Phone: " +
        phone +
        "\n" +
        "Best time to call: " +
        calltime +
        "\n\n" +
        "Message:\n" +
        message,
    )
    window.location.href = "mailto:powerpartnershipllc@gmail.com?subject=" + subject + "&body=" + body
    setFormSuccess(true)
  }

  return (
    <>
      <nav>
        <div className="nav-top">
          <div className="nav-logo" onClick={() => showPage("home")}>
            <div className="nav-vn">
              <VNLogoSmall />
            </div>
            <div className="nav-name">
              VITA <span>NOVA</span>
            </div>
          </div>
          <a className="nav-right" href="tel:+19543552040" aria-label="Call Vita Nova at (954) 355-2040">
            <div className="nav-phone-big">(954) 355-2040</div>
            <div className="nav-phone-label">Speak with someone now</div>
          </a>
        </div>
        <div className="nav-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? " active" : ""}`}
              onClick={() => showPage(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HOME PAGE */}
      <div className={`page${active === "home" ? " active" : ""}`}>
        {/* DOCK HERO */}
        <div className="dock-hero">
          <img src="/images/hero-residence.png" alt="Vita Nova waterfront private wellness residence at golden hour" />
          <div className="dock-overlay" />
          <div className="dock-content">
            <div className="logo-stack">
              <VNLogoLarge />
              <div className="logo-rule" />
              <div className="logo-vita">VITA</div>
              <div className="logo-nova">NOVA</div>
              <div className="logo-tagline">South Florida &nbsp;·&nbsp; Private Wellness Residence</div>
              <div className="logo-meaning">Vita Nova means new life — a new start, a new way forward.</div>
            </div>
            <div className="hero-divider" />
            <div className="hero-statement">
              {'"We get to the core truth of what is really going on — and we help people begin a new life."'}
            </div>
            <div className="hero-sub">
              A private residence. A different kind of program. Mac and Laura work one on one with every person — four to
              five days every week — in a private home where you become family.
            </div>
            <div className="hero-phone">(954) 355-2040</div>
            <div className="hero-phone-label">
              Speak with someone now &nbsp;·&nbsp; We respond quickly and privately
            </div>
            <button className="hero-cta" onClick={() => showPage("contact")}>
              Get Started
            </button>
          </div>
        </div>

        <div className="gold-rule" />

        {/* TRIED OTHER PLACES */}
        <section>
          <div className="inner">
            <span className="section-tag">For people who have already tried other places</span>
            <div className="callout" style={{ marginBottom: "2rem" }}>
              <p>
                Many people come to Vita Nova after they have already tried rehab, therapy, treatment centers, or other
                programs and still have not gotten the results they needed.
              </p>
              <p>
                That is exactly why Vita Nova exists. We are for people who need something different, something more
                personal, and something that gets to the real truth underneath the behavior.
              </p>
              <p>
                <strong>
                  For many people, Vita Nova is where something finally starts to change. Our goal is not repeat
                  clients. Our goal is to help people heal, rebuild, and begin again the first time.
                </strong>
              </p>
            </div>

            <span className="section-tag">The core truth</span>
            <h2 className="big">
              We get to the core truth of
              <br />
              <em>what is really going on.</em>
            </h2>
            <div className="section-rule" />
            <p>
              Vita Nova is built around one goal: helping people understand why they are doing what they are doing, and
              helping them begin a new life.
            </p>
            <p>
              We do not just look at the surface problem. We look deeper. Substance abuse, anger, shame, relationship
              damage, family crisis, trauma, grief, burnout, and loss of direction are often symptoms of something
              deeper.
            </p>
            <p>
              At Vita Nova, Mac and Laura spend real time with each client. We get to know the person, the family, the
              pain, the patterns, the temperament, the personality, and the truth underneath the behavior.
            </p>
          </div>
        </section>

        {/* MANIFESTO BLOCK */}
        <div style={{ background: "#1a1916", padding: "4rem 2rem", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <span
              className="section-tag"
              style={{ display: "block", textAlign: "center", color: "rgba(184,149,90,.6)", marginBottom: "2rem" }}
            >
              We understand that every person is different
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { t: "Temperament matters.", c: "#f0c060" },
                { t: "Personality matters.", c: "#ffffff" },
                { t: "Family history matters.", c: "#f0c060" },
                { t: "Pain matters.", c: "#ffffff" },
                { t: "What happened to someone matters.", c: "#f0c060" },
              ].map((item, i, arr) => (
                <div key={item.t}>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: 32,
                      fontWeight: 400,
                      color: item.c,
                      lineHeight: 1,
                    }}
                  >
                    {item.t}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: 40, height: 1, background: "rgba(184,149,90,.3)", margin: "1.25rem auto 0" }} />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "2.5rem",
                fontSize: 14,
                color: "rgba(255,255,255,.6)",
                lineHeight: 1.9,
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              That is why we do not treat everyone the same. We work with each person in a deeply personal way to
              understand what is really going on and what needs to change. And when appropriate, we also work with family
              members and loved ones — because real healing does not happen in isolation.
            </div>
          </div>
        </div>

        <div className="gold-rule" />

        {/* KITCHEN PHOTO */}
        <div className="photo-panel">
          <img src="/images/evening-cooking.jpeg" alt="Residents and staff cooking dinner together in the kitchen at Vita Nova, with the caption: Every evening starts here — around food, around conversation, around family." />
        </div>

        <div className="gold-rule" />

        {/* ONE ON ONE PLACEHOLDER */}
        <div className="photo-ph">
          <div className="ph-center">
            <div className="ph-badge">Photo — Coming This Week</div>
            <div className="ph-desc">
              One on one · Comfortable living space
              <br />
              Natural light · Real conversation · Feels like home
            </div>
          </div>
          <div className="ph-panel-content">
            <span className="panel-num" style={{ color: "#b8955a" }}>
              One on One · Every week
            </span>
            <div className="panel-quote" style={{ color: "#1a1a1a", textShadow: "none", fontSize: 22 }}>
              {'"Four to five days a week. One on one. As long as it takes."'}
            </div>
            <div className="panel-sub" style={{ color: "#888" }}>
              Mac · Founder
            </div>
          </div>
        </div>

        <div className="gold-rule" />

        {/* WHAT WE DO */}
        <section className="alt">
          <div className="inner">
            <span className="section-tag">What we do</span>
            <h2>
              This is how we <em>actually help people.</em>
            </h2>
            <div className="section-rule" />
            <div className="wwd">
              {[
                "We help people get honest.",
                "We help people slow down.",
                "We help people understand themselves.",
                "We help people understand why they keep repeating the same patterns.",
                "We help people face the truth without shame.",
                "We help people rebuild trust, direction, discipline, and self-respect.",
                "We help people learn how to respond differently in real life, with real people, under real pressure.",
                "We work with family members and loved ones when appropriate so healing does not happen in isolation.",
                "We treat every person like family — not like a number, not like a case.",
              ].map((line) => (
                <div className="wwd-item" key={line}>
                  {line}
                </div>
              ))}
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-n">8</div>
                <div className="stat-l">
                  Small private setting
                  <br />
                  Few clients at a time
                </div>
              </div>
              <div className="stat">
                <div className="stat-n">4–5</div>
                <div className="stat-l">
                  Days per week
                  <br />
                  one on one with Mac
                </div>
              </div>
              <div className="stat">
                <div className="stat-n">0</div>
                <div className="stat-l">
                  Judgment
                  <br />
                  For anything
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        {/* WHAT LIFE FEELS LIKE */}
        <section>
          <div className="inner">
            <span className="section-tag">What life at Vita Nova feels like</span>
            <h2>
              Built around <em>people.</em>
            </h2>
            <div className="section-rule" />
            <div className="two-col">
              <div>
                <p>
                  Vita Nova is not built around a cold schedule. It is built around people. Mac and Laura are here with
                  you throughout the week — not just in scheduled conversations, but in real life. Talking, eating,
                  walking, sitting together, working through what is going on, and learning how to rebuild.
                </p>
                <p>
                  The residence has 24-hour security and nursing support provided. Wellness is part of the experience —
                  massage, yoga, physical activities, swimming, and other supportive services when appropriate.
                </p>
              </div>
              <div>
                <p>
                  Because we only work with a few clients at any given time, we are able to give each person the
                  attention, care, and presence they deserve.
                </p>
                <p>
                  <strong>
                    Golf. Pickleball. Fishing. Dinners out. Art. Gardening. Exercise. Whatever feeds the part of you that
                    needs to be fed — we build the program around who you are.
                  </strong>
                </p>
                <p>
                  Our goal is to give each client real time, real attention, and real personal involvement. Every day.
                  Not on a schedule. As a way of life here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUTDOOR PLACEHOLDER */}
        <div
          style={{
            height: "50vh",
            background: "linear-gradient(135deg,#1a1916 0%,#2c2318 50%,#1a1916 100%)",
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
            border: "2px dashed rgba(184,149,90,.3)",
          }}
        >
          <div
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#b8955a",
                border: "1px solid #b8955a",
                padding: ".4rem 1rem",
                display: "inline-block",
                marginBottom: ".75rem",
              }}
            >
              Photo — Coming This Week
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)", lineHeight: 1.8 }}>
              Outdoor living · Pool · Dock · South Florida lifestyle
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 2, padding: "2.5rem 3.5rem", maxWidth: 480 }}>
            <span
              style={{
                fontSize: 9,
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#b8955a",
                marginBottom: ".75rem",
                display: "block",
              }}
            >
              The outdoor experience
            </span>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 22,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: 1.4,
              }}
            >
              {'"South Florida from the water is something else entirely."'}
            </div>
          </div>
        </div>

        <div className="gold-rule" />

        {/* TESTIMONIALS */}
        <section className="alt">
          <div className="inner">
            <span className="section-tag">What people say</span>
            <h2>
              In their own <em>words.</em>
            </h2>
            <div className="section-rule" />
            <div className="testimonial-grid">
              {[
                {
                  quote:
                    "I had been to several places before Vita Nova and saw very little results. After 30 days with you, I feel completely different. I feel like I finally have my life back.",
                  name: "— Alex",
                },
                {
                  quote:
                    "I feel like you saved my life. I had been drinking for years, and you helped me understand how to stop — but more importantly, you helped me understand why I was doing so many destructive things to myself. I could never repay you for giving me my life back.",
                  name: "— Liz",
                },
                {
                  quote:
                    "At Vita Nova, I felt like more than a client. I felt like a family member who was truly loved. Mac and Laura were so warm and welcoming, and I enjoyed the meals we shared together. More importantly, real healing took place in my mind and body. The two of you are remarkable.",
                  name: "— Marc",
                },
              ].map((t) => (
                <div className="testimonial" key={t.name}>
                  <div
                    style={{
                      fontSize: 48,
                      color: "#b8955a",
                      fontFamily: "var(--font-playfair), serif",
                      lineHeight: 1,
                      marginBottom: ".5rem",
                    }}
                  >
                    {'"'}
                  </div>
                  <div className="testimonial-quote">{t.quote}</div>
                  <div className="testimonial-name">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        {/* VITA NOVA MEANS */}
        <div
          style={{
            background: "#fdf8f0",
            padding: "5rem 2rem",
            textAlign: "center",
            borderTop: "1px solid #e0d0c0",
            borderBottom: "1px solid #e0d0c0",
          }}
        >
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <div style={{ width: 40, height: 2, background: "#b8955a", margin: "0 auto 2rem" }} />
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 52,
                fontWeight: 400,
                color: "#b8955a",
                lineHeight: 1,
                marginBottom: ".4rem",
              }}
            >
              Vita Nova
            </div>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 52,
                fontWeight: 400,
                color: "#1a1a1a",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              means new life.
            </div>
            <div style={{ width: 40, height: 1, background: "#b8955a", margin: "0 auto 1.5rem" }} />
            <p style={{ fontSize: 16, lineHeight: 2, color: "#444", maxWidth: 520, margin: "0 auto" }}>
              A new life. A new start. A new way forward. We help people step out of the old patterns, old pain, old
              reactions, and old ways of living — and begin again.
            </p>
          </div>
        </div>

        <div className="gold-rule" />

        {/* WHAT WE BELIEVE */}
        <section>
          <div className="inner-narrow">
            <span className="section-tag" style={{ textAlign: "center", display: "block" }}>
              What we believe
            </span>
            <h2 style={{ textAlign: "center", fontSize: 42 }}>
              People can be <em>repaired.</em>
            </h2>
            <div className="section-rule" style={{ margin: "1rem auto" }} />
            <div style={{ fontSize: 15, lineHeight: 2.1, color: "#333", textAlign: "center" }}>
              <p>We believe people can be repaired.</p>
              <p>
                We believe broken lives, broken relationships, broken families, and broken spirits can still be rebuilt.
              </p>
              <p>
                We believe people can come back from pain, shame, substance abuse, anger, loss, trauma, and mistakes.
              </p>
              <p>
                We believe forgiveness matters — forgiveness of others, forgiveness of the past, and sometimes hardest
                of all, forgiveness of yourself.
              </p>
              <p>
                Vita Nova is not about judgment. It is about truth, accountability, healing, rebuilding, and a real
                chance to begin again.
              </p>
            </div>
          </div>
        </section>

        {/* YOU WERE NEVER BROKEN */}
        <div style={{ background: "#1a1916", padding: "5rem 2rem", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ width: 40, height: 2, background: "#b8955a", margin: "0 auto 2.5rem" }} />
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 36,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              {'"You were never broken.'}
              <br />
              {"You just needed someone"}
              <br />
              {'to actually show up for you."'}
            </div>
            <div style={{ width: 40, height: 1, background: "rgba(184,149,90,.5)", margin: "1.5rem auto" }} />
            <div style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#b8955a" }}>
              — Mac &amp; Laura · Vita Nova
            </div>
          </div>
        </div>

        <div className="gold-rule" />

        {/* DIFFERENT APPROACH */}
        <section className="alt">
          <div className="inner">
            <div className="diff-small">
              <span className="diff-heading">A completely different approach</span>
              <p>
                Vita Nova is not traditional therapy. It is not standard rehab. It is not a cold program where someone
                sits in a room, tells their story for an hour, and then goes back to the same pain, habits, and
                confusion.
              </p>
              <p>
                Vita Nova is real-life healing in a private residence, built around honesty, accountability, personal
                attention, temperament, family understanding, and human connection.
              </p>
              <p>
                Mac tried the conventional programs. He kept going back. So before he built Vita Nova, he rebuilt the
                entire approach from the ground up — based on what actually creates lasting change in a real person's
                life. That lived experience is the foundation of Vita Nova.
              </p>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        {/* REACH OUT */}
        <section className="reach-block">
          <div className="reach-vn">
            <VNLogoLarge width={72} />
          </div>
          <div className="reach-line" />
          <h2>
            When you are ready,
            <br />
            <em>we move quickly.</em>
          </h2>
          <p>
            When you reach out, someone will speak with you privately and respectfully about what is going on. Before
            you enter the residence, Mac or Laura will speak with you directly to make sure Vita Nova is the right fit.
          </p>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, maxWidth: 480, margin: ".5rem auto 2rem" }}>
            We are not trying to fill beds. We are trying to heal hearts, help people, and create real change. This is
            our private residence, and we only want people here who are ready, willing, and a true fit for what Vita
            Nova offers.
          </p>
          <div className="reach-phone">(954) 355-2040</div>
          <div className="reach-label">Speak with someone now</div>
          <div className="reach-email">powerpartnershipllc@gmail.com</div>
          <div style={{ marginTop: "3rem" }}>
            <span
              className="section-tag"
              style={{ display: "block", textAlign: "center", marginBottom: "1.25rem", color: "rgba(184,149,90,.7)" }}
            >
              Our residences
            </span>
            <div className="res-list">
              <div className="res-item">
                <div className="res-dot" />
                <div>
                  <strong>South Florida</strong> — Primary residence · Year-round
                </div>
              </div>
              <div className="res-item">
                <div className="res-dot dim" />
                <div>Wilmington, North Carolina — Available selectively</div>
              </div>
              <div className="res-item">
                <div className="res-dot dim" />
                <div>Lake Tahoe — Available selectively</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <button className="hero-cta" onClick={() => showPage("contact")}>
              Get Started
            </button>
          </div>
        </section>

        <Footer full />
      </div>

      {/* ABOUT PAGE */}
      <div className={`page${active === "about" ? " active" : ""}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>
            Who we are
          </span>
          <h1>
            People who have <em>lived it.</em>
            <br />
            People who overcame it.
          </h1>
          <p>
            Mac and Laura did not build Vita Nova from a textbook. They built it from their own lives — from the pain,
            the mistakes, the searching, and the rebuilding.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="bq">
              <blockquote>
                {
                  '"Traditional therapy and treatment did not give Mac and Laura the answers they needed. They had to discover what actually helped them rebuild — what really works, not the clinical distance. That is what Vita Nova is built on."'
                }
              </blockquote>
              <cite>— Mac &amp; Laura · Founders, Vita Nova</cite>
            </div>
            <div className="about-grid">
              <div className="founder-block">
                <h3>Mac</h3>
                <span className="title">Founder · Vita Nova</span>
                <p>
                  Mac has spent decades building businesses and leading people. He built and scaled a $1 billion revenue
                  operation. He has also been through addiction himself — and came out the other side. Not through a
                  program. By figuring out what actually works.
                </p>
                <p>
                  Mac spends real time with every person — one on one, face to face, in real life — helping them
                  understand themselves and learn how to live differently.
                </p>
              </div>
              <div className="founder-block">
                <h3>Laura</h3>
                <span className="title">Co-Founder · Vita Nova</span>
                <p>
                  Laura is a former National Account Executive at Zillow, COO, and certified DISC practitioner who rang
                  the Nasdaq bell. She brings operational precision, warmth, and genuine personal connection to every
                  person who walks through the door.
                </p>
                <p>
                  Together, Mac and Laura give every client something no facility can offer — two people who are
                  genuinely invested in their outcome.
                </p>
              </div>
            </div>
            <div className="callout" style={{ marginTop: "2.5rem" }}>
              <p>
                Vita Nova is not a hospital, treatment center, or traditional rehab facility. Vita Nova is a private
                residence with a different kind of program designed by Mac and Laura. This is a private, personal,
                high-touch environment where clients are seen, heard, understood, and guided in a deeply personal way.
                Mac and Laura are here with you — not watching from a distance.
              </p>
              <p>
                <strong>24-hour security provided. Nursing support provided as part of the residence.</strong>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      {/* APPROACH PAGE */}
      <div className={`page${active === "approach" ? " active" : ""}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>
            Our approach
          </span>
          <h1>
            Nothing like this
            <br />
            <em>exists anywhere else.</em>
          </h1>
          <p>
            This is not therapy. Not rehab. Not a clinical program with rotating staff and group sessions. This is
            something entirely different — and the difference is everything.
          </p>
        </div>

        <section>
          <div className="inner">
            <span className="section-tag">What makes Vita Nova different</span>
            <h2 className="big">
              You are paying for something
              <br />
              <em>no one else can offer.</em>
            </h2>
            <div className="section-rule" />

            <div className="callout">
              <p>
                Conventional rehab programs are built around clinical systems — rotating staff, group therapy, one-hour
                sessions, insurance billing, and the same program delivered to everyone who walks through the door. They
                are not built around you. They cannot be. They have too many people and not enough time.
              </p>
              <p>
                <strong>
                  Vita Nova is built entirely around you. One person at a time. One conversation at a time. In a private
                  home where Mac and Laura are with you every single day.
                </strong>
              </p>
            </div>

            <div className="wwd" style={{ marginTop: "2rem" }}>
              {[
                "Mac works with you one on one — four to five days every week. Not a rotating counselor. Not a group session. Mac. Every time.",
                "You live in a private residence — not a facility with hallways and clipboards and strangers walking past your door.",
                "The number of people here at any given time is never more than eight. You are never lost in a crowd. You always have our full attention.",
                "Mac and Laura have both been through their own version of this. They are not reading from a textbook. They are speaking from their own lives.",
                "Mac built the entire approach from the ground up — after going through conventional programs himself and finding the same revolving door most people find. What he built is different because it is built on what actually works.",
                "Every program is built around your temperament, your personality, your history, your family, and the real truth underneath your behavior — not a clinical diagnosis applied to everyone in the same way.",
                "You leave with a written re-entry plan, a full DISC behavioral profile, and direct follow-up from Mac — not a pamphlet and a handshake.",
              ].map((line) => (
                <div className="wwd-item" key={line}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        <section className="alt">
          <div className="inner">
            <span className="section-tag">The outings — this is what elite looks like</span>
            <h2>
              Life does not stop
              <br />
              <em>while you are here.</em>
            </h2>
            <div className="section-rule" />
            <p style={{ fontSize: 15, color: "#333", marginBottom: "1.5rem" }}>
              One of the most important things Vita Nova does — and something no traditional program offers — is taking
              you back into real life while you are still with us. Not in a clinical setting. In the real world. Because
              that is where the work has to hold.
            </p>

            <div className="two-col">
              <div>
                <h3
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "#b8955a",
                    marginBottom: "1rem",
                  }}
                >
                  What we do together
                </h3>
                <div className="wwd" style={{ margin: 0 }}>
                  {[
                    "Golf — a round with Mac is one of the best conversations you will ever have",
                    "Pickleball and tennis — movement clears the mind in a way nothing else does",
                    "Fishing and time on the water — South Florida from the water is something else entirely",
                    "Dinners out — real restaurants, real social situations, Mac right there with you",
                    "Art and creative expression — for those who need a different kind of outlet",
                    "Gardening — something grounding about working with your hands in the earth",
                    "Exercise, swimming, and movement — every morning if that is what you need",
                    "Whatever feeds the part of you that needs to be fed — we build around who you are",
                  ].map((line) => (
                    <div className="wwd-item" style={{ fontSize: 15 }} key={line}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "#b8955a",
                    marginBottom: "1rem",
                  }}
                >
                  Why this matters
                </h3>
                <p>
                  Most programs keep you inside their walls and then send you back into a world you were not prepared
                  for. The golf course where everyone has a drink at the 19th hole. The business dinner where the wine
                  list comes around. The family gathering where the old tension is still there.
                </p>
                <p>
                  Mac takes you into those situations before you leave. He coaches you through them in real time. You
                  practice responding differently — not in theory, but in reality — while you still have him right next
                  to you.
                </p>
                <p>You do not just leave better. You leave ready.</p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: 17,
                    fontStyle: "italic",
                    color: "#1a1a1a",
                    marginTop: "1.5rem",
                    lineHeight: 1.65,
                  }}
                >
                  {
                    '"The hardest part is not getting better inside a residence. The hardest part is staying better when real life comes back. We prepare you for that."'
                  }
                </p>
                <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#b8955a" }}>
                  — Mac · Vita Nova
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        <section>
          <div className="inner">
            <span className="section-tag">The elite difference</span>
            <h2>
              What you get that
              <br />
              <em>no program can match.</em>
            </h2>
            <div className="section-rule" />

            <div className="stats">
              <div className="stat">
                <div className="stat-n">8</div>
                <div className="stat-l">
                  Maximum clients
                  <br />
                  at any time — ever
                </div>
              </div>
              <div className="stat">
                <div className="stat-n">4–5</div>
                <div className="stat-l">
                  Days per week
                  <br />
                  one on one with Mac
                </div>
              </div>
              <div className="stat">
                <div className="stat-n">0</div>
                <div className="stat-l">
                  Rotating staff
                  <br />
                  or group sessions
                </div>
              </div>
            </div>

            <div className="two-col" style={{ marginTop: "2.5rem" }}>
              {[
                <>
                  <strong>Private airport transportation.</strong> A private car is dispatched to your door. You arrive
                  at the residence — not a facility, not a check-in desk. Mac and Laura are at the door. Your room has
                  your name on it. There are flowers. There is a handwritten note. From this moment, you are family.
                </>,
                <>
                  <strong>Twice-weekly massage.</strong> A private massage therapist comes to the residence. Not a spa —
                  your home. Part of the weekly rhythm, not an add-on you pay extra for. Recovery is physical as much as
                  it is emotional.
                </>,
                <>
                  <strong>Private licensed therapist.</strong> A contracted therapist visits the residence
                  independently. One more layer of professional support — alongside Mac's daily work, not instead of it.
                </>,
                <>
                  <strong>Weekend private chef.</strong> Saturday and Sunday, a private chef comes to the residence and
                  builds the weekend menu around what everyone wants that week. During the week, Mac and Laura cook with
                  you. Meals together are one of the most important parts of the Vita Nova experience.
                </>,
                <>
                  <strong>24-hour private security.</strong> Non-uniformed, on-site, around the clock. You never see
                  them and you never need to think about them. They are simply there.
                </>,
                <>
                  <strong>DISC behavioral assessment.</strong> Laura is a certified DISC practitioner. Every client
                  receives a full behavioral profile — understanding your natural wiring changes everything about how
                  Mac works with you and how you understand yourself.
                </>,
              ].map((content, i) => (
                <div className="callout" key={i}>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        <section className="alt">
          <div className="inner">
            <span className="section-tag">What we help with</span>
            <h2>
              Most people come here
              <br />
              with <em>layers of pain.</em>
            </h2>
            <div className="section-rule" />
            <p style={{ fontSize: 16, color: "#333333", marginBottom: "1.5rem" }}>
              Vita Nova is for people dealing with more than one problem. Most people do not come here with just one
              issue. They come here with layers of pain, damage, habits, fear, regret, and confusion.
            </p>
            <div className="help-grid">
              {[
                "Substance abuse",
                "Anger",
                "Self-hate",
                "Shame",
                "Trauma",
                "Grief",
                "Loss",
                "Burnout",
                "Anxiety and emotional overwhelm",
                "Relationship breakdown",
                "Marriage crisis",
                "Family crisis",
                "Loss of direction",
                "Isolation",
                "Major life transitions",
                "Second chances",
                "People who feel stuck, broken, or out of control",
                "",
              ].map((label, i) => (
                <div className="help-item" key={i}>
                  {label}
                </div>
              ))}
            </div>
            <p className="help-closing">
              You do not have to know exactly what to call it. You just have to know that something has to change.
            </p>
            <p style={{ fontSize: 12, color: "#999", marginTop: "1.5rem", fontStyle: "italic" }}>
              Vita Nova is a private wellness residence and personal transformation program. We do not provide medical
              detox, emergency psychiatric care, or hospital-level treatment. All clients are medically stable upon
              arrival.
            </p>
          </div>
        </section>

        <Footer />
      </div>

      {/* PROGRAMS PAGE */}
      <div className={`page${active === "programs" ? " active" : ""}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>
            Program options
          </span>
          <h1>
            Every person is different.
            <br />
            <em>Every program is built around you.</em>
          </h1>
          <p>
            Four programs — 14 days, 30 days, 60 days, and 90 days — plus custom. All-inclusive. Full payment before
            arrival. Every program discussed personally on your first call with Mac or Laura.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="prog-list">
              <div className="prog-item">
                <div>
                  <span className="prog-label">14-Day Program</span>
                  <div className="prog-name">Intensive Reset</div>
                  <div className="prog-price" style={{ marginTop: ".5rem" }}>
                    $45,000 &nbsp;·&nbsp; All-Inclusive
                  </div>
                </div>
                <div>
                  <p className="prog-desc">
                    Sometimes the most urgent thing is getting out. Out of the environment, out of the pattern, out of
                    the daily situation that is making everything worse. The 14-day Intensive Reset is for someone who
                    needs to stop — right now — and begin facing what is really going on.
                  </p>
                  <p className="prog-desc">
                    You arrive. You breathe. Mac begins working with you one on one from day one. We slow everything
                    down and start getting to the truth underneath the behavior. Fourteen days of real work, real
                    honesty, and real attention from two people who have been through their own version of this.
                  </p>
                  <p className="prog-desc">
                    <strong>While you are here:</strong> One-on-one sessions with Mac four to five days per week.
                    Twice-weekly massage. Private therapist visits. Meals together. Walks, fresh air, time near the
                    water. Golf or pickleball if that is what you need to decompress. Whatever gets you out of your head
                    and into the present.
                  </p>
                  <p className="prog-note">
                    You leave with a written re-entry plan and 30 days of direct follow-up with Mac.
                  </p>
                </div>
              </div>

              <div className="prog-item">
                <div>
                  <span className="prog-label">30-Day Program</span>
                  <div className="prog-name">Rebuild Program</div>
                  <div className="prog-price" style={{ marginTop: ".5rem" }}>
                    $85,000 &nbsp;·&nbsp; All-Inclusive
                  </div>
                </div>
                <div>
                  <p className="prog-desc">
                    Thirty days is where real change begins. Not managed — begun. This program gives Mac enough time to
                    get past the surface and into the real work. The patterns. The temperament. The history. What
                    happened. What has been driving the behavior long before anyone started calling it a problem.
                  </p>
                  <p className="prog-desc">
                    Every week builds on the last. The conversations get deeper. The honesty gets easier. By week three
                    most people are saying things they have never said out loud to anyone. That is where the real work
                    happens.
                  </p>
                  <p className="prog-desc">
                    <strong>Built around you personally:</strong> If you play golf we play golf. If you like being on
                    the water we get on the water. If you want to cook we cook together every night. If you need to move
                    we move. The program is structured — the life inside it is built around who you are.
                  </p>
                  <p className="prog-note">
                    You leave with a detailed written re-entry plan, a full DISC behavioral profile, and 30 days of
                    direct follow-up with Mac.
                  </p>
                </div>
              </div>

              <div className="prog-item">
                <div>
                  <span className="prog-label">60-Day Program</span>
                  <div className="prog-name">Life Change Program</div>
                  <div className="prog-price" style={{ marginTop: ".5rem" }}>
                    $150,000 &nbsp;·&nbsp; All-Inclusive
                  </div>
                </div>
                <div>
                  <p className="prog-desc">
                    Here is what most programs will never tell you. Getting better inside a residence is the easier
                    part. The harder part is going back out into the real world — where alcohol is at every dinner
                    table, where the pressure is back, where the old triggers are waiting. The 60-day program prepares
                    you for that.
                  </p>
                  <p className="prog-desc">
                    When the time is right — and Mac decides when that is — we take the work into the real world. A
                    dinner at a restaurant. A round of golf with people you know. A family situation. Mac is right there
                    coaching you through it in real time. You do not just leave better. You leave ready.
                  </p>
                  <p className="prog-desc">
                    <strong>Custom built around your life:</strong> What are you going back to? Mac builds the
                    real-world practice around your actual situation — your family, your social world, your professional
                    environment. The reintegration is not generic. It is yours.
                  </p>
                  <p className="prog-note">
                    You leave with a comprehensive re-entry roadmap, full DISC profile, and 60 days of direct follow-up
                    with Mac.
                  </p>
                </div>
              </div>

              <div className="prog-item feat">
                <div>
                  <span className="prog-label">90-Day Program &nbsp;·&nbsp; Most Selected</span>
                  <div className="prog-name">Full Transformation</div>
                  <div className="prog-price" style={{ marginTop: ".5rem" }}>
                    $210,000 &nbsp;·&nbsp; All-Inclusive
                  </div>
                </div>
                <div>
                  <p className="prog-desc">
                    The most complete work we do. Ninety days is long enough to build something that actually holds —
                    new habits, new responses, new understanding of yourself that does not disappear when life gets hard
                    again.
                  </p>
                  <p className="prog-desc">
                    By week four the work has gone deep enough that most people start to see themselves clearly for the
                    first time. By week eight they are practicing new responses in real-life situations. By week twelve
                    they are ready — not just better, but genuinely different in the way they think, respond, and show
                    up.
                  </p>
                  <p className="prog-desc">
                    <strong>What life looks like here for 90 days:</strong> One-on-one with Mac four to five days every
                    week. Massage twice a week. Private therapist visits. Cooking together in the evenings. Weekend chef
                    who builds the menu around what everyone wants that week. Golf, pickleball, fishing, art, gardening,
                    exercise — whatever feeds the part of you that needs to be fed. Dinners out. Real social situations.
                    Gradual reintegration into your actual life — while you are still with us.
                  </p>
                  <p className="prog-desc">
                    People who complete this program do not come back as clients. They come back to reunions. That is
                    the goal. That has always been the goal.
                  </p>
                  <p className="prog-note">
                    You leave with a full life re-entry plan, complete DISC behavioral profile, and 90 days of direct
                    follow-up with Mac and Laura.
                  </p>
                </div>
              </div>

              <div className="prog-item">
                <div>
                  <span className="prog-label">Custom Program</span>
                  <div className="prog-name">Private Custom</div>
                  <div className="prog-price" style={{ marginTop: ".5rem" }}>
                    Discussed personally
                  </div>
                </div>
                <div>
                  <p className="prog-desc">
                    Some situations do not fit a standard timeline — and we know that. Couples, families, individuals
                    with specific needs or circumstances that require something built entirely around them. We have done
                    it and we can do it again.
                  </p>
                  <p className="prog-desc">
                    Call Mac directly. Tell him what is happening. If a custom program is the right answer, he will tell
                    you — and then he will build it.
                  </p>
                  <p className="prog-note">
                    Couples are welcome. The second person joins at 50% of the primary program fee.
                  </p>
                </div>
              </div>
            </div>

            <p style={{ marginTop: "1.5rem", fontSize: 11, color: "#999", textAlign: "center" }}>
              All programs include 24-hour security, nursing support, wellness services, all meals, and private
              accommodations. Age 21+. Maximum 8 clients.
            </p>
            <div className="callout" style={{ marginTop: "2.5rem" }}>
              <p>
                <strong>
                  Our goal is not repeat clients. Our goal is lasting change — helping you rebuild and begin again the
                  first time.
                </strong>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      {/* INSURANCE PAGE */}
      <div className={`page${active === "insurance" ? " active" : ""}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>
            Insurance &amp; Payment
          </span>
          <h1>
            We are entirely
            <br />
            <em>private pay.</em>
          </h1>
          <p>
            Vita Nova does not work with insurance companies. That is a deliberate choice — and one of the reasons our
            program works the way it does.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="ins-callout">
              <h3>
                Your privacy comes
                <br />
                <em>before everything else.</em>
              </h3>
              <p>
                When you work with an insurance company, your personal health information gets filed, coded, reviewed,
                and stored. At Vita Nova, none of that happens. Your experience here is completely private.
              </p>
              <p style={{ fontSize: 13, color: "#b8955a", fontStyle: "italic", marginTop: ".5rem" }}>
                That is not a limitation. That is a feature.
              </p>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <span className="section-tag">Why Vita Nova is private pay</span>
              <h2>
                Three reasons this <em>matters for you.</em>
              </h2>
              <div className="section-rule" />
            </div>
            <div className="ins-why-grid">
              <div className="ins-why-item">
                <div className="ins-why-num">01</div>
                <div>
                  <h4>Complete privacy — always</h4>
                  <p>
                    Insurance billing creates records that follow you. At Vita Nova, your participation is known only to
                    the people inside this residence. Everyone signs a permanent confidentiality agreement.
                  </p>
                </div>
              </div>
              <div className="ins-why-item">
                <div className="ins-why-num">02</div>
                <div>
                  <h4>No insurance company decides your care</h4>
                  <p>
                    When insurance is involved, the insurance company has a say in how long you stay and what services
                    you receive. At Vita Nova, those decisions are made by Mac, Laura, and you — nobody else.
                  </p>
                </div>
              </div>
              <div className="ins-why-item">
                <div className="ins-why-num">03</div>
                <div>
                  <h4>We are built for people who want something different</h4>
                  <p>
                    Our clients value privacy, discretion, and a genuinely personal experience. Private pay is part of
                    what makes Vita Nova what it is.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <span className="section-tag">Payment</span>
              <h2>
                Simple, clear,
                <br />
                <em>and completely confidential.</em>
              </h2>
              <div className="section-rule" />
            </div>
            <div className="ins-grid">
              <div className="ins-item">
                <h4>How payment works</h4>
                <p>
                  Full payment is arranged privately before arrival by cashier's check or wire transfer, made payable to
                  Mac and Mac Power Partnership LLC. No billing departments, no third parties.
                </p>
              </div>
              <div className="ins-item">
                <h4>Investment discussion</h4>
                <p>
                  Program investment is discussed personally on your first call with Mac or Laura — honestly and without
                  pressure, before any financial commitment is made.
                </p>
              </div>
              <div className="ins-item">
                <h4>What is included</h4>
                <p>
                  Every program is all-inclusive. Accommodations, all meals, 24-hour security, nursing support, wellness
                  services, and all time with Mac and Laura. No surprise charges.
                </p>
              </div>
              <div className="ins-item">
                <h4>Have questions about cost?</h4>
                <p>
                  Call us. Mac or Laura will speak with you directly and honestly. We want to make sure Vita Nova is the
                  right fit before any financial commitment is made by either side.
                </p>
              </div>
            </div>
            <div className="callout" style={{ marginTop: "2.5rem", textAlign: "center" }}>
              <p
                style={{
                  fontSize: 18,
                  fontFamily: "var(--font-playfair), serif",
                  fontStyle: "italic",
                  color: "#1a1a1a",
                  marginBottom: ".5rem",
                }}
              >
                {'"We do not take insurance. We take people seriously."'}
              </p>
              <p>
                Call us and we will have an honest conversation about what Vita Nova costs, what it includes, and whether
                it is the right fit.
              </p>
              <div
                style={{ marginTop: "1.25rem", fontSize: 28, color: "#b8955a", fontFamily: "var(--font-playfair), serif" }}
              >
                (954) 355-2040
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

      {/* CONTACT PAGE */}
      <div className={`page${active === "contact" ? " active" : ""}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: "block", textAlign: "center" }}>
            Get started
          </span>
          <h1>
            When you are ready,
            <br />
            <em>we move quickly.</em>
          </h1>
          <p>
            Someone will speak with you privately and respectfully. Before you enter our residence, Mac or Laura will
            speak with you directly.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="contact-grid">
              <div>
                <h2 style={{ fontSize: 26, marginBottom: ".5rem" }}>
                  Reach out <em>now.</em>
                </h2>
                <p style={{ fontSize: 13, color: "#666", marginBottom: "1.25rem" }}>
                  Fill out the form below and Mac or Laura will call you personally — privately and within a few hours.
                  No auto-replies. No call centers.
                </p>

                <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
                    <div>
                      <label
                        htmlFor="fname"
                        style={{
                          fontSize: 9,
                          letterSpacing: ".16em",
                          textTransform: "uppercase",
                          color: "#b8955a",
                          display: "block",
                          marginBottom: ".3rem",
                        }}
                      >
                        First Name *
                      </label>
                      <input
                        id="fname"
                        name="fname"
                        required
                        type="text"
                        placeholder="First name"
                        style={{
                          width: "100%",
                          border: "1px solid #d0c0b0",
                          padding: ".65rem .85rem",
                          fontSize: 13,
                          fontFamily: "inherit",
                          outline: "none",
                          borderRadius: 0,
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lname"
                        style={{
                          fontSize: 9,
                          letterSpacing: ".16em",
                          textTransform: "uppercase",
                          color: "#b8955a",
                          display: "block",
                          marginBottom: ".3rem",
                        }}
                      >
                        Last Name <span style={{ color: "#aaa", fontSize: 8 }}>(optional)</span>
                      </label>
                      <input
                        id="lname"
                        name="lname"
                        type="text"
                        placeholder="Last name"
                        style={{
                          width: "100%",
                          border: "1px solid #d0c0b0",
                          padding: ".65rem .85rem",
                          fontSize: 13,
                          fontFamily: "inherit",
                          outline: "none",
                          borderRadius: 0,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        fontSize: 9,
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "#b8955a",
                        display: "block",
                        marginBottom: ".3rem",
                      }}
                    >
                      Best Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="Your phone number"
                      style={{
                        width: "100%",
                        border: "1px solid #d0c0b0",
                        padding: ".65rem .85rem",
                        fontSize: 13,
                        fontFamily: "inherit",
                        outline: "none",
                        borderRadius: 0,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="calltime"
                      style={{
                        fontSize: 9,
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "#b8955a",
                        display: "block",
                        marginBottom: ".3rem",
                      }}
                    >
                      Best Time to Call *
                    </label>
                    <select
                      id="calltime"
                      name="calltime"
                      required
                      defaultValue=""
                      style={{
                        width: "100%",
                        border: "1px solid #d0c0b0",
                        padding: ".65rem .85rem",
                        fontSize: 13,
                        fontFamily: "inherit",
                        outline: "none",
                        borderRadius: 0,
                        background: "#fff",
                        color: "#1a1a1a",
                      }}
                    >
                      <option value="">Select a time</option>
                      <option>Morning — 7am to 11am</option>
                      <option>Midday — 11am to 2pm</option>
                      <option>Afternoon — 2pm to 5pm</option>
                      <option>Evening — 5pm to 8pm</option>
                      <option>Anytime</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: 9,
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                        color: "#b8955a",
                        display: "block",
                        marginBottom: ".3rem",
                      }}
                    >
                      Tell us briefly what is going on <span style={{ color: "#aaa", fontSize: 8 }}>(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Whatever you are comfortable sharing — this goes directly and privately to Mac and Laura only."
                      style={{
                        width: "100%",
                        border: "1px solid #d0c0b0",
                        padding: ".65rem .85rem",
                        fontSize: 13,
                        fontFamily: "inherit",
                        outline: "none",
                        borderRadius: 0,
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 10, color: "#aaa", lineHeight: 1.7 }}>
                    Your message goes directly and privately to Mac and Laura only. Nothing is stored or shared anywhere
                    else. This is completely confidential.
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: "#1a1916",
                      color: "#b8955a",
                      border: "2px solid #b8955a",
                      padding: ".9rem 2rem",
                      fontSize: 11,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all .2s",
                    }}
                  >
                    Send Message Privately
                  </button>
                </form>

                {formSuccess && (
                  <div
                    style={{ background: "#fdf8f0", borderLeft: "4px solid #b8955a", padding: "1.25rem", marginTop: "1rem" }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: "#1a1a1a",
                        fontFamily: "var(--font-playfair), serif",
                        fontStyle: "italic",
                        marginBottom: ".3rem",
                      }}
                    >
                      {'"We received your message."'}
                    </p>
                    <p style={{ fontSize: 12, color: "#555" }}>
                      Mac or Laura will call you personally within a few hours. Your information is completely private.
                    </p>
                  </div>
                )}

                <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid #e0d0c0" }}>
                  <div>
                    <span className="cd-label">Or call us directly</span>
                    <div className="cd-value">(954) 355-2040</div>
                    <div className="cd-sub">Monday–Friday · 6am–8pm · Mac or Laura answers</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 24, marginBottom: "1.5rem" }}>
                  What happens
                  <br />
                  <em>when you call.</em>
                </h2>
                <div className="adm-steps">
                  <div className="adm-step">
                    <div className="adm-num">1</div>
                    <div>
                      <h4>You reach out</h4>
                      <p>
                        Call or email. Someone will speak with you privately and respectfully about what is going on and
                        whether Vita Nova might be the right fit.
                      </p>
                    </div>
                  </div>
                  <div className="adm-step">
                    <div className="adm-num">2</div>
                    <div>
                      <h4>You speak with Mac or Laura directly</h4>
                      <p>
                        Before you enter our residence, Mac or Laura will speak with you personally. An honest
                        conversation — not a sales call.
                      </p>
                    </div>
                  </div>
                  <div className="adm-step">
                    <div className="adm-num">3</div>
                    <div>
                      <h4>We welcome you home</h4>
                      <p>
                        Private transportation from the airport if needed, or drive directly to us. Your room is ready.
                        Mac and Laura are there to welcome you. From this moment, you are family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="reach-block">
          <div className="reach-vn">
            <VNLogoLarge width={72} />
          </div>
          <div className="reach-line" />
          <h2>
            When you are ready,
            <br />
            <em>we move quickly.</em>
          </h2>
          <p>
            When you reach out, someone will speak with you privately and respectfully about what is going on. Before
            you enter the residence, Mac or Laura will speak with you directly to make sure Vita Nova is the right fit.
          </p>
          <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14, maxWidth: 480, margin: ".5rem auto 2rem" }}>
            We are not trying to fill beds. We are trying to heal hearts, help people, and create real change. This is
            our private residence, and we only want people here who are ready, willing, and a true fit for what Vita
            Nova offers.
          </p>
          <div className="reach-phone">(954) 355-2040</div>
          <div className="reach-label">Speak with someone now</div>
          <div className="reach-email">powerpartnershipllc@gmail.com</div>
          <p
            style={{
              marginTop: "2rem",
              fontSize: 13,
              color: "rgba(255,255,255,.4)",
              fontStyle: "italic",
              maxWidth: 420,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.9,
            }}
          >
            Vita Nova is a private wellness residence and personal transformation program. We do not provide medical
            detox, emergency psychiatric care, or hospital-level treatment.
          </p>
        </section>
        <Footer full />
      </div>
    </>
  )
}
