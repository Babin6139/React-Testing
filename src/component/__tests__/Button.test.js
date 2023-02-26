import React from "react";
import {render,fireEvent} from "@testing-library/react";
import Button from "../Button";
import userEvent from "@testing-library/user-event";

describe("Tests for Button Component",()=>{
    it("snapshots button component",()=>{
        const mockText="Clicked the button";
        const {asFragment}=render(<Button text={mockText}/>);
        expect(asFragment(<Button text={mockText}/>)).toMatchSnapshot();
    });

    it("should render button component",()=>{
        const mockText="Clicked the button";
        const {getByText}=render(<Button text={mockText}/>);
        expect(getByText("Click me")).toBeInTheDocument;
    });

    it("we can also find by role",()=>{
        const mockText="Clicked the button";
        const {getByRole}=render(<Button text={mockText}/>);
        expect(getByRole("button")).toBeInTheDocument;
    });

    it("we can also find by the test id",()=>{
        const mockText="Clicked the button";
        const {getByTestId}=render(<Button text={mockText}/>);
        expect(getByTestId("Button_Id")).toBeInTheDocument;
    });

    it("does not show text when button is not clicked",()=>{
        const mockText="Clicked the button";
        const {queryByText}=render(<Button text={mockText}/>);
        //getByText throws an error so we use queryByText which throws null
        expect(queryByText(mockText)).toBeNull();
    });

    it("shows text when it is clicked",async ()=>{
        const mockText="Clicked the button";
        const {getByText,getByRole}=render(<Button text={mockText}/>);

        const myButton=getByRole("button");
        await userEvent.click(myButton);
        expect(getByText(mockText)).toBeInTheDocument;
    });

    it("does not show the text when clicked twice",()=>{
        const mockText="Clicked the button";
        const {queryByText,getByRole}=render(<Button text={mockText}/>);

        const myButton=getByRole("button");
        fireEvent.click(myButton);
        fireEvent.click(myButton);
        expect(queryByText(mockText)).not.toBeInTheDocument;
    })
})