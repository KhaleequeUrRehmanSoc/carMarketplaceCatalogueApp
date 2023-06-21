
export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};



export async function getCars(filters) {
    const { manufacturer, year, model, limit, fuel } = filters;
  
      try {
            const response = await fetch(
              `http://localhost:3000/api/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
                cache: "no-store",
              });
          
            const result = await response.json();
            return result;
      } catch (err) {
            console.log('error=> ',err) 
      }
  }

export const getCarImgUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const {searchParams} = url
  const { make, model, year } = car;

  searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY);
  searchParams.append('make', make);
  searchParams.append('modelFamily', model.split(" ")[0]);
  searchParams.append('zoomType', 'fullscreen');
  searchParams.append('modelYear', `${year}`);
  searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
