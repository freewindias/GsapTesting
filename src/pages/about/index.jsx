'use client'

import Layout from "@/components/layout";
import styles from "./about.module.css";
import { useEffect } from "react";
import Intro from "@/components/aboutcompo/Intro";
import Description from "@/components/aboutcompo/Description";
import Timeline from "@/components/aboutcompo/Timeline";

export default function About() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Layout title="About">
      <Intro />
      <Description />
      {/* <Timeline /> */}
    </Layout>
  );
}
