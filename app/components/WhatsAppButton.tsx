export default function WhatsAppButton() {
  const phoneNumber = '60102462151';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition"
      title="Chat with us on WhatsApp"
    >
      <img
        src="/images/whatsApp.png"
        alt="WhatsApp"
        className="w-full h-full rounded-full object-cover"
      />
    </a>
  );
}
