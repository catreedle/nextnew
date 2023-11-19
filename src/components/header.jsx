import Link from "next/link"

export const Header = () => {
    return (
        <>
            <div className=" bg-pink-300 p-6 flex justify-between">
                <p>I am the head</p>

                <nav>
                    <Link className=' px-4' href="/">Home</Link>
                    <Link className=' px-4' href="/dashboard">Dashboard</Link>
                    <Link className=' px-4' href="/login">Login</Link>
                    <Link className=' px-4' href="/register">Register</Link>
                </nav>
            </div>
        </>
    )
}