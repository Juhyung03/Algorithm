//🔁
//입력받기
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const v = Number(input[0]);

const indegree = Array(v + 1).fill(0);
const graph = Array.from({ length: v + 1 }, () => []);
const time = Array(v + 1).fill(0);
const result = Array(v + 1).fill(0);

// 각 강의의 간선 정보 입력
for (let i = 1; i <= v; i++) {
    const data = input[i].split(' ').map(Number);

    // 첫 번째 값 = 강의 시간
    time[i] = data[0];

    // 나머지 값 = 선수 강의 번호
    // -1은 종료 표시이므로 제외
    for (let j = 1; j < data.length - 1; j++) {
        const prerequisite = data[j];

        indegree[i]++;
        graph[prerequisite].push(i);
    }
}


// 위상 정렬
function topologySort() {
    const queue = [];

    // 처음부터 진입차수가 0인 노드를 큐에 삽입
    for (let i = 1; i <= v; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // 처음 강의 시간으로 초기화
    for (let i = 1; i <= v; i++) {
        result[i] = time[i];
    }

    let head = 0;

    // 큐가 빌 때까지 반복
    while (head < queue.length) {
        const now = queue[head++];

        // 현재 노드와 연결된 노드 확인
        for (const next of graph[now]) {

            // next 강의를 듣는 데 걸리는 최소 시간
            result[next] = Math.max(
                result[next],
                result[now] + time[next]
            );

            // 간선 제거
            indegree[next]--;

            // 진입차수가 0이 되면 큐에 삽입
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    // 결과 출력
    for (let i = 1; i <= v; i++) {
        console.log(result[i]);
    }
}

topologySort();