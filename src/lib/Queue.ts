import { Queue } from "bullmq";
// import redisConfig from "../config/redis";
import * as jobs from "../jobs";

// const queues = Object.values(jobs).map(job => ({
//   bullmq: new Queue(job.key),
//   name: job.key,
//   handle: job.handle,
// }));

// export default {
//   queues,
//   add(name, data) {
//     const queue = this.queues.find(queue => queue.name === name);
//     return queue.bullmq.add(data);
//   }
// };

// const mailQueue = new Queue(RegistrationMail.key, {
//   connection: redisConfig
// });
const mailQueue = new Queue(jobs.RegistrationMail.key);

export default mailQueue;
