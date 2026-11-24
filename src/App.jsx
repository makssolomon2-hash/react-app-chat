import './App.css'

import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);




function App() {

    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".animate", {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: "power3.out"
        });
    }, { scope: container }); // <-- automatically reverted
    // <-- scope is for selector text (optional)

    const messages = [
        {
            id: 1 ,
            text: 'Helllo',
            role: 'user'
        },
        {
            id: 1 ,
            text: 'Helllo',
            role: 'user'
        },
        {
            id: 1 ,
            text: 'Helllo',
            role: 'user'
        },
        {
            id: 1 ,
            text: 'Helllo',
            role: 'user'
        },
        {
            id: 2 ,
            text: 'Headlllo',
            role: 'user2'
        },
        {
            id: 3 ,
            text: 'Heladllo',
            role: 'user'
        },
        {
            id: 4 ,
            text: 'Heladllo',
            role: 'user2'
        },
        {
            id: 4 ,
            text: 'Heladllo',
            role: 'user2'
        },
        {
            id: 4 ,
            text: 'Heladllo',
            role: 'user2'
        },
    ]

  return (
    <>
      <section id="center " className="flex flex-col bg-gray-400  mx-auto items-center justify-between  w-full min-h-screen p-5" ref={container}>
          <div>
              <p>he</p>
          </div>
        <div className='flex flex-col h-5/6   bg-gray-200 w-1/2 p-5 gap-3   '>
            {messages.map((messsage) =>(
                <div className="animate flex flex-row items-center gap-3 " key={messsage.id}>
                    {messsage.role === 'user2' &&
                        <div className="animate bg-black rounded-full w-[25px]  h-[25px] text-center items-center text-white">
                            <p>A</p>
                        </div>}
                    <div
                        key={messsage.id}
                        className={`animate p-3 rounded-2xl ${
                            messsage.role === 'user' ? ' ml-auto bg-white' : 'bg-gray-100  mr-auto'
                        }`}
                    >
                        {messsage.text}
                    </div>
                </div>
            )
            )}
        </div>
      </section>
    </>
  )
}

export default App
