import "dotenv/config";
import redisConfig from "./config/redis";
import Queue from "./lib/Queue";
import RegistrationMail from "./jobs/RegistrationMail";
import { Worker } from "bullmq";

const worker = new Worker(RegistrationMail.key, RegistrationMail.handle, { connection: redisConfig });

worker.on("failed", (job, error) => {
  console.log("Job failed", job?.name, job?.data);
  console.log(error);
});
