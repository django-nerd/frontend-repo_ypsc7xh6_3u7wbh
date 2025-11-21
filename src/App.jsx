import React from 'react'
import { Sparkles, ShieldCheck, Gauge, Workflow, ArrowRight, Check } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const particles = Array.from({ length: 36 }).map((_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 10 + Math.random() * 14,
  hue: [210, 2, 48, 132][Math.floor(Math.random() * 4)], // blue, red, yellow-ish, green
  sat: 70 + Math.floor(Math.random() * 15),
  light: 55 + Math.floor(Math.random() * 10),
}))

function GlassSquircle({ children, className = '' }) {
  return (
    <div className={`relative rounded-[22px] bg-white/[0.02] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04),_0_10px_30px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl ${className}`}>
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] [mask-image:radial-gradient(150%_110%_at_50%_0%,black,transparent)] opacity-[0.6]" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)' }} />
      {children}
    </div>
  )
}

function Nav() {
  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center">
      <div className="glass-float flex items-center gap-6 px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-[14px] bg-gradient-to-br from-indigo-400/50 to-fuchsia-400/50 border border-white/10 grid place-items-center">
            <Sparkles className="size-4 text-white/90" strokeWidth={1.5} strokeLinecap="round" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Xantelle</span>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex-1" />
        <button className="btn-pill">
          Get a demo
          <ArrowRight className="size-4 ml-2" strokeWidth={1.5} strokeLinecap="round" />
        </button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24">
      {/* Liquid gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -inset-1 opacity-70 mix-blend-screen">
          <div className="liquid-bg size-full" />
        </div>
        {/* Google-style particles */}
        <div className="absolute inset-0">
          {particles.map(p => (
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs mb-5">
              Built on Gemini 3 Pro • Enterprise Ready
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Intelligent Agents for the Enterprise.
            </h1>
            <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl">
              Xantelle helps your teams design, deploy, and govern AI agents natively on Gemini 3 Pro with security, observability, and performance at scale.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button className="btn-pill">
                Start free trial
                <ArrowRight className="size-4 ml-2" strokeWidth={1.5} strokeLinecap="round" />
              </button>
              <button className="btn-ghost">View docs</button>
            </div>
          </div>
          <div className="fade-in-up relative h-[420px] lg:h-[520px]">
            <GlassSquircle className="absolute inset-0 p-3">
              <div className="relative size-full rounded-[18px] overflow-hidden">
                <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                {/* soft vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent,rgba(0,0,0,0.45))]" />
              </div>
            </GlassSquircle>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <GlassSquircle className="p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-30px_rgba(20,184,166,0.3)]">
      <div className="flex items-start gap-4">
        <div className="size-12 shrink-0 rounded-[16px] bg-white/[0.04] border border-white/10 grid place-items-center">
          <Icon className="size-6 text-white/90" strokeWidth={1.5} strokeLinecap="round" />
        </div>
        <div>
          <h3 className="text-white font-medium text-lg">{title}</h3>
          <p className="text-white/65 mt-1 leading-relaxed">{desc}</p>
        </div>
      </div>
    </GlassSquircle>
  )
}

function Features() {
  return (
    <section id="features" className="relative z-10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for scale and control</h2>
          <p className="text-white/60 mt-3">Everything you need to run production AI agents in the enterprise.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="fade-in-up" style={{ animationDelay: '0.05s' }}>
            <FeatureCard icon={ShieldCheck} title="Compliance-first" desc="Granular policy controls, audit trails, and data residency meet the strictest standards." />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.12s' }}>
            <FeatureCard icon={Gauge} title="Real-time performance" desc="Low-latency inference pipelines with autoscaling and built-in observability." />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <FeatureCard icon={Workflow} title="Composable workflows" desc="Design complex, multi-agent systems with typed tools and verifiable outcomes." />
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Simple pricing</h2>
          <p className="text-white/60 mt-3">Choose the plan that fits. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
            <button className="btn-pill mt-8 w-full">Get started</button>
          </GlassSquircle>

          <div className="fade-in-up">
            <div className="relative rounded-[22px] p-[1px] animated-gradient-border">
              <GlassSquircle className="p-6 rounded-[22px]">
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
                <button className="btn-pill mt-8 w-full">Contact sales</button>
              </GlassSquircle>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* subtle noise to add depth */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] [background-size:240px]" />

      <Nav />
      <Hero />
      <Features />
      <Pricing />

      {/* footer */}
      <footer className="relative z-10 py-16 text-white/50 text-sm text-center">
        © {new Date().getFullYear()} Xantelle. All rights reserved.
      </footer>
    </div>
  )
}
