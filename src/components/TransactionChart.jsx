import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Pengeluaran: 4000,
		Penghasilan: 2400
	},
	{
		name: 'Feb',
		Pengeluaran: 3000,
		Penghasilan: 1398
	},
	{
		name: 'Mar',
		Pengeluaran: 2000,
		Penghasilan: 9800
	},
	{
		name: 'Apr',
		Pengeluaran: 2780,
		Penghasilan: 3908
	},
	{
		name: 'May',
		Pengeluaran: 1890,
		Penghasilan: 4800
	},
	{
		name: 'Jun',
		Pengeluaran: 2390,
		Penghasilan: 3800
	},
	{
		name: 'July',
		Pengeluaran: 3490,
		Penghasilan: 4300
	},
	{
		name: 'Aug',
		Pengeluaran: 2000,
		Penghasilan: 9800
	},
	{
		name: 'Sep',
		Pengeluaran: 2780,
		Penghasilan: 3908
	},
	{
		name: 'Oct',
		Pengeluaran: 1890,
		Penghasilan: 4800
	},
	{
		name: 'Nov',
		Pengeluaran: 2390,
		Penghasilan: 3800
	},
	{
		name: 'Dec',
		Pengeluaran: 3490,
		Penghasilan: 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transaksi</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Penghasilan" fill="#0ea5e9" />
						<Bar dataKey="Pengeluaran" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
