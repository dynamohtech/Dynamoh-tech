"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitProjectInquiry } from "@/app/actions";
import { SERVICE_OPTIONS } from "@/lib/services";

const initialState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-sm border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors";

function Field({ label, name, type = "text", optional = false, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-ink-soft mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={!optional}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center rounded-sm bg-ink px-6 py-3 text-[0.95rem] font-medium text-paper hover:bg-accent-strong transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Sending…" : "Send project details"}
    </button>
  );
}

export default function ProjectForm() {
  const [state, formAction] = useActionState(submitProjectInquiry, initialState);

  return (
    <form action={formAction} className="space-y-7">
      {/* Honeypot field: hidden from real visitors and skipped by screen
          readers. Bots that fill it get a fake success. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
      </div>

      <Field
        label="Company (optional)"
        name="company"
        optional
        autoComplete="organization"
      />

      <fieldset>
        <legend className="text-sm text-ink-soft mb-3">
          What do you need? Select all that apply.
        </legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 rounded-sm border border-line px-4 py-3 text-sm text-ink-soft has-[:checked]:border-accent has-[:checked]:text-ink has-[:checked]:bg-accent-soft cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                name="services"
                value={option.id}
                className="accent-accent"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm text-ink-soft mb-2">
          Tell me about the process
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What comes in, what happens to it, and where should it end up? Mention the apps involved and your timeline."
          className={inputClass}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        {state.status === "success" && (
          <p className="text-sm text-accent-strong" role="status">
            {state.message}
          </p>
        )}
        {state.status === "error" && (
          <p className="text-sm text-red-700" role="alert">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
