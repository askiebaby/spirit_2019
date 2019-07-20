
#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd view

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# 部署到 https://<USERNAME>.github.io/<REPO>
git push git@github.com:askiebaby/spirit_2019.git master:week1/pomodoro

cd -