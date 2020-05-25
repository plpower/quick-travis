import { render, fireEvent, getAttribute, findByText } from '@testing-library/react'
import React from "react";
import Newtask from "./Newtask";

test('submit form', async () => {

    const userid = 10;
    const handleClose = () => {
        setOpen(false);
    };

    const { findByText, getByTestId } = render(<Newtask userid={userid} handleClose={handleClose} />)

    const header = await findByText("It only takes 2 minutes!")
    expect(header).toBeInTheDocument()

    const title = await getByTestId("");
    expect(title).toBeInTheDocument()
})