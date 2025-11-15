import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const Header = () => {
  return (
    <section className="header">
      <div className="title font-bold gap-2 justify-center text-4xl pb-2 items-center flex">
        <TiWeatherPartlySunny />
        <h1 className="text-(--foreground)">Weather App</h1>
      </div>
      <p className="text-sm text-(--muted-foreground) md:text-md">
        Search for any city to see real-time weather conditions
      </p>
    </section>
  );
};

export default Header;
