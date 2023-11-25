import { useState } from "react";
import {
    Card,
    Stack,
    Button,
    FormControl
} from 'react-bootstrap';

import {
    Formik,
    Form,
    Field,
} from "formik"


const RuleDefining = () => {
    const [values, setValues] = useState(() => {
        return {
            numberOfTeams: 0,
            groupType: "",
            groupBy: "",
        }
    });
    return (
        <Stack
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <Card
                style={{
                    height: "40%",
                    width: "40%",
                }}
            >
                <Card.Body>
                    <Card.Title
                        style={{
                            textAlign: "center",
                            fontSize: "2em",
                        }}
                    >
                        Team Making Rules
                    </Card.Title>
                    <Formik
                        initialValues={values}
                        onSubmit={(values) => setValues(values)}
                    >
                        {
                            formik => (
                                <Form>
                                    <Stack>
                                        

                                        <Button type="submit">Submit</Button>
                                    </Stack>
                                </Form>
                            )
                        }
                    </Formik>
                    
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default RuleDefining;