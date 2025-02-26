
export default function HPPLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">

            </div>
            <div className="">{children}</div>
        </div>
    );
}