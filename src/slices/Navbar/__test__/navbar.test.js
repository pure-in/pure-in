import React from 'react';
import Navbar from '../Navbar';
import { createRoot } from 'react-dom/client';
// import { fireEvent, screen, container } from '@testing-library/react';
// import { act } from 'react-dom/test-utils'


it("render navbar without crashing", ()=>{
    const nav = document.createElement("nav");
    const root = createRoot(nav);
    root.render(<Navbar></Navbar>)
})

// act(()=>{
//     const navbar = container.querySelector('#sandbox > nav');
//     fireEvent.change(navbar,{
//         target: { value: "nav"}
//     })
//     expect(screen.getByText()).toBeInTheDocument();s
// })