interface ShowcaseFeatureProps {
  title: string;
  src: string;
  description: string;
}

const ShowcaseFeature: React.FC<ShowcaseFeatureProps> = ({ title, src, description }) => {
  return (
    <div className="
      flex flex-col 
      bg-[var(--card)] 
      rounded-xl 
      overflow-hidden 
      shadow-lg 
      transition-all duration-300 
      hover:shadow-2xl 
      hover:scale-[1.02]
      max-w-[400px]
      lg:my-2
    ">
      {/* Image - responsive with proper aspect ratio */}
<div className="
  relative 
  aspect-[4/3] 
  w-full 
  max-w-[400px]
  mx-auto
  overflow-hidden
">
  <img
    src={src}
    alt={title}
    className="
      w-full 
      h-full 
      object-cover 
      transition-transform duration-500 
      group-hover:scale-105
    "
    loading="lazy"
  />
</div>

      {/* Content */}
      <div className="p-5 pt-3 sm:p-6 flex flex-col flex-grow">
        <h3 className="
          text-xl sm:text-2xl 
          font-bold 
          text-center
          text-[var(--text-primary)] 
          mb-3
        ">
          {title}
        </h3>
        
        <p className="
          text-[var(--text-secondary)] 
          text-center
          caption 
          text-sm sm:text-base 
          leading-relaxed
        ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseFeature;