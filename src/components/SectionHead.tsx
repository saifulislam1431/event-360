type TPros = {
    title: string,
    description: string
}

const SectionHead = ({ title, description }: TPros) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SectionHead;