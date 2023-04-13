echo "\033[32m<<<<<<<\n请填写备注信息：\n>>>>>>>\033[0m"
read remarks
if [ ! "$remarks" ]; then
  echo "\033[32m<<<<<<<\nremarks为空\n>>>>>>>\033[0m"
fi
echo $remarks
