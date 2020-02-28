THIS_ENV=$1
SEED_FILENAME=$2
THIS_ENV=${THIS_ENV:-development}

NODE_ENV=${THIS_ENV} npx babel-node --extensions ".js,.ts" \
"${BASH_SOURCE%/*}/../../node_modules/.bin/knex" seed:run --specific=${SEED_FILENAME} \
--knexfile "${BASH_SOURCE%/*}/knexfile.js"
