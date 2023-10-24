import Title from "../../components/Title";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <Title as="h1">About</Title>

            <Button appearance={Link} to="/">Voltar</Button>
        </div>
    );
};
