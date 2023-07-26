/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import Header from "../../components/layout/header/index";
import Footer from "../../components/layout/footer";
import { useAppDispatch } from "app/hooks";
import { getWorkerList } from "api/workerList.api";
import { useState, useEffect } from "react";

export interface CustomerHomePageProps {}

export default function CustomerHomePage(props: CustomerHomePageProps) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getWorkerList()
      .then((res) => {
        console.log((res.data as any).data);
        
        // if ((res.data as any).data) {
        //   dispatch({ type: getUserInfo((res.data as any).data.data).type, payload: (res.data as any).data.data })
        // }
      }
      )
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }, []);
  return (
    <div>
      <Header />
      <>
        <div className="container mx-auto mb-16 w-3/5 mt-32 border-b-4 border-gray-400 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center justify-center sm:justify-start gap-6">
              <div className="min-h-[140px] overflow-x-scroll rounded-lg py-8 pl-5 lg:overflow-visible">
                <img
                  className="inline-block h-20 w-20 rounded-full object-cover object-left"
                  alt="Image placeholder"
                  src="https://www.material-tailwind.com/img/face-2.jpg"
                />
              </div>
              <div className="">
                <h2 className="font-bold text-2xl">Anh Bien Le</h2>
                <h6 className="text-gray-400 text-xl">JavaScript Developer</h6>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-auto w-4/5 rounded-lg"
                src="https://miro.medium.com/v2/resize:fit:1200/1*BPSx-c--z6r7tY29L19ukQ.png"
                alt="image description"
              />
            </div>
          </div>
          <div className="flex justify-between m-auto w-1/2 ml-5">
            <div>
              <p className="text-yellow-600">$40/hr</p>
              <p>Salary</p>
            </div>
            
            <div>
              <p className="text-green-600">Free</p>
              <p>Status</p>
            </div>
            <div>
              <p>Cam Le - Da Nang</p>
              <p>Address</p>
            </div>
          </div>
          <div className="m-10">
            <p className="font-bold text-xl">Description: </p>
            <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur accusantium deleniti placeat, aperiam quidem ex, harum pariatur, ullam sed exercitationem eos? Ut rerum debitis voluptates ipsa eveniet exercitationem sunt corporis.</p>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
}
