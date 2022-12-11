import { AbstractExecutor } from './abstract-executor.js';

class HelpExecutor extends AbstractExecutor {
  async executor() {
    const commandList = `
up
cd <directory_path>
ls

cat <file_path>
add <file_path>
rn <file_path> <file_path>
cp <file_path> <directory_path>
mv <file_path> <directory_path>
rm <file_path>

os --EOL
os --cpus
os --homedir
os --username
os --architecture

hash <file_path>

compress <file_path> <directory_path>
decompress <file_path> <directory_path>

.exit
`;

    console.log(commandList.trim());
  }
}

export { HelpExecutor };
