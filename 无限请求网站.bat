@echo off


set URL=https://mtyxt.com/r


cls
echo Function: Request MTyXT
echo=
set count=1
set var=null
set /a rand=%random%
set TempLocation=Chache/%rand%
rmdir /s /q Chache
md Chache
goto loop
:loop
echo [%date% %time%]loop:%count%
echo TempFile saved to %TempLocation%
echo File Content: %var%
echo=
echo TempLog:
set /a count=%count%+1
wget %URL% -O Chache/%rand%
set /P var=<Chache/%rand%
del Chache/%rand%
cls
goto loop