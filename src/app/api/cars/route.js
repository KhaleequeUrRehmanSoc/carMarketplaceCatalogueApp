import { NextResponse } from "next/server"

export const GET = async (request) =>{

  const make = request.nextUrl.searchParams.get('make') || ""
  const year = request.nextUrl.searchParams.get('year') || 2023
   const model = request.nextUrl.searchParams.get('model') || ""
   const limit = request.nextUrl.searchParams.get('limit') || 9
   const fuel = request.nextUrl.searchParams.get('fuel_type') || ""

  
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
              'X-RapidAPI-Host': "cars-by-api-ninjas.p.rapidapi.com"
          }
      };
  
      try {
            let response = await fetch(
              `${process.env.URL}?make=${make}&year=${year}&limit=${limit}&fuel_type=${fuel}`
              , options);
          
            response = await response.json();
            console.log('response=> ',response)
            return NextResponse.json(response,{status:200})
      } catch (err) {
            console.log('error=> ',err) 
            return NextResponse.json({err:err.message},{status:500})
      }
  }


  