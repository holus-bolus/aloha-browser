export interface FeatureData {
  feature: string;
  aloha: boolean;
  brave: boolean;
  opera: boolean;
  chrome: boolean;
  safari: boolean;
}

export interface Categories {
  security: FeatureData[];
  web3: FeatureData[];
  tools: FeatureData[];
}
