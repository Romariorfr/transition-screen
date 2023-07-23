

interface PageProps {
    onClick: () => void;
}

const Page3: React.FC<PageProps> = ({ onClick }) => {

    return (

        <div>
            <div>
                pagina 3
            </div>
            <button onClick={onClick}>Ir para pagina 1</button>

        </div>

    )
}

export default Page3