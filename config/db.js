import * as memoryRepo from '../repository/userMemoryRepository.js';
import * as fileRepo from '../repository/userFileRepository.js';

const repoMap = {
  memory: memoryRepo,
  file: fileRepo
};

const DB_TYPE = process.env.DB_TYPE || 'memory';

console.log("DB_TYPE:", DB_TYPE); // debug purpose

export default repoMap[DB_TYPE];