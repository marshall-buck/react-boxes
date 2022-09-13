import BoxList from "./BoxList";
import {render, fireEvent} from '@testing-library/react'
import {BoxPropsInterface} from './appTypes'
import React from "react";

const state: BoxPropsInterface[] = [
    {id:3,
      width: 10,
      height: 10,
      backgroundColor: "red" ,
      remove:jest.fn()},
      {id:4,
        width: 10,
        height: 10,
        backgroundColor: "blue" ,
        remove:jest.fn()}
  ]





it("renders successfully", function () {
 render(<BoxList />)

  });


it("add box button works", function () {
  const {getByText,container, debug} = render(<BoxList />)

  const button = getByText("Add a new box!")
  expect(button).toBeInTheDocument()
  fireEvent.submit(button)
  const box = container.querySelector('.Box-box')
  expect(box).toBeInTheDocument()
  debug()


  });

  it("remove button works", function () {


    const {getByText,container, debug} = render(<BoxList />)

    const addButton = getByText("Add a new box!")
    expect(addButton).toBeInTheDocument()

    fireEvent.submit(addButton)
    const box = container.querySelector('.Box-box')
    expect(box).toBeInTheDocument()

    const removeButton = getByText("Remove The Box!")
    fireEvent.click(removeButton)
    const removedBox = container.querySelector('.Box-box')
    expect(removedBox).not.toBeInTheDocument()
    debug()


    });

