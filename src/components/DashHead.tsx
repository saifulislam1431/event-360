type TPros = {
    title: string,
}
const DashHead = ({ title }: TPros) => {
    return (
        <div className="py-10 text-center">
            <h1 className="brand-font text-4xl font-bold text-primary logo-style">{title}</h1>
        </div>
    );
};

export default DashHead;