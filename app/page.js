const palette=["#17414A","#DCEBE6","#E3A857","#F6FAF8"];
const Illus=({label,cls="",seed=1})=>{
const c1=palette[seed%4],c2=palette[(seed+1)%4];
return(<div className={`ph relative overflow-hidden ${cls}`} aria-label={label} role="img">
<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
<rect width="400" height="300" fill={c2}/>
<circle cx={80+seed*30} cy={90+seed*10} r="70" fill={c1} opacity="0.18"/>
<path d={`M0,${180+seed*8} C100,${140+seed*12} 300,${220-seed*10} 400,${170+seed*6} L400,300 L0,300 Z`} fill={c1} opacity="0.35"/>
<circle cx={320-seed*15} cy={70+seed*8} r="34" fill={c1} opacity="0.5"/>
</svg></div>)};
const Img=({n,cls="",seed=1})=><Illus label={n} cls={cls} seed={seed}/>;
const Photo=({src,alt,cls=""})=><img src={src} alt={alt} className={`ph object-cover ${cls}`}/>;

const who=[
["Anxiety & Panic","On the outside you're functional and high-achieving; inside, there's constant worry, tension, and a sense of bracing for something to go wrong."],
["Trauma","Whether it's a single event or a longer-standing pattern from childhood or relationships, we work carefully toward safety and stability, not just symptom relief."],
["Burnout & Perfectionism","For entrepreneurs, creatives, and professionals who've pushed through stress for years and feel disconnected from themselves, therapy becomes a place to slow down and reconnect."]];

const services=[
["Anxiety & Panic Therapy in Santa Monica","If you look put-together but feel exhausted by overthinking, tension, or trouble sleeping, anxiety and panic therapy helps you understand what your body and mind are reacting to, using CBT and mindfulness-based practices."],
["Trauma Therapy & EMDR in Santa Monica","Trauma therapy is paced carefully around safety and stabilization, whether you're working through a single difficult experience or longer-standing patterns. Sessions draw on EMDR and body-oriented techniques."],
["Burnout & Perfectionism Therapy in Santa Monica","Many clients are professionals and creatives who feel disconnected from themselves after years of pushing through pressure. Burnout and perfectionism therapy builds a more sustainable way of living and working."]];

const tags=["Anxiety","Panic","Trauma","Burnout","Perfectionism","EMDR","CBT","Mindfulness","Body-oriented work"];

const faqs=[
["Where is your office, and is telehealth available?","The office is at 123th Street 45 W, Santa Monica, CA 90401 — a quiet, private space with natural light. Secure telehealth sessions are also available for clients located anywhere in California."],
["Who do you work with?","Adults dealing with anxiety, panic, trauma, burnout, or perfectionism — often high-achieving, self-aware people who feel exhausted or stuck on the inside despite appearing fine on the outside."],
["What kind of trauma do you work with?","Both single-incident trauma and more complex, long-standing patterns that stem from childhood, relationships, or chronic stress. The pace is always set around safety and stabilization first."],
["What approaches do you use?","Cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, drawn on based on what fits what you're working through."],
["What's the goal of therapy with you?","Not just symptom relief, but real insight, resilience, and a stronger relationship with yourself over time."]];

