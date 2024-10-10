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
  const date = new Date();

  console.log('ss');
  return (
    <div className="relative w-1/2 aspect-square bg-blue-400 rounded-full">
      <ClockArrow angle={date.getSeconds() * 6} rotationPeriod={60} />
      <ClockArrow angle={date.getMinutes() * 6} rotationPeriod={3600} />
      <ClockArrow angle={date.getHours() * 30} rotationPeriod={3600 * 24} />
    </div>
  );
};
export default Clock;
