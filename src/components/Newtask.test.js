import { render, fireEvent, getAttribute, findByText } from '@testing-library/react'
import React from "react";
import useForm from "./Newtask";

test('submit form', async () => {

    const userid = 10;
    // const professor = { Name: "Chris Riesbeck", Courses: ["Agile Methodology"] };
    const handleClose = () => {
        setOpen(false);
    };

    const { getByTestId } = render(<Newtask userid={userid} handleClose={handleClose} />)

    // const item = await findByText("xqv6932")
    // expect(item).toBeInTheDocument()

    const table = await getByTestId("");
    expect(table).toBeInTheDocument()
})