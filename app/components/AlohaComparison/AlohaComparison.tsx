import React, { useState } from "react";
import "./AlohaComparison.css";
import { Categories } from "@/app/components/AlohaComparison/types";

const AlohaComparison: React.FC = () => {
  const [category, setCategory] = useState<keyof Categories>("security");

  const categories = {
    security: [
      {
        feature: "Private browsing on by default",
        aloha: true,
        brave: true,
        opera: true,
        chrome: false,
        safari: false,
      },
      {
        feature: "Built-in VPN",
        aloha: true,
        brave: false,
        opera: true,
        chrome: false,
        safari: false,
      },
      {
        feature: "Full device VPN",
        aloha: true,
        brave: false,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Private mode + VPN combo",
        aloha: true,
        brave: false,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Ad block on by default",
        aloha: true,
        brave: true,
        opera: true,
        chrome: false,
        safari: false,
      },
      {
        feature: "Tracking protection on by default",
        aloha: true,
        brave: true,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Real-time privacy report",
        aloha: true,
        brave: false,
        opera: false,
        chrome: false,
        safari: true,
      },
    ],
    web3: [
      {
        feature: "Built-in Crypto Wallet",
        aloha: true,
        brave: true,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Support for DApps",
        aloha: true,
        brave: true,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Blockchain-based ID",
        aloha: false,
        brave: true,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Web3 Browsing",
        aloha: true,
        brave: true,
        opera: false,
        chrome: false,
        safari: false,
      },
      {
        feature: "Token Swapping",
        aloha: true,
        brave: true,
        opera: false,
        chrome: false,
        safari: false,
      },
    ],
    tools: [
      {
        feature: "Built-in Ad Blocker",
        aloha: true,
        brave: true,
        opera: true,
        chrome: false,
        safari: false,
      },
      {
        feature: "Tracking Protection",
        aloha: true,
        brave: true,
        opera: true,
        chrome: false,
        safari: false,
      },
      {
        feature: "Password Manager",
        aloha: true,
        brave: true,
        opera: true,
        chrome: false,
        safari: true,
      },
      {
        feature: "Sync Across Devices",
        aloha: true,
        brave: true,
        opera: true,
        chrome: true,
        safari: true,
      },
      {
        feature: "Customizable UI",
        aloha: true,
        brave: true,
        opera: true,
        chrome: true,
        safari: false,
      },
    ],
  };

  return (
    <section className="aloha-comparison">
      <h2 className="subheading aloha-comparison__title">
        Aloha vs other browsers
      </h2>
      <p className="description aloha-comparison__description">
        We don't just talk the talk. Here is a look at <br />
        how we stack up against other browsers
      </p>
      <div className="buttons">
        <button
          className={category === "security" ? "active" : ""}
          onClick={() => setCategory("security")}
        >
          Security and privacy
        </button>
        <button
          className={category === "web3" ? "active" : ""}
          onClick={() => setCategory("web3")}
        >
          Web3
        </button>
        <button
          className={category === "tools" ? "active" : ""}
          onClick={() => setCategory("tools")}
        >
          Utility and tools
        </button>
      </div>
      <table className="comparison-table">
        <thead>
          <tr className="no-border">
            <th></th>
            <th>
              <div className="table-header">
                <img src="/images/comparison/aloha.svg" alt="Aloha" />
                <span>Aloha</span>
              </div>
            </th>
            <th>
              <div className="table-header">
                <img src="/images/comparison/brave.svg" alt="Brave" />
                <span>Brave</span>
              </div>
            </th>
            <th>
              <div className="table-header">
                <img src="/images/comparison/opera.svg" alt="Opera" />
                <span>Opera</span>
              </div>
            </th>
            <th>
              <div className="table-header">
                <img src="/images/comparison/chrome.svg" alt="Chrome" />
                <span>Chrome</span>
              </div>
            </th>
            <th>
              <div className="table-header">
                <img src="/images/comparison/safari.svg" alt="Safari" />
                <span>Safari</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories[category].map((item, index) => (
            <tr key={index}>
              <td className="description">{item.feature}</td>
              <td>
                {item.aloha ? (
                  <img src="/images/comparison/yes.svg" alt="✓" />
                ) : (
                  <img src="/images/comparison/no.svg" alt="✗" />
                )}
              </td>
              <td>
                {item.brave ? (
                  <img src="/images/comparison/yes.svg" alt="✓" />
                ) : (
                  <img src="/images/comparison/no.svg" alt="✗" />
                )}
              </td>
              <td>
                {item.opera ? (
                  <img src="/images/comparison/yes.svg" alt="✓" />
                ) : (
                  <img src="/images/comparison/no.svg" alt="✗" />
                )}
              </td>
              <td>
                {item.chrome ? (
                  <img src="/images/comparison/yes.svg" alt="✓" />
                ) : (
                  <img src="/images/comparison/no.svg" alt="✗" />
                )}
              </td>
              <td>
                {item.safari ? (
                  <img src="/images/comparison/yes.svg" alt="✓" />
                ) : (
                  <img src="/images/comparison/no.svg" alt="✗" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AlohaComparison;
