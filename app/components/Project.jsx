import Image from "next/image";
import Project1 from "../assets/images/example.png"
import Project2 from "../assets/images/JayaFuture.png"

export default function Project(){
    return (
        <div className="my-32">
            <h1 className="text-center text-6xl font-bold m-20">My <span className="text-[#673DE5]">Projects</span></h1>
            <div className=" p-6 grid grid-cols-6 gap-6">
                <div className="col-span-2 bg-[#111122] rounded-3xl">
                    <Image src={Project1} alt="" className="rounded-t-3xl"/>
                    <div className="p-8">
                        <h1 className="text-5xl">Convers</h1>
                        <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsam.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap py-4 px-7 gap-2 text-sm">
                            <li className="border p-2 rounded-full">Laravel</li>
                            <li className="border p-2 rounded-full">LiveWire</li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 bg-[#111122] rounded-3xl">
                    <Image src={Project1} alt="" className="rounded-t-3xl"/>
                    <div className="p-8">
                        <h1 className="text-5xl">Convers</h1>
                        <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsam.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap py-4 px-7 gap-2 text-sm">
                            <li className="border p-2 rounded-full">Laravel</li>
                            <li className="border p-2 rounded-full">LiveWire</li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 bg-[#111122] rounded-3xl">
                    <Image src={Project2} alt="" className="rounded-t-3xl"/>
                    <div className="p-8">
                        <h1 className="text-5xl">Convers</h1>
                        <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsam.</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap py-4 px-7 gap-2 text-sm">
                            <li className="border p-2 rounded-full">Laravel</li>
                            <li className="border p-2 rounded-full">LiveWire</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}