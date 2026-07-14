'use client'

import { useState } from 'react'

type PageId = 'home' | 'about' | 'approach' | 'programs' | 'insurance' | 'contact'

const VnMark = () => (
  <svg viewBox="0 0 64 56" fill="none" style={{ width: 52, height: 46 }}>
    <polyline points="10,4 32,50 54,4" stroke="#f0c060" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="17" y1="44" x2="17" y2="14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="17" y1="14" x2="47" y2="44" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="47" y1="14" x2="47" y2="44" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="50" r="3" fill="#f0c060" />
  </svg>
)

const FooterFull = () => (
  <footer>
    <div className="footer-left">
      Mac and Mac Power Partnership LLC d/b/a Vita Nova
      <br />
      South Florida Private Wellness Residence · Age 21+ · All Private Pay · Maximum 8 Clients
    </div>
    <div className="footer-right">
      (954) 355-2040 · powerpartnershipllc@gmail.com
      <br />© 2026 Mac and Mac Power Partnership LLC. All rights reserved.
    </div>
  </footer>
)

const FooterSmall = () => (
  <footer>
    <div className="footer-left">Mac and Mac Power Partnership LLC d/b/a Vita Nova · South Florida</div>
    <div className="footer-right">(954) 355-2040 · powerpartnershipllc@gmail.com</div>
  </footer>
)

const helpWith = [
  'Substance abuse',
  'Anger',
  'Self-hate',
  'Shame',
  'Trauma',
  'Grief',
  'Loss',
  'Burnout',
  'Anxiety and emotional overwhelm',
  'Relationship breakdown',
  'Marriage crisis',
  'Family crisis',
  'Loss of direction',
  'Isolation',
  'Major life transitions',
  'Second chances',
  'People who feel stuck, broken, or out of control',
]

const wwdItems = [
  'We help people get honest.',
  'We help people slow down.',
  'We help people understand themselves.',
  'We help people understand why they keep repeating the same patterns.',
  'We help people face the truth without shame.',
  'We help people rebuild trust, direction, discipline, and self-respect.',
  'We help people learn how to respond differently in real life, with real people, under real pressure.',
]

const Stats = () => (
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
      <div className="stat-n">4</div>
      <div className="stat-l">
        Program options
        <br />
        14 · 30 · 90 · Custom
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
)

