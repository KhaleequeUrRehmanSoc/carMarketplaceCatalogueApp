import {manufacturer, price, rating, type} from '@/app/constants/const';
import { getCars } from '@/utils/utils';
import { Card,  CustomFilter, } from './components';

export default async function Home({ searchParams }) {

  const carsData = await getCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "gas",
    limit: searchParams.limit || 9,
    model: searchParams.model || "",
  });



  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3">

      <div className="my-3 w-full sm:w-[95%] p-4 rounded-[2.428rem] flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
        <div>
          <h1 className="text-primary text-[2.088rem] font-extrabold">Car Catalogue</h1>
          <h5 className="text-primary text-[0.958rem] font-normal">Explore out cars you might like!</h5>
        </div>

        
        <div className="my-3 sm:flex sm:justify-start lg:justify-end items-center sm:flex-wrap [&>*]:mr-3 lg:[&>*]:mr-0 lg:[&>*]:ml-3">  
          <CustomFilter title='price' options={price} />
          <CustomFilter title='manufacturer' options={manufacturer} />
          <CustomFilter title='type' options={type} />
          <CustomFilter title='rating' options={rating} />
        </div>
      </div>


      <section className='mt-4 w-full sm:w-[95%] p-3'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px]:">
          {
            Array.isArray(carsData) &&  carsData.length > 1 ?
                carsData?.map((car,i) => (
                  <Card
                  car={car}
                  key={i}
                  />
                ))
            :(
              <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>No Data</h2>
                <p>{carsData?.message}</p>
              </div>
            )
          }
        </div>
      </section>
    </main>
  )
}
