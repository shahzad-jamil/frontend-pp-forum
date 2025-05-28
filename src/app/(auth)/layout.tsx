import Header from "../../components/layouts/auth/Header";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header classes="lg:hidden"/>
                <div className="flex flex-grow flex-col ">
                    {children}
                </div>
            </div>
        </>
    );
}
