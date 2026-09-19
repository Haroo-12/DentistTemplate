import {
  FaPhoneAlt,
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export const branchData = {
  name: "Main (Gulistan-e-Johar Karachi)",
  details: [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Address",
      lines: [
        "Best DENTAL CLINIC in whole KARACHI, Block 15 Gulistan-e-Johar Karachi, 75290, Pakistan",
      ],
    },
    {
      id: 2,
      icon: FaPhoneAlt,
      title: "Branch Phone",
      main: "03*****",
      sub: "Main Helpline: +92 *******",
    },
    {
      id: 3,
      icon: FaClock,
      title: "Business Hours",
      lines: ["Mon - Sun: 12 PM - 10 PM"],
    },
  ],
};

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.559564568229!2d67.12549179999999!3d24.913000699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33923f45e5fc9%3A0xa2213a443ac9a9c0!2sRoyal%20Dental%20and%20Aesthetic%20Clinic!5e0!3m2!1sen!2s!4v1788904513201!5m2!1sen!2s";

// ✅ State-dependent hai — isliye ab ye function hai, static array nahi.
// Component apni current state/handlers pass karega, isse values hamesha live rahengi.
export const getFormFields = (
  { name, phonenumber, treatment, date },
  { handleNameChange, handlePhoneChange, handleTreatmentChange, handleDateChange }
) => [
  {
    id: 1,
    label: "Full Name",
    icon: FaUser,
    type: "text",
    placeholder: "Your Name",
    required: true,
    onchange: handleNameChange,
    value: name,
  },
  {
    id: 2,
    label: "Phone Number",
    icon: FaPhoneAlt,
    type: "number",
    placeholder: "03*****",
    required: true,
    onchange: handlePhoneChange,
    value: phonenumber,
  },
  {
    id: 3,
    label: "Dental Treatment",
    icon: null,
    type: "select",
    placeholder: "Dental Implants",
    fullWidth: true,
    required: true,
    value: treatment,
    onchange: handleTreatmentChange,
    options: treatmentOptions,
  },
  {
    id: 4,
    label: "Preferred Date (Optional)",
    icon: FaCalendarAlt,
    placeholder: "07/22/2026",
    type: "date",
    fullWidth: true,
    required: true,
    onchange: handleDateChange,
    value: date,
  },
];

export const sidebarInfo = {
  title: "Book Online",
  description:
    'Fill out the form to create your appointment request. Clicking "Book on WhatsApp" will open a pre-filled chat with our receptionist.',
  contacts: [
    { id: 1, icon: FaEnvelope, value: "@example.com" },
    { id: 2, icon: FaPhone, value: "+92 ******** (Main)" },
  ],
};

// ✅ Options static hain, bahar theek hai
export const treatmentOptions = [
  "Teeth Extraction",
  "Composite Veneer",
  "GIC Filling",
  "Composite Filling",
  "Scaling",
  "Polishing",
  "Orthodontic Treatment",
  "Complete Denture",
  "Dental Implants",
  "Porcelain Crowns",
  "Surgical Extraction",
  "Root Canal",
  "Bleaching",
  "Partial Denture",
  "Zirconia Crowns",
];