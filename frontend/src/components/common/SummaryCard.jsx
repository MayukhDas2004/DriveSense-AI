function SummaryCard({
  title,
  value,
  unit = "",
  icon: Icon,
  iconColor = "text-cyan-400",
  valueColor = "text-cyan-400",
  trend = "",
  trendColor = "text-green-400",
}) {
  return (
    <div
  className="
  relative
  overflow-hidden
  group
  bg-slate-900/80
  backdrop-blur-xl
  border border-slate-700
  rounded-3xl
  p-6
  shadow-xl
  hover:shadow-cyan-500/30
  hover:border-cyan-400
  transition-all
  duration-300
  hover:-translate-y-2
"
>

  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
      {/* Top Section */}
      <div className="flex justify-between items-start gap-4">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${valueColor}`}>
            {value}
            <span className="text-xl ml-1">
              {unit}
            </span>
          </h2>

         <div
  className={`inline-flex mt-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 ${trendColor}`}
>
  {trend}
</div>
        </div>

        <div
  className="
  w-16
  h-16
  rounded-2xl
  bg-gradient-to-br
  from-slate-800
  to-slate-700
  flex
  items-center
  justify-center
  shadow-lg
  group-hover:scale-110
  group-hover:rotate-6
  transition-all
  duration-300
"
>
          {Icon && <Icon className={`text-3xl ${iconColor}`} />}
        </div>

      </div>
    </div>
  );
}

export default SummaryCard;