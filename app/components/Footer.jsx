'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return (
        <section className="bg-[#111122] h-64 grid grid-cols-3 p-6">
            <div>
                <h1 className="text-3xl">Portofolio</h1>
                <div className="flex gap-4 text-xl text-white">
                    <a href="https://github.com/asbenaug741"><FontAwesomeIcon icon={faGithub}/></a> 
                    <a href="https://www.linkedin.com/in/raflinailurrizqi/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:raflinailurr@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
            <div className="grid grid-cols-1 text-xl mx-auto">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
            </div>
            <div className="">
                
            </div>
        </section>
    )
}