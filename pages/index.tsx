import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { cardData, exploreData, getExploreDataResults } from "../types";

export interface NearbyData {
  img: string;
  location: string;
  distance: string;
}

const Home: NextPage<{ exploreData: exploreData[]; cardsData: cardData[] }> = ({
  exploreData,
  cardsData,
}) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

/** Server rendering - static rendering **/
// export async function getStaticProps() {
//   const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

/** Server rendering - static rendering **/
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();

  const res2 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = await res2.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};

export default Home;
