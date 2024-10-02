import React from 'react';
import { Circle } from 'rc-progress';

interface DonutProps {
    values: [number, string][];
    bgColor: string;
    lineWidth: number;
    height: number;
    width: number;
}

const Donut: React.FC<DonutProps> = ({ values, bgColor, lineWidth, height, width }) => {
    const totalValue = values.reduce((sum, [value]) => sum + value, 0);
    const calculatedValues = values.map(([value, color]) => ({
        percentage: (value / totalValue) * 100,
        color,
    }));

    return (
        <div style={{ position: 'relative', width, height, backgroundColor: bgColor, borderRadius: '50%', overflow: 'hidden' }}>
            {calculatedValues.map(({ percentage, color }, index) => (
                <Circle
                    key={index}
                    percent={percentage}
                    strokeWidth={lineWidth}
                    strokeColor={color}
                    trailColor="transparent"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
            ))}
        </div>
    );
};

export default Donut;
