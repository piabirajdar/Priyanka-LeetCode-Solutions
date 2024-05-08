class Solution:
    def nextBeautifulNumber(self, n: int) -> int:
        for i in range(n+1, 1224445):
            if self.isGood(i):
                return i
        return -1
    
    def isGood(self, num: int) -> bool:
        s = str(num)
        count_map = {}
        for char in s:
            count_map[char] = count_map.get(char, 0)+1
        
        for char, count in count_map.items():
            if int(char) != count:
                return False
        return True

        
