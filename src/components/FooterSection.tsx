import type React from "react";

interface FooterSectionProps {
    iconSrc: string;
    title: string;
    description: string;
    onClick?: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ iconSrc, title, description, onClick }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={iconSrc} alt={title} className="size-7" />
            <p className="footer-title">{title}</p>
            {onClick ? (
                <p
                    className="footer-caption text-center mt-2 text-blue-500 cursor-pointer hover:underline"
                    onClick={onClick}
                >
                    {description}
                </p>
            ) : (
                <p className="footer-caption text-center mt-2">{description}</p>
            )}
        </div>
    );
};

export default FooterSection;