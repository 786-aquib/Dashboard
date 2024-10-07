import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

// Define the type for the record prop
interface Record {
    effectiveTime: number; // Adjust type as needed based on your data
}

// Define the props for the EffectiveTimeIndicator component
interface EffectiveTimeIndicatorProps {
    record: Record;
}

const EffectiveTimeIndicator: React.FC<EffectiveTimeIndicatorProps> = ({ record }) => {
    const progressValue = Math.min((record.effectiveTime / 12) * 100, 100); // Assuming max time is 12 hours
    const progressColor =
        record.effectiveTime < 4 ? 'red' :
        record.effectiveTime >= 4 && record.effectiveTime < 9 ? 'yellow' :
        'green';

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {/* Primary Circular Progress */}
            <CircularProgress
                variant="determinate"
                value={progressValue}
                size={20}
                sx={{
                    color: progressColor,
                    marginLeft: '4px',
                    marginRight: '4px',
                }}
            />
            {/* Conditional Rendering for Effective Time > 9 */}
            {record.effectiveTime > 9 && (
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={1}>
                    <CircularProgress
                        variant="determinate"
                        value={100} // Complete (full)
                        size={18}
                        sx={{
                            color: 'orange',
                        }}
                    />
                    <Typography variant="caption" sx={{ marginLeft: 1 }}>
                        9 hours
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default EffectiveTimeIndicator;
