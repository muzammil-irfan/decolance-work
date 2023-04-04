import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GeneralLayout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}
