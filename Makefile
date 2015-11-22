build:
# Make Sure grunt has been installed locally
	grunt build

clean:
# Clean generated css files
	grunt clean

watch:
# Watch all the less files, once modified, recompile uskin.less with Less
	grunt watch

generate_font:
# Generate web font
	grunt font

test:
# Run tests
	grunt test

.PHONY: build clean watch generate_font test
