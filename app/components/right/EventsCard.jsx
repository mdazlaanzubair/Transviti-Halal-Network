import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const EventsCard = ({ title, date, pricing, location }) => {
  return (
    <div className="card w-full bg-base-100 border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="flex flex-row justify-between items-center gap-3">
          <div className="flex flex-row justify-center items-center gap-3">
            <span className="text-primary">
              <BsCalendarEvent />
            </span>
            {date}
          </div>
          <strong>{pricing}</strong>
        </p>
        <div className="card-actions justify-end">
          <p className="flex flex-row justify-between items-center gap-3">
            <div className="flex flex-row justify-center items-center gap-3 text-base-content opacity-60">
              <span>
                <HiOutlineLocationMarker />
              </span>
              {location}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
