import benchmark from 'benchmark'

import moment from 'moment'

const { Suite } = benchmark;

let suite = new Suite()

const INPUT = '2022-09-12T18:11:04.884+05:00'

suite
  .add('moment#parseZone', () => moment.parseZone(INPUT))
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()