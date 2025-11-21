import React from 'react'
import { Sparkles, ShieldCheck, Gauge, Workflow, ArrowRight, Check, Lock, LineChart, Boxes } from 'lucide-react'
import Spline from '@splinetool/react-spline'

// Enhanced, muted Google-color sparkles
const particles = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  size: Math.random() * 5 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 12 + Math.random() * 16,
  hue: [210, 2, 48, 132][Math.floor(Math.random() * 4)], // blue, red, yellow, green
  sat: 65 + Math.floor(Math.random() * 12),
  light: 52 + Math.floor(Math.random() * 10),
}))

function GlassSquircle({ children, className = '' }) {
  return (
    <div className={`relative rounded-[22px] bg-white/[0.02] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),_0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-[22px] [mask-image:radial-gradient(140%_120%_at_50%_0%,black,transparent)]" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06)' }} />
      {children}
    </div>
  )
}

function Nav() {
  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center">
      <div className="relative">
        <div className="absolute -inset-[1px] rounded-full bg-[conic-gradient(from_120deg,rgba(99,102,241,0.25),rgba(236,72,153,0.25),rgba(16,185,129,0.25),rgba(99,102,241,0.25))] blur-md opacity-60" />
        <div className="glass-float flex items-center gap-6 px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-[14px] bg-gradient-to-br from-indigo-400/50 to-fuchsia-400/50 border border-white/10 grid place-items-center">
              <Sparkles className="size-4 text-white/90" strokeWidth={1.5} strokeLinecap="round" />
            </div>
            <span className="text-white/90 font-semibold tracking-tight">Xantelle</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            {[
              { href: '#features', label: 'Features' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>
          <div className="flex-1" />
          <button className="btn-primary">
            Get a demo
            <ArrowRight className="size-4 ml-2" strokeWidth={1.5} strokeLinecap="round" />
          </button>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-44 pb-28">
      {/* Liquid gradients + grid + sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -inset-1 opacity-80 mix-blend-screen">
          <div className="liquid-bg size-full" />
        </div>
        <div className="grid-overlay" />
        <div className="absolute inset-0">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full blur-[10px] animate-particle opacity-0"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                background: `radial-gradient(circle, hsla(${p.hue},${p.sat}%,${p.light}%,0.6), transparent 60%)`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.06))',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="fade-in-up">
            <div className="badge">Built on Gemini 3 Pro • Enterprise Ready</div>
            <h1 className="hero-title">
              Intelligent Agents for the Enterprise.
            </h1>
            <p className="mt-5 text-white/70 text-[1.05rem] leading-relaxed max-w-xl">
              Xantelle helps your teams design, deploy, and govern AI agents natively on Gemini 3 Pro with security, observability, and performance at scale.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button className="btn-primary">
                Start free trial
                <ArrowRight className="size-4 ml-2" strokeWidth={1.5} strokeLinecap="round" />
              </button>
              <button className="btn-ghost">View docs</button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-white/70">
              {[
                { label: 'Latency p95', value: '120ms' },
                { label: 'Uptime', value: '99.99%' },
                { label: 'Regions', value: '12' },
              ].map((m) => (
                <div key={m.label} className="stat">
                  <div className="text-white text-xl font-semibold">{m.value}</div>
                  <div className="text-xs mt-1 opacity-70">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in-up relative h-[440px] lg:h-[560px]">
            <GlassSquircle className="absolute inset-0 p-3">
              <div className="relative size-full rounded-[18px] overflow-hidden">
                <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent,rgba(0,0,0,0.45))]" />
              </div>
            </GlassSquircle>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc, accent = 'indigo' }) {
  const bgMap = {
    indigo: 'from-indigo-400/30 to-fuchsia-400/30',
    emerald: 'from-emerald-400/30 to-teal-400/30',
    amber: 'from-amber-400/30 to-rose-400/30',
  }
  return (
    <div className="group relative">
      <div className="absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(from_0deg,rgba(99,102,241,0.15),rgba(236,72,153,0.15),rgba(16,185,129,0.15),rgba(99,102,241,0.15))] blur" />
      <GlassSquircle className="p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
        <div className="flex items-start gap-4">
          <div className={`size-12 shrink-0 rounded-[16px] grid place-items-center bg-white/[0.04] border border-white/10`}> 
            <Icon className="size-6 text-white/90" strokeWidth={1.5} strokeLinecap="round" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg">{title}</h3>
            <p className="text-white/65 mt-1 leading-relaxed">{desc}</p>
          </div>
        </div>
      </GlassSquircle>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in-up text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for scale and control</h2>
          <p className="text-white/60 mt-3">Everything you need to run production AI agents in the enterprise.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="fade-in-up" style={{ animationDelay: '0.05s' }}>
            <FeatureCard icon={Lock} title="Compliance-first" desc="Granular policy controls, audit trails, DLP, PII redaction, and data residency for global teams." />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.12s' }}>
            <FeatureCard icon={LineChart} title="Real-time performance" desc="Low-latency inference pipelines with autoscaling and deep observability out-of-the-box." />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <FeatureCard icon={Boxes} title="Composable workflows" desc="Design multi-agent systems with typed tools, approvals, and verifiable outcomes." />
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Simple pricing</h2>
          <p className="text-white/60 mt-3">Choose the plan that fits. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <GlassSquircle className="p-6 fade-in-up">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl font-medium">Starter</h3>
              <span className="text-white/70">$49/mo</span>
            </div>
            <p className="text-white/60 mt-2">Moderately good pricing.</p>
            <ul className="mt-6 space-y-3 text-white/70">
              {['Up to 10k requests/mo', 'Basic analytics', 'Email support'].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><Check className="size-4" strokeWidth={1.5} strokeLinecap="round" /> {t}</li>
              ))}
            </ul>
            <button className="btn-primary mt-8 w-full">Get started</button>
          </GlassSquircle>

          <div className="fade-in-up">
            <div className="relative rounded-[24px] p-[1px] animated-gradient-border">
              <GlassSquircle className="p-6 rounded-[24px] relative overflow-hidden">
                <div className="absolute right-4 top-4 text-[10px] tracking-wide px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">MOST FLEXIBLE</div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-medium">Enterprise</h3>
                  <span className="text-white/70">Custom</span>
                </div>
                <p className="text-white/60 mt-2">Gemini 3 Pro Native.</p>
                <ul className="mt-6 space-y-3 text-white/70">
                  {['Unlimited scale', 'SLA & SSO', 'Dedicated VPC', 'Solutions engineering'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="size-4" strokeWidth={1.5} strokeLinecap="round" /> {t}</li>
                  ))}
                </ul>
                <button className="btn-primary mt-8 w-full">Contact sales</button>
              </GlassSquircle>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <GlassSquircle className="px-8 py-10 text-center">
          <h3 className="text-white text-2xl font-semibold">Ready to build your first Gemini-native agent?</h3>
          <p className="text-white/70 mt-3">We’ll help you architect secure, observable workflows tailored to your stack.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="btn-primary">Book a demo</button>
            <button className="btn-ghost">Talk to sales</button>
          </div>
        </GlassSquircle>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* soft noise */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] [background-size:240px]" />

      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="relative z-10 py-16 text-white/50 text-sm text-center">
        © {new Date().getFullYear()} Xantelle. All rights reserved.
      </footer>
    </div>
  )
}
