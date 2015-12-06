#!/bin/bash
# CSC, Code Style Checker

FILE="pre-commit"

cd $(dirname $0)
cd ../.git/hooks

if [ ! -e $FILE ]
  then
    touch $FILE
    chmod +x $FILE
fi

echo -e "#!/bin/bash\n\n# CSC, Code Style Checker\n\nnpm run eslint" > $FILE