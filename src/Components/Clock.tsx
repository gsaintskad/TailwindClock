interface hourMarksProps {
  angle?: number;
  rotationPeriod?: number;
}

const ClockArrow = (props: hourMarksProps) => {
  return (
    <div
      style={
        {
          "--tw-rotate-start": `${props.angle || 0}deg`,
          "--tw-rotate-period": `${props.rotationPeriod || 60}s`,
        } as React.CSSProperties
      }
      className="absolute left-1/2  flex w-3 flex-col lef h-1/2 bg-amber-200 transform origin-bottom animate-spin-variable"
    ></div>
  );
};

const Clock = () => {
  return (
    <div className="relative w-1/2 aspect-square bg-blue-400 rounded-full">
      <ClockArrow angle={30} rotationPeriod={15} />
      <ClockArrow angle={10} />
    </div>
  );
};
export default Clock;
