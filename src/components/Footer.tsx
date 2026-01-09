import { Link } from "react-router-dom";
import { useState } from "react";
import Styles from "../styles/Styles";
import FooterSection from "./FooterSection";

const Footer = () => {
    return (
        <div className="py-[24px] border-t border-[var(--text-primary)]">
            <div className="flex flex-col justify-center text-[var(--text-primary)] gap-y-[16px] px-[64px] pb-[40px]">
                <FooterSection
                    iconSrc="address-icon.svg"
                    title="Address"
                    description="G-Park Phase 2, Gaisano ICC, Benigno Aquino Avenue,  Brgy. San Rafael, Mandurriao, Iloilo City, Philippines"
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
                    description="Friday & Saturday | 5:00 P.M. - 4:00 A.M.
                    Sunday to Thursday | 5:00 P.M. - 2:00 A.M."
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
                    onClick={() => window.location.href = "mailto:happypill.barresto@gmail.com"}
                />
            </div>

            <p className="poppins text-center font-medium text-[12px] text-[var(--text-primary)]">© 2024-2025 Happy Pill Bar & Resto. All rights reserved.</p>
        </div>
    );
};

export default Footer;