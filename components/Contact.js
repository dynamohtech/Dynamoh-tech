const channels = [
  {
    label: "Email",
    value: "dynamohtech24@gmail.com",
    href: "mailto:dynamohtech24@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+234 901 223 0263",
    href: "https://wa.me/2349012230263",
  },
  {
    label: "Telegram",
    value: "@Dynamoh_24",
    href: "https://t.me/Dynamoh_24",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-adedamola-460245229",
  },
  {
    label: "GitHub",
    value: "dynamohtech",
    href: "https://github.com/dynamohtech",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="font-display font-semibold text-2xl text-paper md:sticky md:top-24">
              Contact
            </h2>
          </div>

          <div>
            <p className="measure text-paper/80 text-lg leading-relaxed">
              Invoices piling up, data stuck between systems, or leads waiting
              on someone to review them by hand? If there's a workflow you're
              tired of doing manually, message me directly. I read everything
              myself.
            </p>
            <p className="measure mt-4 text-paper/60 leading-relaxed">
              Based in Lagos (UTC+1), with full overlap with UK working hours
              and US East Coast mornings.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 rounded-sm border border-paper/25 px-5 py-4 hover:border-accent hover:bg-paper/5 transition-colors"
                >
                  <span className="text-sm text-paper/55">{channel.label}</span>
                  <span className="text-paper font-medium text-right break-words">
                    {channel.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
