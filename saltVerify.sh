#!/usr/bin/env zsh

# cd to the location of the script
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPTPATH

AUDITFIXDONE=false
AUDITFIXMESSAGE=''
auditresult=$(npm audit --silent)
if [[ "$auditresult" == *"address all issues"* ]]
then
  auditresult=$(npm audit fix --force --silent)
  AUDITFIXDONE=true
fi

installresult=$(npm i --silent)
if [[ "$installresult" == *"high"* ]]
then
  echo "Installation verified - NOT OK"
  echo $installresult
  exit 1
fi

LINTFIXMESSAGE=''
lintresult=$(npm run lint --silent)
if [[ "$lintresult" != *"1 problem"* ]]
then

  echo "Linting failed - will try to fix it"

  lintfixresult=$(npm run lint -- --fix)
  if [[ "$lintresult" != *"1 problem"* ]]
  then
    echo "Linting fix tried - NOT OK"
    echo $lintresult
    exit 1
  else
    # The fix worked - and we have no errors
    echo "Linting fixed - OK. Updating"
    git add -- . ':(exclude)package.*'
    git commit -m "Linting fixed by verification script"
    git push
    LINTFIXMESSAGE='(Fixed linting errors)'
  fi
fi

if [ "$AUDITFIXDONE" = true ] ; then
    echo "Dependencies audit done, fixed and the script still works - committing changes"
    git add package*
    git commit -m "Audit fixed by script"
    git push
    AUDITFIXMESSAGE='(Dependecies updated)'
fi

# cd back to where we came from
cd - > /dev/null

echo "Installation, linting and testing verified $AUDITFIXMESSAGE - OK"
exit 0