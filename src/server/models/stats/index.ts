import { StatsData } from "@/server/schemas/stats";

export type StatsImplementation = {
  getStats: () => Promise<StatsData>;
};
