import React from "react";
import { Header } from "@/components/header";
import Image from "next/image";

const apiKey = process.env.API_KEY;

async function getSinglePlant(id) {

    try {
        const res = await fetch('https://perenual.com/api/species/details/' + id + '?key=' + apiKey);
        const data = await res.json();
        return data
        // Your data handling logic
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

export default async function Page({ params }) {
    const data = await getSinglePlant(params.id);
    console.log(data)
    const { common_name: name, scientific_name, description, default_image } = data
    return (
        <div>
            <Header />
            <div className=" p-2">
                <p>{name} ( <i>{scientific_name}</i> )</p>
                <Image src={default_image.original_url} width={200} height={200} />
                <p>{description}</p>
            </div>

        </div>
    )
}