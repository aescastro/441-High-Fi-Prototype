import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";

const Home = () => {
    return (
        <Stack
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <Link to="/excel">Excel</Link>
            <Link to="/prototype">Prototype</Link>
        </Stack>
    );
}

export default Home;