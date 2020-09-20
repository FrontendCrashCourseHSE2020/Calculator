### Установка nodejs

1. В корне проекта из терминала вызовите `./npmw install` (Linux, MacOS) / `powershell.exe -noprofile -executionpolicy bypass -file .\npmw.ps1 install` (Windows)
1. Укажите путь к nodejs в среде разработки


### NPM скрипты 

Для Windows используйте `powershell.exe -noprofile -executionpolicy bypass -file .\npmw.ps1` вместо `./npmw`, e.g.:
`powershell.exe -noprofile -executionpolicy bypass -file .\npmw.ps1 serve`

```
# Запуск сборки приложения и веб-сервера:
$ ./npmw serve

# Сборка приложения без минификации: 
$ ./npmw run build

# Сборка приложения с минификацией: 
$ ./npmw run build:prod

# Запуск тестов
$ ./npmw run test
```
