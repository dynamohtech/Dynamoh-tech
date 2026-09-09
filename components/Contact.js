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
    note: "Web3 inquiries",
    href: "https://t.me/Dynamoh_24",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    // TODO(Emmanuel): replace with your real profile URL, e.g.
    // https://www.linkedin.com/in/your-handle
    href: "https://www.linkedin.com/in/REPLACE-WITH-YOUR-HANDLE",
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
              Odoo rollout stalled? Invoices piling up across systems that
              don't talk to each other? Message me directly — I read
              everything myself.
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
                  <span className="text-sm text-paper/55">
                    {channel.label}
                    {channel.note ? ` · ${channel.note}` : ""}
                  </span>
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
