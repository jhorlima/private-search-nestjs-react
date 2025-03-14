import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Header } from "@components/common/Header";
import { Content } from "@components/common/Content";
import { Footer } from "@components/common/Footer";
import { SearchHistoric } from "@components/historic/SearchHistoric";
import { Drawer, DrawerContent, DrawerSide } from "@components/common/Drawer";

export const RouteRoot = createRootRoute({
  component: () => (
    <>
      <Drawer className="drawer-end lg:drawer-open h-full">
        <DrawerContent className="flex flex-col justify-between h-full">
          <Header />
          <Content>
            <Outlet />
          </Content>
          <Footer />
        </DrawerContent>
        <DrawerSide className="z-20">
          <SearchHistoric />
        </DrawerSide>
      </Drawer>
      <TanStackRouterDevtools />
    </>
  ),
});
