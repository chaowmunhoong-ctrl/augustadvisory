export const metadata = {
  title: 'Hazel Lim - August Advisory',
  description: 'Digital business card for Hazel Lim, Managing Director at August Advisory.',
};

const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Lim;Hazel;;;',
  'FN:Hazel Lim',
  'ORG:August Advisory Sdn Bhd',
  'TITLE:Managing Director',
  'TEL;TYPE=CELL:+60122322151',
  'TEL;TYPE=WORK:+60333582128',
  'EMAIL:hazel@augustadvisory.com.my',
  'URL:https://www.augustadvisory.com.my',
  'ADR;TYPE=WORK:;;No. 12-1, Jalan Astaka 1C/KU2, Bandar Bukit Raja;Klang;Selangor;41050;Malaysia',
  'END:VCARD',
].join('\r\n');

const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

const actions = [
  {
    href: 'tel:+60122322151',
    label: '012-232 2151 (Mobile)',
    icon: (
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
    ),
  },
  {
    href: 'https://wa.me/60122322151',
    label: 'Chat on WhatsApp',
    external: true,
    icon: (
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1.1.1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.8-4.2-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.2.1.4 0 .6-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1 .3.2.5.2.6.4.1.2.1.9-.1 1.5z" />
    ),
  },
  {
    href: 'tel:+60333582128',
    label: '03-3358 2128 (Office)',
    icon: (
      <path d="M4 3h4l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v4a2 2 0 01-2 2C9.6 20 4 14.4 4 7a2 2 0 011-1z" />
    ),
  },
  {
    href: 'mailto:hazel@augustadvisory.com.my',
    label: 'hazel@augustadvisory.com.my',
    icon: <path d="M2 5h20v14H2V5zm2 2v.5l8 5.5 8-5.5V7l-8 5.5L4 7z" />,
  },
  {
    href: 'https://www.augustadvisory.com.my',
    label: 'www.augustadvisory.com.my',
    external: true,
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 8h-3.1a15 15 0 00-1.1-4.4A8 8 0 0118.9 10zM12 4c.7 1 1.5 2.9 1.8 6H10.2c.3-3.1 1.1-5 1.8-6zm-2.7.6A15 15 0 007.2 10H4.1a8 8 0 015.2-5.4zM4.1 12h3.1a15 15 0 001.1 4.4A8 8 0 014.1 12zm5.7 6.4A15 15 0 018.2 12h7.6a15 15 0 01-1.6 6.4c-.7.5-1.4.6-2.2.6s-1.5-.1-2.2-.6zM14.7 19.4a15 15 0 001.1-4.4h3.1a8 8 0 01-4.2 4.4z" />
    ),
  },
];

const offices = [
  {
    label: 'Head Office (Klang)',
    lines: ['No. 12-1, Jalan Astaka 1C/KU2,', 'Bandar Bukit Raja, 41050 Klang, Selangor'],
    query: 'No. 12-1, Jalan Astaka 1C/KU2, Bandar Bukit Raja, 41050 Klang, Selangor',
  },
  {
    label: 'KL Office',
    lines: ['B-1-11, Northpoint,', 'Mid Valley City, Kuala Lumpur'],
    query: 'B-1-11, Northpoint, Mid Valley City, Kuala Lumpur',
  },
];

export default function HazelCard() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 px-4"
      style={{ backgroundColor: '#F0FFFE' }}
    >
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border"
        style={{ borderColor: '#348981' }}
      >
        {/* Header */}
        <div className="text-center pt-8 px-6" style={{ backgroundColor: '#F0FFFE' }}>
          <img src="/images/logo-mark-dark.png" alt="August Advisory" className="h-14 mx-auto mb-3" />
          <p className="text-lg font-bold tracking-widest uppercase" style={{ color: '#348981' }}>
            August Advisory
          </p>
          <p className="text-[11px] leading-relaxed mt-2 mb-6" style={{ color: '#5A6C7D' }}>
            CFO ADVISORY&nbsp;|&nbsp;TAXATION&nbsp;|&nbsp;ACCOUNTING<br />
            PAYROLL&nbsp;|&nbsp;CORPORATE SECRETARIAL
          </p>
        </div>

        {/* Profile */}
        <div className="px-6 pt-6 pb-2 bg-white">
          <img
            src="/images/Hazel.png"
            alt="Hazel Lim"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2"
            style={{ borderColor: '#348981' }}
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold" style={{ color: '#2C3E50' }}>Hazel Lim</h1>
            <p className="text-sm mt-1" style={{ color: '#5A6C7D' }}>FCMA, CGMA, C.A.(M)</p>
            <p className="text-sm font-bold tracking-widest uppercase mt-2" style={{ color: '#348981' }}>
              Managing Director
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pt-4 pb-2 flex flex-col gap-2.5">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? '_blank' : undefined}
              rel={a.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm border hover:opacity-80 transition"
              style={{ borderColor: '#E0F2F1', color: '#2C3E50' }}
            >
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{ backgroundColor: '#348981', width: 30, height: 30 }}
              >
                <svg viewBox="0 0 24 24" fill="#fff" width={15} height={15}>{a.icon}</svg>
              </span>
              {a.label}
            </a>
          ))}
        </div>

        {/* Save to contacts */}
        <div className="px-6 pt-3 pb-6">
          <a
            href={vcardHref}
            download="Hazel-Lim-August-Advisory.vcf"
            className="block text-center text-white rounded-full font-bold py-3 text-sm hover:opacity-90 transition"
            style={{ backgroundColor: '#348981' }}
          >
            Save to Contacts
          </a>
        </div>

        {/* Offices */}
        <div className="px-6 py-6" style={{ backgroundColor: '#2C3E50' }}>
          {offices.map((o) => (
            <a
              key={o.label}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.query)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-white mb-4 last:mb-0 hover:opacity-80 transition"
            >
              <svg viewBox="0 0 24 24" fill="#348981" width={16} height={16} className="mt-0.5 shrink-0">
                <path d="M12 2a7 7 0 00-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
              <span>
                <span className="block text-[12.5px] font-bold">{o.label}</span>
                <span className="block text-[11.5px] opacity-90 leading-relaxed">
                  {o.lines.map((l) => <span key={l}>{l}<br /></span>)}
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-[10px] py-3" style={{ color: '#5A6C7D' }}>
          August Advisory Sdn Bhd (202201029858-V)
        </p>
      </div>
    </div>
  );
}
