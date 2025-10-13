interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  fontSize?: string;
  borderRadius?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  onClick,
  disabled = false,
  width,
  fontSize = "16px",
  borderRadius = "6px",
}) => {
  const style = { width, fontSize, borderRadius };

  return (
    <button
      style={style}
      onClick={disabled ? undefined : onClick}
      className={`
                cursor-pointer

                flex justify-center items-center

                px-4 py-1

                text-[var(--background)]
                border-[var(--background)]
                hover:border-[var(--primary)]
                hover:bg-[var(--background)]
                hover:text-[var(--primary)]
                border

                dm-serif-display

                duration-200 ease-in-out

                transition
                transform
                
                cursor-pointer

                disabled:opacity-50
                disabled:cursor-not-allowed
            `}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
