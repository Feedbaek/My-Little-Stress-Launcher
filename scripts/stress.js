import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  scenarios: {
    five_vus_api: {
      executor: 'constant-vus',
      exec: 'fiveGuys',
      vus: 5,
      duration: '1m',
    },
    ten_vus_api: {
      executor: 'ramping-vus',
      exec: 'tenGuys',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 10 },
        { duration: '30s', target: 0  },
      ],
    },
  },
};

export function fiveGuys() {
  let res = http.get('http://host.docker.internal:8080/api/hello');
  check(res, { 'fiveGuys ok': (r) => r.status === 200 });
  sleep(1);
}

export function tenGuys() {
  let res = http.get('http://host.docker.internal:8080/api/hello');
  check(res, { 'tenGuys ok': (r) => r.status === 200 });
  sleep(1);
}
