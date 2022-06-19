import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "../layout";
import BaseRoutes from "./BaseRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <BaseRoutes />
      </PageLayout>
    </BrowserRouter>
  );
};

export default Routes;
