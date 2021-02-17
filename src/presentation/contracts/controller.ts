import { HttpResponse } from "@/presentation/contracts";

export interface Controller {
  handle: (request: any) => Promise<HttpResponse>
}