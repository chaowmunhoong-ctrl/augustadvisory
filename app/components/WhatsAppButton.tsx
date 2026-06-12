export default function WhatsAppButton() {
  const phoneNumber = '601024625151';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center"
      style={{ backgroundColor: '#25D366' }}
      title="Chat with us on WhatsApp"
    >
      <svg
        className="w-9 h-9"
        fill="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(2, 1) scale(1.1)">
          <path d="M16.89 15.48c-.25-.12-1.49-.74-1.72-.82-.23-.08-.4-.12-.57.12-.17.24-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.12-1.07-.39-2.04-1.26-.76-.67-1.26-1.5-1.41-1.74-.15-.24-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43-.15 0-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.3 3.82.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.16-.48-.28z"/>
        </g>
      </svg>
    </a>
  );
}
