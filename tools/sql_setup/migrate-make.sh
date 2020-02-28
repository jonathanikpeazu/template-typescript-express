MIGRATION_FILENAME=$1
THIS_ENV=$2
THIS_ENV=${THIS_ENV:-development}

NODE_ENV=$THIS_ENV npx babel-node --extensions ".js,.ts" \
"${BASH_SOURCE%/*}/../../node_modules/knex/bin/cli" \
--knexfile "${BASH_SOURCE%/*}/../../knexfile.js" \
migrate:make -x ts ${MIGRATION_FILENAME}
