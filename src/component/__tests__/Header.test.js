
import React from "react";
import Header from "../Header";
import {render} from "@testing-library/react";

describe("Tests for Header Component",()=>{
    
    it("snapshot header component",()=>{
        const mockText="This is the string for testing";
        const {asFragment}=render(<Header text={mockText}/>);
        expect(asFragment(<Header text={mockText}/>)).toMatchSnapshot();
    });

    it("should render header component with right text",()=>{
        const mockText="This is the string for testing";
        const {getByText}=render(<Header text={mockText}/>);
        expect(getByText(mockText)).not.toBeNull();
    });

});