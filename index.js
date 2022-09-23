import moment from 'moment';

const INPUT = '2022-09-12T18:11:04.884+05:00'

const now = Date.now();
console.log("Starting benchmark");
for (let i = 0; i < 100000; i++) {
  moment.parseZone(INPUT)
}
const elapsed = Date.now() - now;
console.log("Finished benchmark in " + elapsed + "ms");
