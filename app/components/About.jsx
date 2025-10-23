import Image from "next/image"
import Picture2 from "../assets/images/gracie.jpg"

export default function About(){
    return (
        <section className=" w-4/5 mx-auto">
            <div className="grid grid-cols-6 m-6 h-1/2 gap-3 bg-[#1A1A40]  rounded-3xl">
                <div className="col-span-3 p-6 text-2xl">
                    <h1 className="text-4xl text-center m-6 bg-white/5 rounded-xl p-6">About Me</h1>
                    <p>
                        Hi! I'm Rafli Nailur Rizqi, a Bachelor of Informatics graduate from Diponegoro University with a strong passion for web development.
                    </p>
                    <br />
                    <p>
                        I’m skilled in HTML, CSS, JavaScript, PHP, Laravel, and MySQL, and I’m continuously expanding my knowledge by learning React JS and Tailwind CSS. I enjoy creating personal web projects to sharpen my skills and explore new technologies.
                    </p>
                </div>
                <div className="col-span-3 rounded-xl p-6">
                    <Image src={Picture2} alt="about" />
                </div>
            </div>
        </section>
    )
}