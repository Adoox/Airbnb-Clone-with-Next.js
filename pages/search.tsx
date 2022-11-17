import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import format from "date-fns/format";
import { SearchQueryData, SearchResult } from "../types";
import { GetServerSideProps } from "next";
import SearchCard from "../components/SearchCard";

export default function Search({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  console.log(searchResults);
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
      <Header
        placeholder={`${location} | ${startDate} - ${endDate} | ${numberOfGuests}`}
      />
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

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <SearchCard
                key={item.img}
                description={item.description}
                img={item.img}
                lat={item.lat}
                long={item.long}
                location={item.location}
                price={item.price}
                star={item.star}
                title={item.title}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults: searchResults,
    },
  };
};
