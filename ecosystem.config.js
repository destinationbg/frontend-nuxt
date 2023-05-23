/**
 *
 *  PM2 Options
 *
 *  exec_mode: "fork" or "cluster"
 *  instances: "max" or number of instances (integer)
 *
 *  Ref: https://pm2.keymetrics.io/docs/usage/cluster-mode/
 *
 */

module.exports = {
    apps: [
        {
            name: 'destination.bg',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
