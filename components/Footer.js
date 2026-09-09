export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="container-page py-6 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span>© {new Date().getFullYear()} Emmanuel Adegbaju</span>
        <span>Lagos, Nigeria</span>
      </div>
    </footer>
  );
}
