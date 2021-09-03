import { api } from "../api";
import { ISnkr } from "./types";

class FakeApiServices {
  static async getAll(): Promise<ISnkr[]> {
    const { data } = await api.get<ISnkr[]>("/snkrs");
    return data;
  }
}

export { FakeApiServices };
