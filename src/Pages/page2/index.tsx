interface PageProps {
    onClick: () => void;
}

const Page2: React.FC<PageProps> = ({ onClick }) => {

    return (

        <div>
            <div>
                pagina 2
            </div>
            <button onClick={onClick}>Ir para pagina 3</button>

        </div>

    )
}

export default Page2