import { createRouter } from "@tanstack/react-router";
import { queryClient } from "../utils";
import { RouteRoot } from "../routes/__root";
import { homeRoute } from "../routes/home";
import { resultsRoute } from "../routes/results";

const routeTree = RouteRoot.addChildren([homeRoute, resultsRoute]);

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
