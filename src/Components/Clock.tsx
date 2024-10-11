interface ClockArrowProps {
  angle?: number;
  rotationPeriod?: number;
  length?: "1/2" | "1/3" | "1/4" | "3/4" | "4/5" | "5/6" | "7/8";
}

const lengthToHeightClass = {
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "1/4": "h-1/4",
  "3/4": "h-3/4",
  "4/5": "h-4/5",
  "5/6": "h-5/6",
  "7/8": "h-7/8",
};

const ClockArrow = (props: ClockArrowProps) => {
  const heightClass = lengthToHeightClass[props.length || "1/2"];

  return (
    <div
      style={
        {
          "--tw-rotate-start": `${props.angle || 0}deg`,
          "--tw-rotate-period": `${props.rotationPeriod || 60}s`,
        } as React.CSSProperties
      }
      className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 flex w-1/40 flex-col-reverse h-1/2 bg-transparent transform origin-bottom animate-spin-variable"
    >
      <div className={`bg-red-400 w-full ${heightClass}`}></div>
    </div>
  );
};
interface HourMarkerProps {
  className?: string;
  style?: React.CSSProperties;
}

const HourMarker = (props: HourMarkerProps) => {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 left-1/2 flex flex-col content-between h-full w-1/30 justify-between ${props.className}`}
      style={props.style}
    >
      <div className={"bg-red-400 w-3 h-3 -translate-x-1/2 -translate-y-1/2"}></div>
      <div className={"bg-red-400 w-3 h-3 -translate-x-1/2 -translate-y-1/2"}></div>
    </div>
  );
};

const Clock = () => {
  const date = new Date();
  const hourMarkers = [];
  for (let i = 0; i < 6; i++) {
    hourMarkers.push(
      <HourMarker
        key={i}
        className="custom-rotate"
        style={{ "--angle": `${i * 30}deg` } as React.CSSProperties}
      />,
    );
  }
  return (
    <div className="relative w-1/2 aspect-square bg-transparent rounded-full">
      {hourMarkers}
      <ClockArrow
        angle={date.getSeconds() * 6}
        rotationPeriod={60}
        length="7/8"
      />
      <ClockArrow
        angle={date.getMinutes() * 6}
        rotationPeriod={3600}
        length="3/4"
      />
      <ClockArrow
        angle={date.getHours() * 30}
        rotationPeriod={3600 * 24}
        length="1/2"
      />
      <div className={"w-1/20 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full bg-black relative top-1/2 left-1/2"} />
      <div className={"w-full -translate-x-1/2 -translate-y-1/2 h-full bg-amber-200 rounded-full relative left-2.5  -z-10"}></div>
    </div>
  );
};

export default Clock;
