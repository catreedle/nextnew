import Image from "next/image"

export const Content = ({ name, age, url, gender }) => {
    if (gender == 'male') {
        return (
            <div className=" p-2 bg-red-300">
                <h1 className=" text-lg">Hello I am {name}.</h1>
                <p>I am {age} years old {gender}.</p>

                <Image src={url} width={400} height={400}/>
            </div>
        )
    }
    return (
        <div className=" p-2 bg-cyan-400">
            <h1 className=" text-lg">Hello I am {name}.</h1>
            <p>I am {age} years old {gender}.</p>
            <Image src={url} width={400} height={400}/>

        </div>
    )
}