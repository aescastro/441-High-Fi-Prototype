import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";

//add <Link to="excel/medium">ExcelMedium</Link> to Excel once it's been added to mockData

const Excel = () => {
    return (
        <Stack
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <Link to="small">ExcelSmall</Link>
            <Link to="large">ExcelLarge</Link>
        </Stack>
    )
}

export default Excel;