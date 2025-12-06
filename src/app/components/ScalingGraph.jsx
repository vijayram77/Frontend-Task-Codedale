"use client";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const data = [
  { value: 10 },
  { value: 18 },
  { value: 12 },
  { value: 28 },
  { value: 45 },
  { value: 52 },
  { value: 70 },
];

export default function ScalingGraph() {
  return (
    <div className="w-full min-h-0 h-56 rounded-2xl relative overflow-hidden group">
      {/* Title */}
      <h2 className="text-2xl font-semibold absolute top-4 left-6">
        Scaling
      </h2>

      {/* Growth Highlight */}
      <span className="absolute top-6 right-6 text-green-600 font-medium">
        Growth Highlight
      </span>

      {/* Dashed line */}
      <div className="absolute w-full top-28 group-hover:top-16 transition-all ease-in duration-200 left-0 border-t border-dashed border-green-600"></div>

      {/* Animated Chart */}
      <div
        className="
          w-[150%] h-full 
          transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]
          translate-x-[0%]
          group-hover:translate-x-[-25%]
        "
      >
        <ResponsiveContainer width="100%" height={224}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8ED384" stopOpacity={0.8}/>
                <stop offset="85%" stopColor="#8ED384" stopOpacity={0.85}/>
              </linearGradient>
            </defs>

            {/* <Tooltip cursor={false} /> */}

            <Area
              type="monotone"
              dataKey="value"
              stroke="#4ade80"
              strokeWidth={3}
              fill="url(#greenGradient)"
              isAnimationActive={true}
              animationDuration={1400}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
