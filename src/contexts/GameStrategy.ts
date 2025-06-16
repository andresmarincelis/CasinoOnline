export interface GameStrategy {
  play: () => Promise<void>;
  // Aquí puedes agregar más métodos comunes que necesites para todos los juegos
}

export interface GameStrategyContext {
  strategy: GameStrategy;
  setStrategy: (strategy: GameStrategy) => void;
}
