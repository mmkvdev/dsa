/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 * https://leetcode.com/problems/koko-eating-bananas/description/
 */
var minEatingSpeed = function(piles, h) {
    const validate = (mid) => {
        let ans = 0;
        for (let pile of piles) {
            ans += Math.floor(pile / mid);

            if (pile % mid !== 0) {
                ans++;
            }
        }

        return ans <= h;
    }

    let low = 1, high = Math.max.apply(null, piles);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (validate(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}
