"use client";
import "./hero.css";
import SayHello from "@/app/components/SayHello/SayHello";
import Advantages from "@/app/components/Advantages/Advantages";
import BigPrivacy from "@/app/components/BigPrivacy/BigPrivacy";
import AdditionalAdvantages from "@/app/components/AdditionalAdvantages/AdditionalAdvantages";
import Hero from "@/app/components/Hero/Hero";
import AlohaPremium from "@/app/components/AlohaPremium/AlohaPremium";
import AlohaComparison from "@/app/components/AlohaComparison/AlohaComparison";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <SayHello />
      <Advantages />
      <BigPrivacy />
      <AdditionalAdvantages />
      <AlohaPremium />
      <AlohaComparison />
    </main>
  );
}
