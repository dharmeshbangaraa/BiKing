import React from 'react';
import CircularProgress from '@mui/joy/CircularProgress';

const CircularRatingBar: React.FC = () => {
    return (
        <div>
            <CircularProgress
                size="lg"
                determinate
                value={75}
                variant={"soft"}
                sx={{
                    "@media (max-width: 600px)": {
                       marginTop: 2
                    }
                }
                }
            >
                4
            </CircularProgress>
        </div>
    );
}

export default CircularRatingBar;
