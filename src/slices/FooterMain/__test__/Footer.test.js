import React from 'react';
import Footer from '../Footer';
import { createRoot } from 'react-dom/client';

it("render footer without crashing", ()=>{
    const footer = document.createElement("section");
    const root = createRoot(footer);
    root.render(<Footer></Footer>)
})