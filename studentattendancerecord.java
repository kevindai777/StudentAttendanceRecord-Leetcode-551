//Java Solution

class Solution {
    public boolean checkRecord(String s) {
        int abs = 0;
        int left = 0;
        int right = 3;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'A') {
                abs++;
            }
        }
        
        if (abs > 1) {
            return false;
        } 
        
        while (right <= s.length()) {
            String substring = s.substring(left++, right++);
            if (substring.equals("LLL")) {
                return false;
            }
        }
        
        return true;
    }
}