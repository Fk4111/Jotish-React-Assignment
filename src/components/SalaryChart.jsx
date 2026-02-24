import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function SalaryChart({ employees }) {
    
    const data = {
        labels: employees.slice(0,10).map(emp => emp[1]), // yahan hum emplyess ke naam ko as labels show krenge sirf 10 emp ke liye
        datasets:[
            {
                label: "Salary", // yahan hum salary ko as a dataset show krenege
                data: employees.slice(0,10).map(emp => Number(emp[3])), // yahan hum salary ko as data show krenge sirf 10 emp ke liye 👌
                backgroundColor: "rgba(79, 70, 229, 0.7)"
            },
        ],
    };

  return <Bar data={data}/>
}