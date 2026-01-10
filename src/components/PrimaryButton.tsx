interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  fontSize?: string;
  borderRadius?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
  width,
  fontSize = "clamp(12px, 2.5vw, 14px)",
  borderRadius = "0px",
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        width: width || "auto",
        minWidth: "140px",
        maxWidth: "240px",
        fontSize,
        borderRadius,
      }}
      className={`
        header-nav-link
        flex justify-center items-center
        px-4 py-2
        text-[var(--text-primary)]
        border-2 border-[var(--text-primary)]
        hover:border-[var(--primary)]
        hover:text-[var(--primary)]
        transition-all duration-200 ease-in-out
        transform hover:scale-105 active:scale-95
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
        whitespace-nowrap
      `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;