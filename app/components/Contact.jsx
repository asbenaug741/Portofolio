import Link from "next/link";

export default function Contact() {
    return (
        <div className="h-4/5 w-1/2  text-white flex flex-col items-center justify-center px-2 mx-auto mb-32">
            <h1 className="text-5xl font-bold mb-4">Contact <span className="text-[#673DE5]">Me</span></h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl text-center">
                Let’s connect! Whether you have a project idea, a question, or just want to say hello, 
                feel free to reach out.
            </p>

            <Link
                href="mailto:raflinailurr@gmail.com"
                className="px-6 py-3 bg-[#673DE5] hover:bg-[#7c52fc] rounded-xl font-medium"
            >
                Send Me an Email
            </Link>
        </div>
    );
}
