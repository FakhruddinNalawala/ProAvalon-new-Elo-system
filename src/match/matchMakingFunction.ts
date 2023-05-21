import { MatchMakingQueueItem } from '../match/queue';

export const avg = (values: number[]) => {
  return values.reduce((sum, current) => sum + current, 0) / values.length;
};

export const variance = (values: number[], waitingTime: number[]) => {
  const waitingPeriod = 60000; // 60 seconds for now, can change latter ( wait up to 1 mins)
  const average = avg(values);
  const squareDiffs = values.map((value, index) => {
    let diff = value - average;
    const timeDiff = waitingTime[index];

    // decrease the variance
    if (timeDiff > waitingPeriod) {
      diff = Math.abs(diff) * (waitingPeriod / timeDiff);
    }
    return diff * diff;
  });
  const variance = avg(squareDiffs);
  return variance;
};

export function matchMakePlayers(queue: MatchMakingQueueItem[]) {
  console.log('start matching...');

//   const queue = rankedQueue.get();
  if (queue.length < 6) {
    return;
  }

  const sortedRating = queue.map(({ playRating }) => playRating);
  const waitingTime = queue.map(({ joinAt }) => Date.now() - joinAt);
  const window = 6; // 6 players for now

  let validVariance = 1000; // players rating points variance

  let min = +Infinity;
  let playerIndex = -1;

  for (let index = 0; index < sortedRating.length - window + 1; index++) {
    const v = variance(
      sortedRating.slice(index, index + window),
      waitingTime.slice(index, index + window),
    );
    if (v < min) {
      min = v;
      playerIndex = index;
    }
  }

  if (min < validVariance) {
    // match found
    const matched = queue.slice(playerIndex, playerIndex + window);

    // Socket API will handle this
    // matched.forEach((player) => {
    //   rankedQueue.leave(player.id);
    // });
    // printQueue(rankedQueue.get());
    return matched;
  }
}

// export const debouncedMatch = debounce(matchMakePlayers, 3000);


// this part is done by socket API

// when someone join the queue
// rankedQueue.subscribe({
//   onJoin: (playerId) => {
//     console.log(`${playerId} joined`);
//     printQueue(rankedQueue.get());
//     debouncedMatch();
//   },
//   onLeave: (playerId) => {
//     console.log(playerId + ' left');
//     debouncedMatch();
//   },
//   subscriberId: 'match_making',
// });

