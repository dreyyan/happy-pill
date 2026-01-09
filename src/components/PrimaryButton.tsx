interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;          // still optional for special cases
  fontSize?: string;       // keep for flexibility
  borderRadius?: string;   // keep for flexibility
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
  width,                   // only used if explicitly passed
  fontSize = "clamp(12px, 2.5vw, 14px)", // responsive font size
  borderRadius = "4px",    // default to a small radius instead of 0
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        width: width || "auto",           // auto by default → responsive
        minWidth: "140px",                // minimum comfortable size on mobile
        maxWidth: "240px",                // prevent it from becoming too wide
        fontSize,
        borderRadius,
      }}
      className={`
        header-nav-link
        flex justify-center items-center
        px-4 py-2                 /* more comfortable padding */
        text-[var(--text-primary)]
        border-2 border-[var(--text-primary)]
        hover:border-[var(--primary)]
        hover:text-[var(--primary)]
        transition-all duration-200 ease-in-out
        transform hover:scale-105 active:scale-95
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        whitespace-nowrap           /* prevent text wrapping */
      `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;