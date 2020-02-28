MIGRATION_FILENAME=$1

npx babel-node --extensions ".js,.ts" \
"${BASH_SOURCE%/*}/../../node_modules/knex/bin/cli" \
--knexfile "${BASH_SOURCE%/*}/knexfile.js" \
migrate:make -x ts ${MIGRATION_FILENAME}
