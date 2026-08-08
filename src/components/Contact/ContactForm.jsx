import { services, contact } from '../../data';

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend wired up yet — see NOTES-before-launch.md. Swap this alert
    // for a real submit handler (email service or CRM) before launch.
    window.alert(`Thanks! This demo form isn't connected yet — please call ${contact.phone} for now.`);
  };

  return (
    <div className="rounded-xl bg-accent p-8">
      <h3 className="mb-1 text-lg font-bold text-secondary-dark">Tell us about your project</h3>
      <p className="mb-6 text-sm text-neutral-600">
        Fill out the form and we'll get back to you to schedule a free estimate.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input type="text" placeholder="Full Name" required className="rounded border border-neutral-200 px-4 py-3 text-sm" />
        <input type="tel" placeholder="Phone Number" required className="rounded border border-neutral-200 px-4 py-3 text-sm" />

        <select required defaultValue="" className="rounded border border-neutral-200 px-4 py-3 text-sm">
          <option value="" disabled>
            Project Type
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Town / County" className="rounded border border-neutral-200 px-4 py-3 text-sm" />

        <textarea
          placeholder="Tell us a bit about your project..."
          required
          className="col-span-full min-h-[110px] rounded border border-neutral-200 px-4 py-3 text-sm"
        />

        <button
          type="submit"
          className="col-span-full rounded bg-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-primary-dark"
        >
          Request Free Quote
        </button>
        <p className="col-span-full text-xs text-neutral-500">
          By submitting, you agree to be contacted by N&amp;P Home Improvement about your request.
        </p>
      </form>
    </div>
  );
}
