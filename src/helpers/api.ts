const API_URL = 'http://api.postcodes.io/postcodes';

// Validate the postcode entered by the user
export async function postcodeValidation(postCode: string | undefined) {
  const res = await fetch(`${API_URL}/${postCode}/validate`);

  if (!res.ok) throw Error('Postcode validation failed');

  const data = await res.json();
  return data;
}


//Get postcode data
// Using promise.all to fecth concurrently both data (the postcode data and nearest postcodes as well)
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