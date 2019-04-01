# 使用方法 ./deploy.sh 版本参数(major、minor、patch)
#!/usr/bin/env bash
npm version $1 && \
    git push --follow-tags
