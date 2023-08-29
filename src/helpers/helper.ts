
// Trim the inputted postcode, remove whitespace and as well, transfrom to uppercase
export function cleanPostcode(postCode: string) {
  return postCode.trim().split(" ").join("").toUpperCase()
}



const API_URL = 'https://api.postcodes.io/postcodes';

// function to validate the postcode entered by the user
export async function postcodeValidation(postCode: string | undefined) {
  const res = await fetch(`${API_URL}/${postCode}/validate`);

  if (!res.ok) throw Error('Postcode validation failed');

  const data = await res.json();
  return data;
}


//Get postcode data
// validate the postcode as well
// Using promise.all to fetch concurrently both data (the postcode data and nearest postcodes as well)
// Should return either object of the fetched data or a string error
export async function getPostCode(postCode: string | undefined) {
    try {
      const data = await postcodeValidation(postCode)
      if(data.result){
        const request1 = fetch(`${API_URL}/${postCode}`)
        const request2 = fetch(`${API_URL}/${postCode}/nearest`)

        const [res1, res2] = await Promise.all([request1, request2])
        if (!res1.ok || !res2.ok) throw Error('One or both data failed to fetch');
        const postcode = await res1.json();
        const nearestPostCode = await res2.json();
        return { postcode, nearestPostCode }
      }else{
        const error = 'Invalid Postcode';
        return error
       }
    }catch(error){
        console.log(error);
    }
  }