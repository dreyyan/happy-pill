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
  fontSize = "12px",
  borderRadius = "0px",
}) => {
  const style = { width, fontSize, borderRadius };

  return (
    <button
      style={style}
      onClick={disabled ? undefined : onClick}
      className={`
                flex justify-center items-center

                px-4 py-1

                text-[var(--text-primary)]
                border-[var(--text-primary)]
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
