import MainLayoutClient from "@/components/layouts/MainLayoutClient";

export default function MainLayout({ children }) {
    return (
        <MainLayoutClient>
            {children}
        </MainLayoutClient>
    );
}
