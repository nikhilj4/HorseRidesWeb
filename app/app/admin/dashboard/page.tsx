'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Users, Calendar, DollarSign, TrendingUp,
    MoreHorizontal, Clock, ArrowUpRight, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock Data
const analyticsData = {
    monthly: { bookings: 145, revenue: 217500, growth: 12 },
    weekly: { bookings: 32, revenue: 48000, growth: 5 }, // avg 48000 INR
    yearly: { bookings: 1850, revenue: 2775000, growth: 24 }
};

const recentBookings = [
    { id: 1, name: "Arun Kumar", package: "Sunset Ride", date: "2024-03-10", time: "17:00", guests: 2, status: "Confirmed", amount: 4000 },
    { id: 2, name: "Sarah Jenkins", package: "Guided Horse Ride", date: "2024-03-11", time: "10:00", guests: 4, status: "Pending", amount: 6000 },
    { id: 3, name: "Rajesh Singh", package: "Jeep Safari", date: "2024-03-12", time: "09:00", guests: 6, status: "Confirmed", amount: 15000 },
    { id: 4, name: "Priya Menon", package: "Night Camping", date: "2024-03-15", time: "18:00", guests: 2, status: "Confirmed", amount: 6000 },
    { id: 5, name: "Tom Wilson", package: "Beginner Lesson", date: "2024-03-16", time: "08:00", guests: 1, status: "Completed", amount: 1200 },
    { id: 6, name: "Anita Desai", package: "Guided Horse Ride", date: "2024-03-18", time: "11:00", guests: 3, status: "Pending", amount: 4500 },
];

export default function AdminDashboard() {
    const router = useRouter();
    const [period, setPeriod] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');

    useEffect(() => {
        // Simple client-side auth check
        const isAdmin = localStorage.getItem('isAdmin');
        // Also check cookie if you want
        if (!isAdmin) {
            router.push('/admin/login');
        }
    }, [router]);

    const currentStats = analyticsData[period];

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 p-6 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-heading tracking-tight">Overview</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, here's what's happening with your business.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1">
                            {(['weekly', 'monthly', 'yearly'] as const).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPeriod(p)}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${period === p
                                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        }`}
                                >
                                    {p.charAt(0).toUpperCase() + p.slice(1)}
                                </button>
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => {
                                localStorage.removeItem('isAdmin');
                                router.push('/admin/login');
                            }}
                            className="ml-2"
                        >
                            Log out
                        </Button>
                    </div>
                    {/* Mobile Period Selector */}
                    <div className="flex md:hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-1 w-full">
                        {(['weekly', 'monthly', 'yearly'] as const).map((p) => (
                            <button
                                key={p}
                                onClick={() => setPeriod(p)}
                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${period === p
                                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                                        : 'text-gray-500'
                                    }`}
                            >
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Analytics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Bookings */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:border-blue-100 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Calendar className="w-24 h-24 text-blue-500 transform rotate-12 translate-x-4 -translate-y-4" />
                        </div>
                        <div className="flex items-center justify-between mb-4 relative z-10">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Bookings</h3>
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Calendar className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 relative z-10">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{currentStats.bookings}</span>
                            <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" />{currentStats.growth}%
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-4 font-medium">Compared to last {period.slice(0, -2)}</p>
                    </div>

                    {/* Total Revenue */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:border-green-100 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <DollarSign className="w-24 h-24 text-green-500 transform rotate-12 translate-x-4 -translate-y-4" />
                        </div>
                        <div className="flex items-center justify-between mb-4 relative z-10">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Revenue</h3>
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <DollarSign className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 relative z-10">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">₹{(currentStats.revenue / 1000).toFixed(1)}k</span>
                            <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" />{currentStats.growth + 2.5}%
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-4 font-medium">Compared to last {period.slice(0, -2)}</p>
                    </div>

                    {/* Active Users/Guests */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:border-purple-100 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users className="w-24 h-24 text-purple-500 transform rotate-12 translate-x-4 -translate-y-4" />
                        </div>
                        <div className="flex items-center justify-between mb-4 relative z-10">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Guests Served</h3>
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <Users className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3 relative z-10">
                            <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{Math.floor(currentStats.bookings * 2.5)}</span>
                            <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                <ArrowUpRight className="w-3 h-3 mr-1" />18%
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-4 font-medium">Compared to last {period.slice(0, -2)}</p>
                    </div>
                </div>

                {/* Recent Bookings List */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="p-6 md:px-8 md:py-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/30">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white font-heading">Recent Bookings</h2>
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{recentBookings.length} new</span>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="hidden sm:flex h-9 text-xs font-medium">
                                <Filter className="w-3.5 h-3.5 mr-2" /> Filter
                            </Button>
                            <Button variant="ghost" size="sm" className="h-9 text-xs text-blue-600 hover:text-blue-700 font-bold hover:bg-blue-50">View All</Button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <th className="px-8 py-5 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-gray-50/50">Customer</th>
                                    <th className="px-6 py-5 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-gray-50/50">Details</th>
                                    <th className="px-6 py-5 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-gray-50/50">Date</th>
                                    <th className="px-6 py-5 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-gray-50/50">Amount</th>
                                    <th className="px-6 py-5 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-gray-50/50">Status</th>
                                    <th className="px-6 py-5 text-xs font-semibold text-gray-500 uppercase tracking-widest bg-gray-50/50 text-right"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-8 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-4">
                                                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm
                                    ${booking.id % 2 === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700' : 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700'}`}>
                                                    {booking.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{booking.name}</div>
                                                    <div className="text-xs text-gray-500">{booking.guests} guests</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                                                {booking.package}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            {booking.date} <span className="text-gray-400 mx-1">•</span> <span className="text-gray-700">{booking.time}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-gray-100">
                                            ₹{booking.amount.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${booking.status === 'Confirmed' ? 'bg-green-50 text-green-700 border-green-200' :
                                                    booking.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                        'bg-gray-100 text-gray-700 border-gray-200'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${booking.status === 'Confirmed' ? 'bg-green-500' :
                                                        booking.status === 'Pending' ? 'bg-yellow-500' :
                                                            'bg-gray-500'
                                                    }`}></span>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-300 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
