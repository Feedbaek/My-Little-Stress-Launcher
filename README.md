# My-Little-Stress-Launcher
k6 + prometheus + grafana 부하 테스트 자동화 프로젝트


## 사용 방법
1. stress.js 파일을 수정하여 부하 테스트 시나리오를 작성합니다.
2. `docker compose up -d` 명령어로 docker를 실행합니다.
3. http://localhost:3000/ 에 접속하여 Grafana 대시보드를 확인합니다.



## 부하 테스트 재시작
`docker compose start k6` 명령어를 사용해서 k6 컨테이너만 실행 할 수 있습니다.
