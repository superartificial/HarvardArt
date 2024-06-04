'use client';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const ColorPie = ({ colors }: { colors: HarvardColorInfo[] }) => {

    if (!colors) return;

    // colors = colors.filter(color => color.percent > 0.01)

    return (
        <>
            <ResponsiveContainer minHeight="500px">
                <PieChart  >
                    <Pie
                        data={colors}
                        cx={220}
                        cy={200}
                        innerRadius={30}
                        outerRadius={180}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="percent"
                        nameKey="hue"

                    >
                        {colors.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

export default ColorPie