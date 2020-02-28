THIS_ENV=$1
SEED_FILENAME=$2
THIS_ENV=${THIS_ENV:-development}

npx babel-node --extensions ".js,.ts" \
"${BASH_SOURCE%/*}/../../node_modules/knex/bin/cli" \
--knexfile "${BASH_SOURCE%/*}/knexfile.js" \
seed:run --specific=${SEED_FILENAME}
