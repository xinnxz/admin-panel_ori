import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
	  id: '1',
	  product_id: '4324',
	  customer_id: '23143',
	  customer_name: 'Sherly Nurazizah',
	  order_date: '2022-05-17T03:24:00',
	  order_total: 'Rp 435.500,00',
	  current_order_status: 'PLACED',
	  shipment_address: 'Cianjur, East Java, Indonesia'
	},
	{
	  id: '2',
	  product_id: '5432',
	  customer_id: '54321',
	  customer_name: 'Budi S. Susilo',
	  order_date: '2022-05-18T10:12:00',
	  order_total: 'Rp 675.750,00',
	  current_order_status: 'SHIPPED',
	  shipment_address: 'Jakarta, Indonesia'
	},
	{
	  id: '3',
	  product_id: '8765',
	  customer_id: '98765',
	  customer_name: 'Dewi K. Wijaya',
	  order_date: '2022-05-19T15:45:00',
	  order_total: 'Rp 225.250,00',
	  current_order_status: 'DELIVERED',
	  shipment_address: 'Surabaya, East Java, Indonesia'
	},
	{
	  id: '4',
	  product_id: '9876',
	  customer_id: '54321',
	  customer_name: 'Hendro P. Siregar',
	  order_date: '2022-05-20T09:30:00',
	  order_total: 'Rp 1.200.000,00',
	  current_order_status: 'PLACED',
	  shipment_address: 'Bandung, West Java, Indonesia'
	},
	{
	  id: '5',
	  product_id: '1234',
	  customer_id: '23143',
	  customer_name: 'Luthfi Alfaridz',
	  order_date: '2022-05-21T12:18:00',
	  order_total: 'Rp 480.750,00',
	  current_order_status: 'SHIPPED',
	  shipment_address: 'Medan, North Sumatra, Indonesia'
	},
	{
	  id: '6',
	  product_id: '4321',
	  customer_id: '87654',
	  customer_name: 'Janwar Saputra',
	  order_date: '2022-05-22T05:56:00',
	  order_total: 'Rp 980.000,00',
	  current_order_status: 'DELIVERED',
	  shipment_address: 'Yogyakarta, Indonesia'
	},
	{
	  id: '7',
	  product_id: '8756',
	  customer_id: '65432',
	  customer_name: 'Erlan Saputra',
	  order_date: '2022-05-23T18:27:00',
	  order_total: 'Rp 750.350,00',
	  current_order_status: 'PLACED',
	  shipment_address: 'Semarang, Central Java, Indonesia'
	},
	{
	  id: '8',
	  product_id: '4356',
	  customer_id: '12345',
	  customer_name: 'Hendra K. Wijaya',
	  order_date: '2022-05-24T14:09:00',
	  order_total: 'Rp 375.600,00',
	  current_order_status: 'SHIPPED',
	  shipment_address: 'Bali, Indonesia'
	},
	{
	  id: '9',
	  product_id: '3456',
	  customer_id: '98765',
	  customer_name: 'Siti P. Rahayu',
	  order_date: '2022-05-25T07:42:00',
	  order_total: 'Rp 1.680.000,00',
	  current_order_status: 'DELIVERED',
	  shipment_address: 'Makassar, South Sulawesi, Indonesia'
	},
	{
	  id: '10',
	  product_id: '9876',
	  customer_id: '54321',
	  customer_name: 'Firdaus S. Pratama',
	  order_date: '2022-05-26T20:15:00',
	  order_total: 'Rp 550.800,00',
	  current_order_status: 'PLACED',
	  shipment_address: 'Palembang, South Sumatra, Indonesia'
	}
  ]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>ID Produk</th>
							<th>Nama Pelanggan</th>
							<th>Tanggal</th>
							<th>Total</th>
							<th>Alamat</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
