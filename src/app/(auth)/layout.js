import { Header } from "@/components/header"

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className=" flex justify-center items-center flex-col h-screen">
                {children}
            </main>
        </div>

    )
}