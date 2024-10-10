// components/PhoneIcon.tsx
import { FaPhone } from "react-icons/fa";

export default function PhoneIcon() {
  const phoneNumber = "+380686868700"; // phone number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-10 right-10 p-3 rounded-full bg-green-600 text-white hover:bg-green-700"
    >
      <FaPhone size={24} />
    </a>
  );
}
