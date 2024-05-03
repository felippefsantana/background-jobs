import "dotenv/config";
import { Worker } from "bullmq";
import redisConfig from "./config/redis";
import Queue from "./lib/Queue";

Queue.queues.forEach(queue => {
  const worker = new Worker(
    queue.name,
    queue.handle,
    {
      connection: redisConfig
    }
  );

  worker.on("completed", (job) => {
    console.log("Job completed", job.name, job.data);
  });

  worker.on("failed", (job, error) => {
    console.log("Job failed", job?.name, job?.data);
    console.log(error);
  });
});

// const worker = new Worker(
//   Queue.name,
//   jobs.RegistrationMail.handle,
//   {
//     connection: redisConfig
//   }
// );
