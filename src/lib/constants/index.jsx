import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Produk',
		label: 'Produk',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'Pesanan',
		label: 'Pesanan',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Pelanggan',
		label: 'Pelanggan',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Transaksi',
		label: 'Transaksi',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'Inbox',
		label: 'Inbox',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'Pengaturan',
		label: 'Pengaturan',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'bantuan',
		label: 'Bantuan',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
