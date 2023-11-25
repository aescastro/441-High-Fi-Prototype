import { useState } from "react";
import {
    Card,
    Stack,
    Button,
    FormControl,
    FormSelect
} from 'react-bootstrap';

import {
    Formik,
    Form,
    Field,
} from "formik"

import {
    string,
    number,
    object,
} from "yup"

import { useNavigate } from "react-router-dom";

const ruleSchema = object({
    numberOfTeams: number().required().min(1),
    groupType: string().required(),
    groupBy: string().required()
});

const RuleDefining = () => {
    const [values, setValues] = useState(() => {
        return {
            numberOfTeams: 0,
            groupType: "",
            groupBy: "",
        }
    });
    const navigate = useNavigate();

    const handleSubmit = (vals) => {
        navigate("/team-adjustments", { state: vals });
    }
    
    return (
        <Stack
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            <Card>
                <Card.Body>
                    <Card.Title
                        style={{
                            textAlign: "center",
                            fontSize: "2em",
                            marginBottom: "20px",
                        }}
                    >
                        Team Making Rules
                    </Card.Title>
                    <Formik
                        initialValues={values}
                        onSubmit={handleSubmit}
                        onChange={(e) => setValues(e.target.value)}
                        validationSchema={ruleSchema}
                    >
                        {
                            formik => (
                                <Form>
                                    <Stack
                                        style={{
                                            gap: "20px",
                                        }}
                                    >
                                        <Stack
                                            direction="horizontal"
                                            style={{
                                                gap: "10px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                            >
                                                Number of Teams
                                            </span>
                                            <FormControl
                                                as={Field}
                                                name="numberOfTeams"
                                                type="number"
                                                placeholder="Number of Teams"
                                                isInvalid={formik.errors.numberOfTeams && formik.touched.numberOfTeams}                                                
                                                style={{
                                                    width: "4em",
                                                }}
                                            />
                                        </Stack>
                                        
                                        <Stack
                                            direction="horizontal"
                                            style={{
                                                gap: "10px",
                                            }}
                                        >
                                            <FormSelect
                                                style={{
                                                    width: "10em",
                                                }}
                                                as={Field}
                                                onChange={formik.handleChange}
                                                name="groupType"
                                                isInvalid={formik.errors.groupType && formik.touched.groupType}                  
                                                
                                            >
                                                <option></option>
                                                <option value="group">Group</option>
                                                <option value="balance">Balance</option>
                                            </FormSelect>

                                            <span
                                                style={{
                                                    fontSize: "18px",
                                                    width: "8em",
                                                }}
                                            >
                                                teams by
                                            </span>

                                            <FormSelect
                                                style={{
                                                    flexGrow: "1",
                                                }}
                                                name="groupBy"
                                                onChange={formik.handleChange}
                                                isInvalid={formik.errors.groupBy && formik.touched.groupBy}
                                            >
                                                <option></option>
                                                <option value="year-level">year level</option>
                                                <option value="yoe">years of related experience</option>
                                                <option value="skill">skills</option>

                                            </FormSelect>
                                            
                                        </Stack>

                                        <Button type="submit"
                                            style={{
                                                alignSelf: "center",
                                                width: "87px",
                                            }}
                                        >
                                            Submit
                                        </Button>
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