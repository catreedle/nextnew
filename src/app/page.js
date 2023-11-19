import Image from 'next/image'
import { Header } from '@/components/header'
import { Content } from '@/components/content'
import { Footer } from '@/components/footer'

const apiKey = process.env.API_KEY


async function getData() {
  const res = await fetch('https://perenual.com/api/species-list?key=' + apiKey)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const result = await res.json()
  return result
  // return res.json()
}


export default async function Home() {
  const { data } = await getData();
  // const { id, common_name, watering } = data;
  // console.log('hey', id, common_name, watering);
  const empty_image_url = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
  const plant_array = data.map((d) => ({
    id: d.id,
    plant_name: d.common_name,
    url: d.default_image ? d.default_image.regular_url : empty_image_url
  }))

  return (
    <div>
      <Header />
      <div className=' grid grid-cols-1 lg:grid-cols-3 space-4'>
        {plant_array.map(({ id, plant_name, url }) => {
          return <Content key={id}
            name={plant_name}
            age={id}
            url={url}
            gender={'Binary'}
          />
        })}
      </div>
      <Footer />
    </div>
  )
}
