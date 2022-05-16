// Code your solution in this file!
function distanceFromHqInBlocks(startBlock) {
    // returns distance from starting street to HQ
    // in blocks
    return Math.abs(42 - startBlock);
}

function distanceFromHqInFeet(startBlock) {
    return distanceFromHqInBlocks(startBlock) * 264; 
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if( distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance <= 2500) {
        // test number
        return 25;
    } else {
        return 'cannot travel that far';
    }
}