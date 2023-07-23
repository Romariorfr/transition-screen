interface PageProps {
    onClick: () => void;
}

const Page1: React.FC<PageProps> = ({ onClick }) => {

    return (

        <div>
            <div>
                pagina 1
            </div>
            <button onClick={onClick}>Ir para pagina 2</button>

        </div>
    )
}

export default Page1