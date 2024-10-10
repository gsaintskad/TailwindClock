interface hourMarksProps {
  angle?: number;
}

const HourMarks = (props: hourMarksProps) => {
  return <div className={`flex w-3 flex-col h-1/2 bg-amber-200 ${props.angle!>=0?'':'-'}rotate-${props.angle!}`}></div>;
};
//relative top-1/2 left-1/2
const Clock = () => {
  return (
    <div className="w-1/2 aspect-square bg-blue-400 rounded-full">
     <HourMarks angle={150}/>
    </div>
  );
};
export default Clock;
