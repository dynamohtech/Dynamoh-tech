import ProjectForm from "./ProjectForm";

export default function StartProject() {
  return (
    <section
      id="start-a-project"
      className="container-page py-20 md:py-28 border-t border-line"
    >
      <div className="grid md:grid-cols-[minmax(0,14rem)_1fr] gap-8 md:gap-16">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink md:sticky md:top-24">
            Start a project
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-ink-soft text-lg leading-relaxed mb-8">
            Tell me what you're working with and I'll reply by email —
            usually within a day or two.
          </p>
          <ProjectForm />
        </div>
      </div>
    </section>
  );
}
