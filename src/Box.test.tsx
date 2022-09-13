import React from "react";
import { render } from "@testing-library/react";
import Box from './Box'




describe("basic rendering", function () {

  it("renders successfully", function () {
    render(<Box id={""} width={0} height={0} backgroundColor={""} remove={jest.fn()}/>)
  });

  it("renders successfully", function () {
    const {container, getByText,  debug} = render(<Box id={"222"}
                width={10} height={10} backgroundColor={"red"} remove={jest.fn()}/>)


    const box = container.querySelector('.Box-box')
    expect(box).toHaveAttribute('style', "height: 10em; width: 10em; background-color: red;")

      expect(getByText('Remove The Box!')).toBeInTheDocument()
  });

});


