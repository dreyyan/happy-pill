import type React from "react";

interface FooterSectionProps {
    iconSrc: string;
    title: string;
    description: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ iconSrc, title, description }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={iconSrc} alt={title} className="size-7" />
            <p className="footer-title">{title}</p>
            <p className="footer-caption text-center mt-2">{description}</p>
        </div>
    );
};

export default FooterSection;