interface ShowcaseFeatureProps {
    title: string;
    src: string;
    description: string;
}

const ShowcaseFeature: React.FC<ShowcaseFeatureProps> = ({ title, src, description }) => {
    return (
        <div className="">
            <img src={src} alt={title} className="w-full h-auto" />
            <div className="mx-6">
                <h3 className="text-xl font-bold mt-4">{title}</h3>
                <p className="mt-2 caption">{description}</p>
            </div>
        </div>
    );
};

export default ShowcaseFeature;