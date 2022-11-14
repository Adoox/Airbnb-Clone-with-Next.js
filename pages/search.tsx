import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Zenica</h1>
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
