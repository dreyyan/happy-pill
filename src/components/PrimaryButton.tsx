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
  fontSize = "12px",
  borderRadius = "0px",
}) => {
  const style = { width, fontSize, borderRadius };

  return (
    <button
      style={style}
      onClick={disabled ? undefined : onClick}
      className={`
                header-nav-link

                flex justify-center items-center

                px-[16px] py-[6px]

                text-[var(--text-primary)]
                border-[var(--text-primary)]
                hover:border-[var(--primary)]
                hover:text-[var(--primary)]
                border-2

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

export default PrimaryButton;
