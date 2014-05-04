uskin:
# Make Sure grunt has been installed locally
	grunt default 

clean:
# Clean generated css files
	grunt clean

watch:
# Watch all the less files, once modified, recompile uskin.less with Less
	grunt watch

.PHONY: uskin clean watch