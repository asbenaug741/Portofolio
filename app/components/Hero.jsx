'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home(){
    return (
        <section className="h-screen p-6 flex items-center justify-center flex-col">
            <div className="w-2/3">
                <h1 className="text-center text-6xl m-4 font-bold"> <span className="">Hello,</span> I'm <span className="text-[#673DE5]">Rafli</span> Nailur Rizqi</h1>
                <p className="text-center text-xl font-light">
                    A passionate web developer with a strong focus on building modern, responsive, and user-friendly websites using React and Laravel.
                </p>
            </div>
            <div className="m-6">
                <button className="py-3 px-6 m-2 bg-[#673DE5] rounded-full text-white font-bold">
                    Download CV
                </button>
                <button className="py-3 px-6 m-2 bg-white rounded-full text-black font-bold ">Contact Me</button>
            </div>
            <div>
                <div className="flex gap-4 text-4xl text-white">
                    <a href="https://github.com/asbenaug741"><FontAwesomeIcon icon={faGithub}/></a> 
                    <a href="https://www.linkedin.com/in/raflinailurrizqi/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:raflinailurr@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
        </section>
    )
}