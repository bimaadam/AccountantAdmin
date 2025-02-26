import React from 'react';
import ClientButton from './ClientButton';
import { Metadata } from 'next';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

export const metadata: Metadata = {
    title: "Accountant | Bima Adam"
}

interface Barang {
    id: number;
    nama: string;
    jumlah: number;
    harga: number;
}

const Accountant: React.FC = () => {
    const inventory: Barang[] = [
        { id: 1, nama: "CPU", jumlah: 10, harga: 5000 },
        { id: 2, nama: "Mouse", jumlah: 5, harga: 10000 },
        { id: 3, nama: "Monitor", jumlah: 20, harga: 2000 },
        { id: 4, nama: "Keyboard", jumlah: 10, harga: 1000 }
    ];

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Accountant" />
            <div className="container mx-auto px-4 h-screen">
                <h1 className="text-2xl font-bold mb-4">Daftar Barang</h1>
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Nama Barang</th>
                            <th className="border px-4 py-2">Jumlah</th>
                            <th className="border px-4 py-2">Harga Satuan</th>
                            <th className="border px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.nama}</td>
                                <td className="border px-4 py-2">{item.jumlah}</td>
                                <td className="border px-4 py-2">{item.harga}</td>
                                <td className="border px-4 py-2">{item.jumlah * item.harga}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ClientButton />
            </div>
        </DefaultLayout>
    );
};

export default Accountant;
