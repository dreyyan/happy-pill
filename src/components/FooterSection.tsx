import type React from "react";

interface FooterSectionProps {
  iconSrc: string;
  title: string;
  description: string | string[];
  onClick?: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  iconSrc,
  title,
  description,
  onClick,
}) => {
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return description.map((item, index) => (
        <span key={index}>
          {item}
          {index !== description.length - 1 && <br />}
        </span>
      ));
    }

    return description;
  };

  const descriptionClasses =
    "footer-caption text-center mt-2" +
    (onClick ? " text-blue-500 cursor-pointer hover:underline" : "");

  return (
    <div className="flex flex-col items-center">
      <img src={iconSrc} alt={title} className="size-7" />
      <p className="footer-title text-center">{title}</p>

      <p className={descriptionClasses} onClick={onClick}>
        {renderDescription()}
      </p>
    </div>
  );
};

export default FooterSection;
