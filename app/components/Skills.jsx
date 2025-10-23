import Image from "next/image"
import html from "../assets/images/skill/html.png"
import css from "../assets/images/skill/css.png"
import js from "../assets/images/skill/js.png"
import php from "../assets/images/skill/php.png"
import laravel from "../assets/images/skill/laravel.png"
import react from "../assets/images/skill/react.png"
import git from "../assets/images/skill/git.png"
import bootstrap from "../assets/images/skill/bootstrap.png"
import tailwind from "../assets/images/skill/tailwind.png"
import mysql from "../assets/images/skill/mysql.png"
import vscode from "../assets/images/skill/vscode.png"

export default function Skills(){
    return(
        <section className="gap-3  p-4 mx-auto  h-1/2">
            <h1 className="text-6xl font-bold text-center my-20">
                My <span className="text-[#673DE5]">Skills</span>
            </h1>
            <ul className="grid grid-cols-4 place-items-center gap-1 p-4">
                <li className="border flex rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(html)} className="w-20 h-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">HTML</h1>
                        <p className="text-zinc-500">Markup</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(css)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">CSS</h1>
                        <p>Styling</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(js)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">Javascript</h1>
                        <p>Language</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(php)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">PHP</h1>
                        <p>Language</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(laravel)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">Laravel</h1>
                        <p>Framework</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(git)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">Git</h1>
                        <p>Version Control</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(bootstrap)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">Bootstrap</h1>
                        <p>Library</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(tailwind)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">Tailwind</h1>
                        <p>Library</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(react)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">React Js</h1>
                        <p>Library</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(mysql)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">MySql</h1>
                        <p>RDBMS</p>
                    </div>
                </li>
                <li className="bg-[#1A1A40] flex  rounded-3xl p-6 m-3 w-[300px] gap-3">
                    <Image src={(vscode)} className="h-20 w-20"/>
                    <div className="my-auto">
                        <h1 className="font-bold text-2xl">Visual Studio Code</h1>
                        <p>Code Editor</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}