import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostCode } from "../helpers/api";

type PostCode = {
  postcode: string;
  country: string;
  region: string;
  admin_district: string;
};

interface Idata {
  postcode: {
    result: PostCode;
  };
  nearestPostCode: {
    result: [PostCode];
  };
}

function Postcode() {
  const { code } = useParams();
  const [data, setData] = useState<Idata>();

  useEffect(() => {
    const getData = async () => {
      if (code) {
        const codes = await getPostCode(code);
        setData(codes);
      }
    };
    getData();
  }, [code]);

  return (
    <>
      {data && (
        <section className="w-[760px] uppercase mx-auto px-4 my-8 py-6">
          <div className="space-y-3 text-sm">
            <h1 className="text-xl font-bold">
              Postcode: {data.postcode.result.postcode}
            </h1>
            <p>Country: {data.postcode.result.country}</p>
            <p>Region: {data.postcode.result.region}</p>
            <p>Admin District: {data.postcode.result.admin_district}</p>
            <hr />
          </div>
          <h2 className="text-xl font-bold pt-8">Nearest Postcode to N11 EQ</h2>
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
                      {data.nearestPostCode.result.map((d, i) => (
                        <tr key={i} className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {d.postcode}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">{d.country}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Postcode;
