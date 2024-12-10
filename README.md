# playwright-e2e
http://www.webdriveruniversity.com/

# Run in Docker:
- Build the Docker Image
`docker build -t playwright-tests .`

- Run the Tests in Docker 
`docker run --rm -it playwright-tests`

- Access the Test Report
`docker run --rm -it -p 9323:9323 playwright-tests npx playwright show-report --host=0.0.0.0`

