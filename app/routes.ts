import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("AboutUs", "./routes/AboutUs.tsx"), 
    ...prefix("Countries", [
        index("./routes/Countries.tsx"),
        route(":CountryName", "./routes/Country.tsx")
    ])
] satisfies RouteConfig;
