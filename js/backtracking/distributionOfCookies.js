/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
      let ans = Infinity;
    
    const helper = (cookies, k, cur, count) => {
        if (cur === cookies.length) {
            let res = 0;
            for (let ele of count) {
                res = Math.max(res, ele);
            }
            ans = Math.min(ans, res);
            return;
        }

        for (let i = 0; i < k; i++) {
            count[i] += cookies[cur];
            helper(cookies, k, cur + 1, count);
            count[i] -= cookies[cur];
        }
    };

    const count = new Array(k).fill(0);
    helper(cookies, k, 0, count);

    return ans;
};
