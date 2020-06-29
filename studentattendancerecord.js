//Objective is to see whether a student's attendance record is clean.
//It is clean if it has no more than 2 absences (A) as well as no more than 
//2 lates (L) in a row.

let s = "PPALLP"


//O(n) solution that does a two-pass on the string. Once to check the 
//absence count and again to check for simultaneous lates.

let absentCount = 0

//Simple pass to check for absences
for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'A') {
        absentCount++
    }
}
 
//Return false if there's more than one absence
if (absentCount > 1) {
    return false
}
    
let start = 0
let end = 3
    
//Sliding window to check for lates
while (end <= s.length) {
    let substring = s.substring(start, end)
    let map = {}
        
    //Map out the frequencies of the letters in the substring
    for (let i = 0; i < substring.length; i++) {
        if (map[substring.charAt(i)] == undefined) {
            map[substring.charAt(i)] = 1
        } else {
            map[substring.charAt(i)]++
        }
    }
        
    //If more than 2 lates show up, return false
    if (map['L'] > 2) {
        return false
    }
        
    start++
    end++
}
    
return true
