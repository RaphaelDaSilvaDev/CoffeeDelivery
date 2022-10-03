import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaltuLayout";
import { CheckOut } from "./pages/CheckOut";
import { FinishOrder } from "./pages/FinishOrder";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/finish-order" element={<FinishOrder />} />
      </Route>
    </Routes>
  );
}