export default function Page() {
  const [active, setActive] = useState<PageId>('home')

  const showPage = (id: PageId) => {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const tabs: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Mac & Laura' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'programs', label: 'Programs' },
    { id: 'insurance', label: 'Insurance & Payment' },
    { id: 'contact', label: 'Get Started' },
  ]

  return (
    <>
      <nav>
        <div className="nav-top">
          <div className="nav-logo" onClick={() => showPage('home')}>
            <div className="nav-vn">
              <svg viewBox="0 0 64 56" fill="none">
                <polyline points="10,4 32,50 54,4" stroke="#b8955a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="17" y1="44" x2="17" y2="14" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                <line x1="17" y1="14" x2="47" y2="44" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                <line x1="47" y1="14" x2="47" y2="44" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="50" r="2.5" fill="#b8955a" />
              </svg>
            </div>
            <div className="nav-name">
              VITA <span>NOVA</span>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-phone-big">(954) 355-2040</div>
            <div className="nav-phone-label">Speak with someone now</div>
          </div>
        </div>
        <div className="nav-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? ' active' : ''}`}
              onClick={() => showPage(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HOME PAGE */}
      <div className={`page${active === 'home' ? ' active' : ''}`}>
        <div className="dock-hero">
          <img src="/images/hero-residence.png" alt="A private wellness residence in South Florida at golden hour" />
          <div className="dock-overlay" />
          <div className="dock-content">
            <div className="logo-stack">
              <VnMark />
              <div className="logo-rule" />
              <div className="logo-vita">VITA</div>
              <div className="logo-nova">NOVA</div>
              <div className="logo-tagline">South Florida &nbsp;·&nbsp; Private Wellness Residence</div>
              <div className="logo-meaning">Vita Nova means new life — a new start, a new way forward.</div>
            </div>
            <div className="hero-divider" />
            <div className="hero-statement">
              {'"Vita Nova means new life. A new start. A new direction. A new way forward."'}
            </div>
            <div className="hero-sub">
              Vita Nova is a private residence with a different kind of program designed by Mac and Laura. We only work
              with a few clients at any given time so every person receives real attention, real care, and real personal
              involvement. We help people get to the core truth of what is really going on — and we help them begin
              again.
            </div>
            <div className="hero-phone">(954) 355-2040</div>
            <div className="hero-phone-label">Speak with someone now &nbsp;·&nbsp; We respond quickly and privately</div>
            <button className="hero-cta" onClick={() => showPage('contact')}>
              Get Started
            </button>
          </div>
        </div>

        <div className="gold-rule" />

        <section>
          <div className="inner">
            <span className="section-tag">For people who have already tried other places</span>
            <div className="callout" style={{ marginBottom: '2rem' }}>
              <p>
                Many people come to Vita Nova after they have already tried rehab, therapy, treatment centers, or other
                programs and still have not gotten the results they needed.
              </p>
              <p>
                That is exactly why Vita Nova exists. We are for people who need something different, something more
                personal, and something that gets to the real truth underneath the behavior.
              </p>
              <p>
                <strong>For many people, Vita Nova is where something finally starts to change.</strong>
                <br />
                <strong>
                  Our goal is not repeat clients. Our goal is to help people heal, rebuild, and begin again the first
                  time.
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
            <div className="two-col" style={{ marginTop: '1.5rem' }}>
              <div>
                <p>We understand that every person is different.</p>
                <p>
                  <strong>Temperament matters.</strong>
                  <br />
                  <strong>Personality matters.</strong>
                  <br />
                  <strong>Family history matters.</strong>
                  <br />
                  <strong>Pain matters.</strong>
                  <br />
                  <strong>What happened to someone matters.</strong>
                </p>
              </div>
              <div>
                <p>
                  That is why we do not treat everyone the same. We work with each person in a deeply personal way to
                  understand what is really going on and what needs to change.
                </p>
                <p>
                  And when appropriate, we also work with family members and loved ones — because real healing does not
                  happen in isolation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        <div className="photo-panel">
          <img src="/images/evening-table.png" alt="A warm evening dinner table set in a cozy home" />
          <div className="ov-left" />
          <div className="ov-bottom" />
          <div className="panel-content">
            <span className="panel-num">Life at Vita Nova &nbsp;·&nbsp; Every evening</span>
            <div className="panel-quote">
              {'"Every evening starts here — around food, around conversation, around family."'}
            </div>
            <div className="panel-sub">Mac &amp; Laura · South Florida</div>
          </div>
        </div>

        <div className="gold-rule" />

        <div className="photo-ph">
          <div className="ph-center">
            <div className="ph-badge">Photo shoot — Monday</div>
            <div className="ph-desc">
              One on one · Comfortable living space
              <br />
              Natural light · Real conversation · Feels like home
            </div>
          </div>
          <div className="ph-panel-content">
            <span className="panel-num" style={{ color: '#b8955a' }}>
              One on One · Every week
            </span>
            <div className="panel-quote" style={{ color: '#1a1a1a', textShadow: 'none', fontSize: '22px' }}>
              {'"Four to five days a week. One on one. As long as it takes."'}
            </div>
            <div className="panel-sub" style={{ color: '#888' }}>
              Mac McGeorge · Founder
            </div>
          </div>
        </div>

        <div className="gold-rule" />

        <section className="alt">
          <div className="inner">
            <span className="section-tag">What we do</span>
            <h2>
              This is how we <em>actually help people.</em>
            </h2>
            <div className="section-rule" />
            <div className="wwd">
              {wwdItems.map((t) => (
                <div className="wwd-item" key={t}>
                  {t}
                </div>
              ))}
              <div className="wwd-item">
                We work with family members and loved ones when appropriate so healing does not happen in isolation.
              </div>
              <div className="wwd-item">We treat every person like family — not like a number, not like a case.</div>
              <div className="wwd-item" style={{ fontStyle: 'italic', color: '#555' }}>
                At Vita Nova, clients are not treated like numbers. They are treated like people. They are treated like
                family.
              </div>
            </div>
            <Stats />
          </div>
        </section>

        <div className="gold-rule" />

        <section className="alt">
          <div className="inner">
            <span className="section-tag">What life at Vita Nova feels like</span>
            <h2>
              Built around <em>people.</em>
            </h2>
            <div className="section-rule" />
            <p>Vita Nova is not built around a cold schedule. It is built around people.</p>
            <p>
              Mac and Laura are here with you throughout the week, according to the program structure and each client&apos;s
              needs. You will spend real time with them — not just in scheduled conversations, but in real life. Talking,
              eating, walking, sitting together, working through what is going on, and learning how to rebuild.
            </p>
            <p>
              The residence has 24-hour security provided, and nursing support is also provided as part of the residence.
              Wellness is also part of the Vita Nova experience — when appropriate, we bring in massage, yoga, physical
              activities, swimming, and other supportive services.
            </p>
            <p>
              <strong>
                Because we only work with a few clients at any given time, we are able to give each person the attention,
                care, and presence they deserve. Our goal is to give each client real time, real attention, and real
                personal involvement.
              </strong>
            </p>
          </div>
        </section>

        <div className="gold-rule" />

        <section className="alt">
          <div className="inner">
            <span className="section-tag">What people say</span>
            <h2>
              In their own <em>words.</em>
            </h2>
            <div className="section-rule" />
            <div className="testimonial-grid">
              <div className="testimonial">
                <div className="testimonial-quote">
                  {'"I had been to several places before Vita Nova and saw very little results. After 30 days with you, I feel completely different. I feel like I finally have my life back."'}
                </div>
                <div className="testimonial-name">— Alex</div>
              </div>
              <div className="testimonial">
                <div className="testimonial-quote">
                  {'"I feel like you saved my life. I had been drinking for years, and you helped me understand how to stop — but more importantly, you helped me understand why I was doing so many destructive things to myself. I could never repay you for giving me my life back."'}
                </div>
                <div className="testimonial-name">— Liz</div>
              </div>
              <div className="testimonial">
                <div className="testimonial-quote">
                  {'"At Vita Nova, I felt like more than a client. I felt like a family member who was truly loved. Mac and Laura were so warm and welcoming, and I enjoyed the meals we shared together. More importantly, real healing took place in my mind and body. The two of you are remarkable."'}
                </div>
                <div className="testimonial-name">— Marc</div>
              </div>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        <div className="nova-meaning">
          <div className="nova-word">Vita Nova means new life.</div>
          <p>
            A new life. A new start. A new way forward. We help people step out of the old patterns, old pain, old
            reactions, and old ways of living — and begin again.
          </p>
        </div>

        <div className="gold-rule" />

        <section>
          <div className="inner-narrow">
            <span className="section-tag" style={{ textAlign: 'center', display: 'block' }}>
              What we believe
            </span>
            <h2 style={{ textAlign: 'center' }}>
              People can be <em>repaired.</em>
            </h2>
            <div className="section-rule" style={{ margin: '1rem auto' }} />
            <div className="believe-block">
              <p>We believe people can be repaired.</p>
              <p>
                We believe broken lives, broken relationships, broken families, and broken spirits can still be rebuilt.
              </p>
              <p>
                We believe people can come back from pain, shame, substance abuse, anger, loss, trauma, and mistakes.
              </p>
              <p>
                We believe forgiveness matters — forgiveness of others, forgiveness of the past, and sometimes hardest of
                all, forgiveness of yourself.
              </p>
              <p>
                Vita Nova is not about judgment. It is about truth, accountability, healing, rebuilding, and a real
                chance to begin again.
              </p>
              <p>
                <strong>{'"You were never broken. You just needed someone to actually show up for you."'}</strong>
              </p>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

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
                Vita Nova is something different. It is real-life healing in a private residence, built around honesty,
                accountability, personal attention, temperament, family understanding, and human connection.
              </p>
              <p>
                Traditional therapy and treatment did not give Mac and Laura all the answers they needed. They had to
                discover what actually helped them survive, rebuild, and begin again. That lived experience is the
                foundation of Vita Nova.
              </p>
            </div>
          </div>
        </section>

        <div className="gold-rule" />

        <section className="reach-block">
          <div className="reach-vn">
            <span className="v">V</span>
            <span className="n">N</span>
          </div>
          <div className="reach-line" />
          <h2>
            When you are ready,
            <br />
            <em>we move quickly.</em>
          </h2>
          <p>
            When you reach out, someone will speak with you privately and respectfully about what is going on. Before you
            enter the residence, Mac or Laura will speak with you directly to make sure Vita Nova is the right fit. We are
            not trying to fill beds. We are trying to heal hearts, help people, and create real change. This is our
            private residence, and we only want people here who are ready, willing, and a true fit for what Vita Nova
            offers.
          </p>
          <div className="reach-phone">(954) 355-2040</div>
          <div className="reach-label">Speak with someone now</div>
          <div className="reach-email">powerpartnershipllc@gmail.com</div>
          <div style={{ marginTop: '3rem' }}>
            <span
              className="section-tag"
              style={{ display: 'block', textAlign: 'center', marginBottom: '1.25rem', color: 'rgba(184,149,90,.7)' }}
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
                <div>Richmond, Virginia — Available selectively</div>
              </div>
              <div className="res-item">
                <div className="res-dot dim" />
                <div>Wilmington, North Carolina — Available selectively</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <button className="hero-cta" onClick={() => showPage('contact')}>
              Get Started
            </button>
          </div>
        </section>

        <FooterFull />
      </div>

      {/* ABOUT PAGE */}
      <div className={`page${active === 'about' ? ' active' : ''}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>
            Who we are
          </span>
          <h1>
            People who have <em>lived it.</em>
            <br />
            People who overcame it.
          </h1>
          <p>
            Mac and Laura did not build Vita Nova from a textbook. They built it from their own lives — from the pain, the
            mistakes, the searching, and the rebuilding.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="bq">
              <blockquote>
                {'"Traditional therapy and treatment did not give Mac and Laura the answers they needed. They had to discover what actually helped them rebuild — what really works, not the clinical distance. That is what Vita Nova is built on."'}
              </blockquote>
              <cite>— Mac &amp; Laura McGeorge · Founders, Vita Nova</cite>
            </div>
            <div className="about-grid">
              <div className="founder-block">
                <h3>Mac McGeorge</h3>
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
                <h3>Laura McGeorge</h3>
                <span className="title">Co-Founder &amp; COO · Vita Nova</span>
                <p>
                  Laura is a former National Account Executive at Zillow, COO, and certified DISC practitioner who rang
                  the Nasdaq bell. She brings operational precision, warmth, and her own lived experience in recovery to
                  every person who walks through the door.
                </p>
                <p>
                  Together, Mac and Laura give every client something no facility can offer — two people who are genuinely
                  invested in their outcome.
                </p>
              </div>
            </div>
            <div className="callout" style={{ marginTop: '2.5rem' }}>
              <p>
                Vita Nova is not a hospital, treatment center, or traditional rehab facility. Vita Nova is a private
                residence with a different kind of program designed by Mac and Laura. This is a private, personal,
                high-touch environment where clients are seen, heard, understood, and guided in a deeply personal way. Mac
                and Laura are here with you — not watching from a distance.
              </p>
              <p>
                <strong>24-hour security provided. Nursing support provided as part of the residence.</strong>
              </p>
            </div>
          </div>
        </section>
        <FooterSmall />
      </div>

      {/* APPROACH PAGE */}
      <div className={`page${active === 'approach' ? ' active' : ''}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>
            Our approach
          </span>
          <h1>
            This is how we
            <br />
            <em>actually help people.</em>
          </h1>
          <p>
            Vita Nova is not traditional therapy. Not standard rehab. Something real — built around honesty,
            accountability, and human connection.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="wwd">
              {wwdItems.map((t) => (
                <div className="wwd-item" key={t}>
                  {t}
                </div>
              ))}
              <div className="wwd-item">We work with family members and loved ones when appropriate.</div>
              <div className="wwd-item">We treat every person like family — not like a number, not like a case.</div>
              <div className="wwd-item" style={{ fontStyle: 'italic', color: '#555' }}>
                At Vita Nova, clients are not treated like numbers. They are treated like people. They are treated like
                family.
              </div>
            </div>
            <Stats />
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
            <p style={{ fontSize: '16px', color: '#333333', marginBottom: '1.5rem' }}>
              Vita Nova is for people dealing with more than one problem. Most people do not come here with just one
              issue. They come here with layers of pain, damage, habits, fear, regret, and confusion.
            </p>
            <div className="help-grid">
              {helpWith.map((h) => (
                <div className="help-item" key={h}>
                  {h}
                </div>
              ))}
            </div>
            <p className="help-closing">
              You do not have to know exactly what to call it.
              <br />
              You just have to know that something has to change.
            </p>
            <p style={{ fontSize: '12px', color: '#999', marginTop: '1.5rem', fontStyle: 'italic' }}>
              Vita Nova is a private wellness residence and personal transformation program. We do not provide medical
              detox, emergency psychiatric care, or hospital-level treatment. All clients are medically stable upon
              arrival.
            </p>
          </div>
        </section>
        <div className="gold-rule" />
        <section>
          <div className="inner">
            <div className="diff-small">
              <span className="diff-heading">A completely different approach</span>
              <p>
                Vita Nova is not traditional therapy. It is not standard rehab. It is not a cold program where someone
                sits in a room for an hour and goes back to the same pain.
              </p>
              <p>
                Mac and Laura have been through it. They had to figure out what really worked — not the textbook, not the
                clinical programs. That lived experience is the foundation of Vita Nova.
              </p>
            </div>
          </div>
        </section>
        <FooterSmall />
      </div>

      {/* PROGRAMS PAGE */}
      <div className={`page${active === 'programs' ? ' active' : ''}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>
            Program options
          </span>
          <h1>
            Every person is different.
            <br />
            <em>Every program is built around you.</em>
          </h1>
          <p>
            Programs are discussed personally on your first call with Mac or Laura. Investment discussed privately — no
            pressure, no obligation.
          </p>
        </div>
        <section>
          <div className="inner">
            <div className="prog-list">
              <div className="prog-item">
                <div>
                  <span className="prog-label">14-Day Intensive Reset</span>
                  <div className="prog-name">Intensive Reset</div>
                </div>
                <div>
                  <p className="prog-desc">
                    For someone who needs to step out of their current environment, clear their head, stabilize, and begin
                    facing what is really going on. A focused, private reset for people who need immediate help,
                    direction, and honesty.
                  </p>
                  <p className="prog-note">Investment discussed personally on your first call</p>
                </div>
              </div>
              <div className="prog-item feat">
                <div>
                  <span className="prog-label">30-Day Rebuild Program · Most selected</span>
                  <div className="prog-name">Rebuild Program</div>
                </div>
                <div>
                  <p className="prog-desc">
                    For someone who needs more time, more structure, and deeper personal work. This program helps the
                    person understand the patterns, pain, behaviors, and decisions that brought them here — and begin
                    rebuilding from the inside out.
                  </p>
                  <p className="prog-note">Investment discussed personally on your first call</p>
                </div>
              </div>
              <div className="prog-item">
                <div>
                  <span className="prog-label">90-Day Life Change Program</span>
                  <div className="prog-name">Life Change Program</div>
                </div>
                <div>
                  <p className="prog-desc">
                    For someone who needs a deeper and more complete reset — time, consistency, accountability, and a
                    serious chance to rebuild their life, habits, thinking, relationships, and direction.
                  </p>
                  <p className="prog-desc">
                    The 90-day program also allows us to do something different. We do not just work with you inside the
                    residence. When appropriate, we help clients practice new reactions in real-life settings — with
                    family, in public, and under normal daily pressures — so they learn how to respond differently before
                    returning fully to their life. We help give clients the tools, habits, awareness, and confidence
                    needed to keep from going back to old ways when life becomes difficult again.
                  </p>
                  <p className="prog-note">Investment discussed personally on your first call</p>
                </div>
              </div>
              <div className="prog-item">
                <div>
                  <span className="prog-label">Private Custom Programs</span>
                  <div className="prog-name">Private Custom Programs</div>
                </div>
                <div>
                  <p className="prog-desc">
                    In certain situations, we create a custom private program for individuals, couples, or families who
                    need something more specific — longer, more involved, built entirely around the client&apos;s needs and
                    personal goals.
                  </p>
                  <p className="prog-note">Investment discussed personally on your first call</p>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '11px', color: '#999', textAlign: 'center' }}>
              All programs include 24-hour security, nursing support, wellness services, all meals, and private
              accommodations. Age 21+. Maximum 8 clients.
            </p>
            <div className="callout" style={{ marginTop: '2.5rem' }}>
              <p>
                <strong>
                  Our goal is not repeat clients. Our goal is lasting change — helping you rebuild and begin again the
                  first time.
                </strong>
              </p>
            </div>
          </div>
        </section>
        <FooterSmall />
      </div>

      {/* INSURANCE PAGE */}
      <div className={`page${active === 'insurance' ? ' active' : ''}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>
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
                When you work with an insurance company, your personal health information gets filed, coded, reviewed, and
                stored. At Vita Nova, none of that happens. Your experience here is completely private.
              </p>
              <p style={{ fontSize: '13px', color: '#b8955a', fontStyle: 'italic', marginTop: '.5rem' }}>
                That is not a limitation. That is a feature.
              </p>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
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
                    When insurance is involved, the insurance company has a say in how long you stay and what services you
                    receive. At Vita Nova, those decisions are made by Mac, Laura, and you — nobody else.
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
            <div style={{ marginTop: '2.5rem' }}>
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
                  Full payment is arranged privately before arrival by cashier&apos;s check or wire transfer, made payable to
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
            <div className="callout" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-playfair),serif',
                  fontStyle: 'italic',
                  color: '#1a1a1a',
                  marginBottom: '.5rem',
                }}
              >
                {'"We do not take insurance. We take people seriously."'}
              </p>
              <p>
                Call us and we will have an honest conversation about what Vita Nova costs, what it includes, and whether
                it is the right fit.
              </p>
              <div style={{ marginTop: '1.25rem', fontSize: '28px', color: '#b8955a', fontFamily: 'var(--font-playfair),serif' }}>
                (954) 355-2040
              </div>
            </div>
          </div>
        </section>
        <FooterSmall />
      </div>

      {/* CONTACT PAGE */}
      <div className={`page${active === 'contact' ? ' active' : ''}`}>
        <div className="page-hero">
          <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>
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
                <h2 style={{ fontSize: '26px', marginBottom: '1.5rem' }}>
                  Reach out <em>now.</em>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <span className="cd-label">Phone</span>
                    <div className="cd-value">(954) 355-2040</div>
                    <div className="cd-sub">We respond quickly and privately</div>
                  </div>
                  <div>
                    <span className="cd-label">Email</span>
                    <div className="cd-value" style={{ fontSize: '14px' }}>
                      powerpartnershipllc@gmail.com
                    </div>
                    <div className="cd-sub">We respond personally — not by auto-reply</div>
                  </div>
                  <div>
                    <span className="cd-label">Primary Residence</span>
                    <div className="cd-value" style={{ fontSize: '14px' }}>
                      South Florida
                    </div>
                    <div className="cd-sub">Year-round · Richmond VA and Wilmington NC available selectively</div>
                  </div>
                </div>
                <div className="callout" style={{ marginTop: '2rem' }}>
                  <p>
                    We are selective about who we welcome — not because we judge, but because we want to make sure Vita
                    Nova is truly the right fit.
                  </p>
                  <p>
                    <strong>We are not trying to fill beds. We are trying to help people rebuild.</strong>
                  </p>
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: '24px', marginBottom: '1.5rem' }}>
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
                        A private car is dispatched to your door. Your room is ready. Mac and Laura are there to welcome
                        you. From this moment, you are family.
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
            <span className="v">V</span>
            <span className="n">N</span>
          </div>
          <div className="reach-line" />
          <div className="reach-phone">(954) 355-2040</div>
          <div className="reach-label">Speak with someone now</div>
          <div className="reach-email">powerpartnershipllc@gmail.com</div>
          <p
            style={{
              marginTop: '2rem',
              fontSize: '13px',
              color: 'rgba(255,255,255,.4)',
              fontStyle: 'italic',
              maxWidth: '420px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.9,
            }}
          >
            Vita Nova is a private wellness residence and personal transformation program. We do not provide medical
            detox, emergency psychiatric care, or hospital-level treatment.
          </p>
        </section>
        <FooterFull />
      </div>
    </>
  )
}