export default function Home(){return(<main>
<header className="sticky top-0 z-10 border-b border-primary/10 bg-paper/95 backdrop-blur"><nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
<a href="#" className="font-head text-xl font-semibold text-primary">Dr. Maya Reynolds, PsyD</a>
<div className="hidden gap-7 text-sm md:flex">{["About","Services","Office","FAQs","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} className="hover:text-primary">{x}</a>)}</div>
<a href="#contact" className="btn !px-5 !py-2 text-sm">Schedule a Consultation</a></nav></header>

<section className="sec grid items-center gap-10 md:grid-cols-2">
<div><p className="text-sm text-primary/80">In-person in Santa Monica &amp; telehealth across California</p>
<h1 className="mt-3 text-4xl leading-tight text-primary md:text-6xl">Anxiety, Trauma &amp; Burnout Therapy in Santa Monica, CA</h1>
<p className="mt-5 max-w-prose text-lg">You may look put-together on the outside while feeling exhausted, on edge, or stuck in overthinking on the inside. Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, offers warm, grounded therapy for adults ready to slow down and feel more like themselves. Sessions are in person or by secure telehealth anywhere in California.</p>
<a href="#contact" className="btn mt-7">Schedule a Consultation</a></div>
<div className="grid grid-cols-2 gap-4"><Photo src="/images/hero1.jpg" alt="Calm therapy space in Santa Monica" cls="h-72 w-full md:h-96"/><Photo src="/images/hero2.jpg" alt="Santa Monica coastline near the office" cls="mt-10 h-72 w-full md:h-96"/></div></section>

<section className="bg-secondary"><div className="sec grid items-center gap-10 md:grid-cols-2">
<Photo src="/images/intro.jpg" alt="A quiet, grounding space to reflect" cls="h-80 w-full"/>
<div><h2 className="text-3xl text-primary md:text-4xl">Functional on the outside. Exhausted on the inside.</h2>
<p className="mt-5 max-w-prose">Many clients come in feeling capable and high-achieving, while quietly carrying constant worry, tension, or a sense of always bracing for something to go wrong. Others are still affected by earlier experiences that shape how safe, confident, or connected they feel today. Whatever brought you here, it's real, and it's worth support.</p></div></div></section>

<section className="sec"><h2 className="text-3xl text-primary md:text-4xl">Who therapy can help</h2>
<div className="mt-10 grid gap-8 md:grid-cols-3">{who.map(([t,d],i)=><div key={t}><Photo src={`/images/who-${i}.jpg`} alt={t+" therapy"} cls="h-56 w-full"/><h3 className="mt-4 text-2xl text-primary">{t}</h3><p className="mt-2">{d}</p></div>)}</div></section>

<section className="bg-primary py-10 text-paper"><div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 font-head text-2xl italic md:text-3xl">{tags.map(t=><span key={t}>{t}</span>)}</div></section>

<section id="about" className="sec grid items-center gap-10 md:grid-cols-5">
<Photo src="/images/maya.jpg" alt="Dr. Maya Reynolds, PsyD" cls="h-96 w-full md:col-span-2"/>
<div className="md:col-span-3"><h2 className="text-3xl text-primary md:text-4xl">Meet Dr. Maya Reynolds, PsyD</h2>
<p className="mt-5 max-w-prose">I'm a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.</p>
<p className="mt-4 max-w-prose">My approach is warm, collaborative, and grounded — structured enough to feel supportive, with room for real reflection. I draw on CBT, EMDR, mindfulness, and body-oriented techniques, chosen around what you're working through, whether that's trauma, burnout, perfectionism, or anxiety that won't quiet down.</p>
<p className="mt-4 max-w-prose">My goal isn't just symptom relief — it's helping you build insight, resilience, and a stronger relationship with yourself over time.</p></div></section>

<section id="services" className="bg-secondary"><div className="sec"><h2 className="text-3xl text-primary md:text-4xl">Therapy services in Santa Monica</h2>
<div className="mt-10 grid gap-6 md:grid-cols-3">{services.map(([t,d])=><article key={t} className="rounded-2xl bg-paper p-7"><h3 className="text-2xl text-primary">{t}</h3><p className="mt-3">{d}</p><a href="#contact" className="mt-4 inline-block font-semibold text-primary underline underline-offset-4">Learn more</a></article>)}</div></div></section>

<section id="office" className="sec"><h2 className="text-3xl text-primary md:text-4xl">A calm space in Santa Monica</h2>
<p className="mt-4 max-w-prose">The office at 123th Street 45 W, Santa Monica, CA 90401 is a quiet, private space designed to feel calm and grounding, with natural light and an uncluttered environment. Clients often say the space itself helps them feel more at ease as soon as they arrive. Prefer to stay home? Secure telehealth is available anywhere in California.</p>
<div className="mt-8 grid gap-4 md:grid-cols-2"><Photo src="/images/office1.jpg" alt="Dr. Reynolds' therapy office seating area" cls="h-72 w-full"/><Photo src="/images/office2.jpg" alt="Dr. Reynolds' therapy office reading nook" cls="h-72 w-full"/></div></section>

<section id="faqs" className="bg-secondary"><div className="sec max-w-3xl"><h2 className="text-3xl text-primary md:text-4xl">Questions you might have</h2>
<div className="mt-8 divide-y divide-primary/20">{faqs.map(([q,a])=><details key={q} className="py-4"><summary className="cursor-pointer font-semibold text-primary">{q}</summary><p className="mt-2">{a}</p></details>)}</div></div></section>

<section id="contact" className="sec text-center"><h2 className="text-3xl text-primary md:text-5xl">Find out if we're the right fit.</h2>
<p className="mx-auto mt-4 max-w-prose">Reaching out is often the hardest step. Schedule a consultation to share what's bringing you in and see whether working together feels right — no pressure either way.</p>
<a href="mailto:hello@example.com" className="btn mt-7">Schedule a Consultation</a></section>

<footer className="bg-primary py-10 text-paper"><div className="mx-auto max-w-6xl px-5 text-sm"><p className="font-head text-xl">Dr. Maya Reynolds, PsyD</p><p className="mt-2">Licensed Clinical Psychologist (Fictional Therapist) · 123th Street 45 W, Santa Monica, CA 90401</p><p className="mt-1">In-person in Santa Monica · Telehealth across California</p></div></footer>
</main>)}
