const result = {
  postcode: "N11 2EF",
  quality: 1,
  eastings: 529985,
  northings: 191406,
  country: "England",
  nhs_ha: "London",
  longitude: -0.124333,
  latitude: 51.606498,
  european_electoral_region: "London",
  primary_care_trust: "Haringey Teaching",
  region: "London",
  lsoa: "Haringey 004B",
  msoa: "Haringey 004",
  incode: "2EF",
  outcode: "N11",
  parliamentary_constituency: "Hornsey and Wood Green",
  admin_district: "Haringey",
  parish: "Haringey, unparished area",
  admin_county: null,
  date_of_introduction: "200512",
  admin_ward: "Bounds Green",
  ced: null,
  ccg: "NHS North Central London",
  nuts: "Haringey and Islington",
  pfa: "Metropolitan Police",
  codes: {
    admin_district: "E09000014",
    admin_county: "E99999999",
    admin_ward: "E05013586",
    parish: "E43000204",
    parliamentary_constituency: "E14000752",
    ccg: "E38000240",
    ccg_id: "93C",
    ced: "E99999999",
    nuts: "TLI43",
    lsoa: "E01001970",
    msoa: "E02000400",
    lau2: "E09000014",
    pfa: "E23000001",
  },
};

function Postcode() {
  return (
    <section className="w-[760px] uppercase mx-auto px-4 my-8 py-6">
      <div className="space-y-3 text-sm">
        <h1 className="text-xl font-bold">Postcode: {result.postcode}</h1>
        <p>Country: {result.country}</p>
        <p>Region: {result.region}</p>
        <p>Admin District: {result.admin_district}</p>
        <hr />
      </div>
    <h2 className="text-xl font-bold pt-8">Nearest Postcode to {'data'}</h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Postcode
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Country
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Postcode;
