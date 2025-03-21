import React from 'react'
import { Link } from "react-router-dom";
import PageNotFound from 'shared/assets/images/page-not-found.png'
import {Button} from "@/components/ui/button";

const Page404 = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div>
        <div>
          <div>
            <div className="text-center">
              <img src={PageNotFound} alt="Page Not Found" className="h-full w-[450px]" />
              <div className="mt-12 btn btn-warning rounded-full font-semibold text-lg">
                <Link to='/' className=" px-10">
                  Home
                </Link>
              </div>
              <Button>
                <Link to='/' className="">
                  Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page404
