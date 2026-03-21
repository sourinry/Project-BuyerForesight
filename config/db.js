import * as memoryRepo from '../repository/userMemoryRepository.js';
import * as fileRepo  from '../repository/userFileRepository.js';

const repoMap = {
  memory: memoryRepo,
  file: fileRepo
};

export default repoMap[process.env.DB_TYPE] || memoryRepo;