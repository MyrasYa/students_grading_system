function StatsCard({
  title,
  value,
  bgColor,
  txtColor,
  wrapTitleColor,
  cardWidth,
  className
}) {
  return (
    <div className={`${bgColor} shadow-md relative ${cardWidth} h-20 ${className}`}>
      <div className="relative">
        <div className="absolute top-0 right-0 w-fit overflow-hidden ">
          <p
            className={`${txtColor} ${wrapTitleColor} rounded-bl-2xl font-thin text-sm text-right p-2 opacity-70`}
          >
            {title}
          </p>
        </div>
      </div>

      <h1 className="bottom-1 left-3 absolute font-bold text-4xl">{value}</h1>
    </div>
  );
}

export default StatsCard;
