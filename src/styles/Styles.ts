const Styles = {
    navigationLink: `
    relative
    text-[var(--text-primary)]
    after:content-['']
    after:absolute
    after:bottom-0
    after:left-1/2
    after:-translate-x-1/2
    after:h-[1px]
    after:w-full
    after:bg-[var(--text-primary)]
    after:scale-x-0
    after:origin-center
    after:transition-transform
    after:duration-300
    after:transform
    hover:after:scale-x-100
    `,
    secondaryButton: "flex justify-center items-center rounded-md px-4 py-1 text-[var(--primary)] border-[var(--primary)] hover:border-[var(--background)] hover:bg-[var(--primary)] hover:text-[var(--background)] border dm-serif-display duration-200 ease-in-out transition transform cursor-pointer",
};  
export default Styles;