import { contact } from '../../data/site';

const cardClass = 'my-5 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm';

export default function ContactSection() {
  return (
    <section id="contacto" className="flex min-h-[60vh] flex-col items-center justify-center bg-black px-4 py-20 text-center lg:py-[100px]">
      <h2 className="mb-8 text-3xl font-bold text-portfolio-red md:text-[2.5rem]">Contacto</h2>
      <div className="w-full max-w-[600px] text-base md:text-lg">
        <p className={`${cardClass} break-words`}>Correo: <a href={`mailto:${contact.email}`} className="font-bold text-portfolio-red hover:text-[#ff6b7a]">{contact.email}</a></p>
        <div className={cardClass}>
          <p>Instagram:</p>
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-3 rounded-full px-6 py-3 font-bold text-portfolio-red transition hover:-translate-y-0.5 hover:text-white hover:shadow-[0_8px_20px_rgba(225,48,108,0.4)]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
            </svg>
            {contact.instagramLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
