export default function WhatsAppButton() {
  const phoneNumber = '601024625151';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center text-3xl"
      style={{ backgroundColor: '#25D366' }}
      title="Chat with us on WhatsApp"
    >
      💬
    </a>
  );
}
