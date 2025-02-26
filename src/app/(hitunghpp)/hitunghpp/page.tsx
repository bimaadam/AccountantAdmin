import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

interface Produk {
    id: number;
    nama: string;
    harga: number;
    jumlah: number;
}

const HitungHPP = () => {
    const inventory: Produk[] = [
        { id: 1111, nama: "Laptop", harga: 100.000, jumlah: 10 },
        { id: 2222, nama: "CPU", harga: 100.000, jumlah: 10 },
        { id: 3333, nama: "Mouse", harga: 100.000, jumlah: 10 }
    ];
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Hitung HPP" />
            <div className="h-screen text-center">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border font-bold px-4 py-2">Kode Barang</th>
                            <th className="border font-bold px-4 py-2">Nama Barang</th>
                            <th className="border font-bold px-4 py-2">Jumlah</th>
                            <th className="border font-bold px-4 py-2">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.nama}</td>
                                <td className="border px-4 py-2">{item.jumlah}</td>
                                <td className="border px-4 py-2">{item.harga}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
};

export default HitungHPP;
