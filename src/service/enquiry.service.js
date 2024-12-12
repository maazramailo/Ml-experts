import { client } from "./client.service";

export async function postEnquiry(payload) {
  await client.post("/enquiry/", payload);
}
