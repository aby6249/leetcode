class Solution(object):
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        smallest=nums[0]

        for i in nums:
            if i <=smallest:
                smallest = i
        return smallest