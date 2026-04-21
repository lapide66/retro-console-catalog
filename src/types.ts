export interface ConsoleSpecs {
  cpu: string;
  gpu: string;
  ram: string;
  media: string;
  resolution: string;
}

export interface ConsoleLaunch {
  price: string;
  source: string;
}

export interface ConsoleSales {
  total: string;
  source: string;
}

export interface ConsoleDimensions {
  size: string;
  weight: string;
}

export interface ConsoleData {
  id: string;
  name: string;
  generation: number;
  manufacturer: string;
  releaseYear: number;
  specs: ConsoleSpecs;
  launch: ConsoleLaunch;
  sales: ConsoleSales;
  dimensions: ConsoleDimensions;
  retrocompatibility: string;
  connectivity: string;
  brazilCuriosity: string;
  imageUrl: string;
}

export interface Generation {
  number: number;
  name: string;
  consoles: ConsoleData[];
}
