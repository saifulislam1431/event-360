type TPros = {
    title: string,
    description: string
}

const SectionHead = ({ title, description }: TPros) => {
    return (
        <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
            <p className="text-[#566B84]">{description}</p>
        </div>
    );
};

export default SectionHead;