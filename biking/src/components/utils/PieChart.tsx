import { Typography } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';



interface PieCharProp {
    loanAmount: number;
    interestRate: number;
    tenure: number;
}

const COLORS = ['#00C49F', '#FF8042'];

const PieChartComponent: React.FC<PieCharProp> = ({ loanAmount, interestRate, tenure }) => {

    const simpleInterst = Math.round((loanAmount * interestRate * tenure) / 100);
    const totalAmount = (loanAmount + simpleInterst);
    const emiPerMonth = Math.round(totalAmount / (tenure * 12)); 

    const data = [
        { name: 'Loan', value: loanAmount },
        { name: 'Interest', value: simpleInterst }
    ];

    return (

        <div>
            <div>
                <PieChart width={400} height={200}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div>
                <ul style={{ listStyleType: 'disc' }}>
                    <li style={{ color: '#00C49F', width: "fit-content", margin: "0 auto" }}>Principal Loan Amount: ₹ {loanAmount.toLocaleString()}</li>
                    <li style={{ color: '#FF8042', width: "fit-content", margin: "0 auto" }}>Total Interest Payable: ₹ {simpleInterst.toLocaleString()}</li>
                </ul>
            </div>
            <div>
            <Typography fontSize={18} fontWeight={"bold"} className='text-gray-500' marginTop={2}>
                ₹ {emiPerMonth.toLocaleString()} EMI for {tenure} years
              </Typography>
            </div>
        </div>
    );
};

export default PieChartComponent;
