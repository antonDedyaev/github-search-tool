install:
	npm install

deploy:
	npx gh-pages -d build

lint:
	npx stylelint ./src/scss/*.scss --fix
	npx stylelint ./build/css/*.css --fix
	npx htmlhint ./src/**/*.html