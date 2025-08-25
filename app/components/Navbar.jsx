export default function Navbar(){
    return(
        <div className="menu pt-6">
            <ul className="fixed left-1/2 -translate-x-1/2 flex justify-around w-1/3 bg-white/5 backdrop-blur-lg rounded-full py-3">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}