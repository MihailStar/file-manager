# Учебные задания «Разработка на Node.js». File Manager

```bash
npm start -- --username=<your_username>
```

## Команды

```bash
help

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
```

## Опции

| Команда | Флаг                                                                                                      | Назначение            | Тип     | Умолчание |
| ------- | --------------------------------------------------------------------------------------------------------- | --------------------- | ------- | --------- |
| ls      | [isNameTruncated](https://github.com/MihailStar/node-bas-3/blob/master/02/src/executor/ls-executor.ts#L5) | Усекать длинные имена | boolean | true      |
