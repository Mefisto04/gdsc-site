import React from "react";
import Image from "next/image";
import Image1 from "../public/team.svg";
import Team from "./Team";

const PastEvents = () => {
  const events = [
    {
      id: 1,
      name: "Event 1",
      image: Image1,
      date: "January 1, 2023",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Event 2",
      image: Image1,
      date: "February 15, 2023",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Event 3",
      image: Image1,
      date: "March 22, 2023",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Event 4",
      image: Image1,
      date: "April 10, 2023",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      name: "Event 5",
      image: Image1,
      date: "May 5, 2023",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      name: "Event 6",
      image: Image1,
      date: "June 20, 2023",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="container mx-auto py-10 h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">Past Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={event.image}
                  alt={event.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl p-2"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <p className="text-sm text-gray-700">{event.information}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Team />
    </>
  );
};

export default PastEvents;
