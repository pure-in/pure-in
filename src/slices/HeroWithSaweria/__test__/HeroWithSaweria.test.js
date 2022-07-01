import React from 'react';
import HeroWithSaweria from '../HeroWithSaweria'
import {createRoot} from 'react-dom/client'
// import { screen } from '@testing-library/dom';
// import { act } from 'react-dom/test-utils';


it("herowithsaweria",()=>{
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<HeroWithSaweria></HeroWithSaweria>)
})

// act(()=>{
//     const link = screen.getByRole(
//         'link',
//         {name: /Ayo Donasi/i}
        
//     );
//     fireEvent.change(link,{
//         target: { value: "http://saweria.co" }
//     });
//     expect(screen.getByText("http://saweria.co")).toBeInTheDocument();
// })
