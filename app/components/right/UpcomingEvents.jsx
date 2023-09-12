import Link from "next/link";
import EventsCard from "./EventsCard";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Dars-e-Quran",
      date: "6 Jan - 13 Jan, 2023",
      pricing: "$ 10",
      location: "Ottawa, Canada",
    },
    {
      title: "Islamic Book Festival",
      date: "9 Jan - 11 Jan, 2013",
      pricing: "Free",
      location: "Toronto, Canada",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <div className="w-full flex flex-row justify-between items-center gap-3">
        <span className="uppercase font-semibold text-base-content opacity-60">
          Upcoming Events
        </span>
        <Link
          href="#"
          className="capitalize font-semibold link-hover text-primary"
        >
          See all{" "}
        </Link>
      </div>
      {events.map((event, index) => (
        <EventsCard
          key={index}
          title={event.title}
          date={event.date}
          pricing={event.pricing}
          location={event.location}
        />
      ))}
    </div>
  );
};

export default UpcomingEvents;
