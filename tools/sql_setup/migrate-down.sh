THIS_ENV=$1
THIS_ENV=${THIS_ENV:-development}

npx babel-node --extensions ".js,.ts" \
"${BASH_SOURCE%/*}/../../node_modules/knex/bin/cli" \
--knexfile "${BASH_SOURCE%/*}/knexfile.js" \
npx knex migrate:rollback \
