import fs from 'fs';

export const parseInput = () => {
    const lines = fs.readFileSync('src/4/input-a.txt').toString().split('\n')
    const parsedLines = lines.map(line => {
        return {
            timestamp: new Date(line.substring(1, 17)),
            type: line.includes('falls') ? "SLEEP" : line.includes("wakes") ? "WAKE" : "GUARD",
            guardId: line.includes('Guard') ? line.split(' ')[3] : ''
        }
    });
    
    const sortedLines = parsedLines.sort((a, b) => a.timestamp - b.timestamp)
    const sleepyGuard = findSleepiestGuard(sortedLines)
    const commonMinute = findCommonMinute(sleepyGuard);
    return Number(sleepyGuard.id.substring(1, sleepyGuard.length)) * commonMinute;
}

export const findSleepiestGuard = (entries) => {
    const guardStore = {};
    let currentGuardId;
    let startSleep;
    entries.forEach(entry => {
        if(entry.type === 'GUARD') {
            currentGuardId = entry.guardId;
        } else if(entry.type === 'SLEEP') {
            startSleep = entry.timestamp
        } else if(entry.type === 'WAKE') {
            if(!guardStore[currentGuardId]) {
                guardStore[currentGuardId] = {
                    sleep: [],
                    id: currentGuardId
                }
            }
            guardStore[currentGuardId].sleep.push([startSleep.getMinutes(), entry.timestamp.getMinutes()]);
            guardStore[currentGuardId].total = guardStore[currentGuardId].sleep.reduce((acc, sleepEntry) => acc + (sleepEntry[1] - sleepEntry[0]), 0);
        }
    });
    let max = 0;
    let maxGuard;
    Object.values(guardStore).forEach(guard => {
        if(guard.total > max) {
            max = guard.total;
            maxGuard = guard;
        }
    })

    return maxGuard;
}

export const findCommonMinute = (guard) => {
    let maxMinuteOverlapCount = 0;
    let commonMinute;
    for(let i = 0; i < 60; i++) {
        let minuteOverlapCount = 0;
        guard.sleep.forEach(sleepEntry => {
            if(i >= sleepEntry[0] && i < sleepEntry[1]) {
                minuteOverlapCount++
            }
        })
        if(minuteOverlapCount > maxMinuteOverlapCount) {
            maxMinuteOverlapCount = minuteOverlapCount;
            commonMinute = i;
        }
    }

    return commonMinute;
}