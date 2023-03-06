//MAIN COMPONENT

import MainCap from "../components/main-img-cap";
import { MainHandk } from "../components/main-img-handk";
import { MainLace } from "../components/main-img-lace";
import { MainMugone } from "../components/main-img-mug";
import { MainMugtwo } from "../components/main-img-mugo";
import { MainTote } from "../components/main-img-tote";
import { MainPatch } from "../components/main-img-patch";
import { Link } from "react-router-dom";

export default function Main() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-10 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Unleash the style in your school uniform with <h1 className="text-orange-500">RTU Apparel</h1>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
               The one-stop e-commerce website for high-quality and affordable school uniforms.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 lg:gap-y-0">
                        <div className=" h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          
                         <MainCap/>
                        
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <MainHandk/>
                        </div>
                      </div>
                      <div className="mt-20 grid flex-shrink-0 grid-cols-1 lg:gap-y-0">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                         <MainPatch/>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          
                          <MainLace/>
                        </div>

                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <MainMugone/>
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 lg:gap-y-0">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <MainMugtwo/>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                         <MainTote/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to='signin' className="inline-block rounded-md border border-transparent bg-black py-3 px-8 text-center font-medium text-white hover:opacity-90">Show Now!</Link>
  
               
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  