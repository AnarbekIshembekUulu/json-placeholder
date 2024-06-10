import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header/Header";
import Catalog from "./pages/Сatalog/Catalog";
import { Customers } from "./pages/Customers/Customers";
import { CardImages } from "./components/CardImages/CardImages";

export const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<span>Loading.....</span>}>
                <Routes>
                    <Route path="/images" element={<Catalog />} />
                    <Route path="/users" element={<Customers />} />
                </Routes>
            </Suspense>
        </>
    );
};
