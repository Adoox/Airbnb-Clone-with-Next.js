import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import format from "date-fns/format";
import { SearchQueryData } from "../types";

export default function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests }: SearchQueryData =
    router.query;
  // console.log(startDate);
  // console.log(endDate);
  // const formatedStartDate = format(new Date(startDate!), "dd MMMM yy");
  // const formatedEndDate = format(new Date(endDate!), "dd MMMM yy");
  // const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            500+ Stays - {startDate} - {endDate} - for {numberOfGuests} of
            guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-3 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filter-button">Cancellation Flexiblity</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and beds</p>
            <p className="filter-button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
