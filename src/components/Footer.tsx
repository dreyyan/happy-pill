import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <div className="py-6 border-t border-[var(--text-primary)] bg-[var(--background)]">
      {/* Main content */}
      <div className="
        container 
        mx-auto 
        px-6 md:px-8 lg:px-12
        flex flex-col md:flex-row 
        md:justify-between 
        md:items-start 
        gap-8 md:gap-6
        text-[var(--text-primary)]
      ">
        <FooterSection
          iconSrc="address-icon.svg"
          title="Address"
          description="G-Park Phase 2, Gaisano ICC, Benigno Aquino Avenue, Brgy. San Rafael, Mandurriao, Iloilo City, Philippines"
          onClick={() => {
            const address = encodeURIComponent(
              "G-Park Phase 2, Gaisano ICC, Benigno Aquino Avenue, Brgy. San Rafael, Mandurriao, Iloilo City, Philippines"
            );
            window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
          }}
        />

        <FooterSection
          iconSrc="opening-time-icon.svg"
          title="Opening Time"
          description={[
            "Friday & Saturday | 5:00 P.M. - 4:00 A.M.",
            "Sunday - Thursday | 5:00 P.M. - 2:00 A.M.",
          ]}
        />

        <FooterSection
          iconSrc="phone-icon.svg"
          title="Phone"
          description="0994-249-7853 / 0907-857-6797"
        />

        <FooterSection
          iconSrc="email-icon.svg"
          title="Email"
          description="happypill.barresto@gmail.com"
          onClick={() => (window.location.href = "mailto:happypill.barresto@gmail.com")}
        />
      </div>

      {/* Copyright */}
      <p className="
        poppins 
        text-center 
        font-medium 
        text-sm 
        text-[var(--text-primary)] 
        mt-8 
        opacity-80
      ">
        © 2024-{new Date().getFullYear()} Happy Pill Bar & Resto. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;