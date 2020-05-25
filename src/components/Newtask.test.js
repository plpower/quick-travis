import { render, fireEvent, getAttribute, findByText } from '@testing-library/react'
import React from "react";
import Newtask from "./Newtask";

test('submit form', async () => {

    const userid = 10;
    const handleClose = () => {
        setOpen(false);
    };
    const values = { title: 'I need groceries', author: 'Patrice', description: 'Eggs please', date: new Date(), items: [{ name: "eggs", quantity: "1" }], address: '805 Commonwealth Ave', city: 'Newton', state: 'MA' }

    const { findByText, getByTestId } = render(<Newtask userid={userid} handleClose={handleClose} values={values} />)

    const header = await findByText("It only takes 2 minutes!")
    expect(header).toBeInTheDocument()

    const title = await getByTestId("I need groceries");
    expect(title).toBeInTheDocument()
})