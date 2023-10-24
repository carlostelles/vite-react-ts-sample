import React from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

interface HomeProps {
    clicked: boolean;
    count: number;
};

export default function Home() {
    const [state, setState] = React.useState<HomeProps>({
        clicked: false,
        count: 0,
    });

    const handleClick = React.useCallback(() => {
        setState((prevState) => ({  
            ...prevState,
            clicked: true,
            count: prevState.count + 1
        }));
    }, [state]);

    const formatedPluralText = React.useMemo(() => {
        return state.count > 1 ? "vezes" : "vez";
    }, [state.count]);

    const formatedText = React.useMemo(() => {
        return state.clicked ? `cliquei ${state.count} ${formatedPluralText}.` : "ainda não cliquei.";
    }, [state, formatedPluralText]);

    React.useEffect(() => {
        document.title = `Home - ${state.count}`;
    }, [state.count]);

    return (
        <div>
            <Title as="h1" style={{color: "red"}}>Home</Title>

            <p>Eu {formatedText}</p>
            
            <Button appearance="button" onClick={handleClick}>Clique aqui</Button>
            <br/>
            <br/>
            <Button appearance={Link} to="/about">Ir para Sobre</Button>
            <br/>
            <Button appearance="a" href="https://google.com" target="_blanck">Google</Button>
        </div>
    );
};
