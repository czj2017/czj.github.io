/*1:给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

var nums = [2, 11, 15, 7, 41], target = 17;
function getOne (num, target){
    var that = [];
    for(var i = 0; i < num.length; i ++){
        var dValue = target - num[i];
        if(dValue > 0){
            if(num.indexOf(dValue) > -1 ){
                that[0] = i;
                that[1] = num.indexOf(dValue);
                break;
            } 
        }
    }
    return that;
}
console.log(getOne(nums,target))
*/
/*2:
//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
var arr = [0,1,0,2,1,0,1,3,2,1,2,1];
var trap = function(arr) {
        var orgin = 0,
            orginflag = !0,
            over = 0,
            overflag = !0,
            count = 0,
            h;
        for(var i = 0; i < arr.length; i ++){
            if(arr[i] > 0 && orginflag){
                orgin = i;
                orginflag = !orginflag;
                h = arr[orgin];
            }else if(!orginflag){
                while(overflag){
                    for(var j = orgin + 1; j < arr.length; j ++){
                        if(arr[j] > h){
                           over = j;
                           overflag = !overflag;
                           break 
                        }
                    }
                    h --;
                }
            }
            if(!orginflag && !overflag)
            {
                var _min = Math.min(arr[over],arr[orgin])
                for(var z = orgin + 1; z < over; z ++){   
                  var _index = _min - arr[z];
                  count += _index;
                }
                i = over - 1;
                orginflag = !orginflag;
                overflag = !overflag;
            }
        }
        return count;
};
trap(arr)
*/
/*
// 3：给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
var str = 'fd33dfahfkkpbovcjxgojrpwoetrjepo'
var lengthOfLongestSubstring = function(str) {
    var strWrap = [];
    var maxReturn = '';
    for(var i = 0; i < str.length; i ++){
        for(var j = i + 1; j < str.length + 1; j ++){
            if(!getSame(str.slice(i, j))){ // i~j区间有重复 i 到 大于j 均不符合要求
                strWrap.push(str.slice(i, j))
            }else{
                i += 1;//直接跳到 i + 1计算 优化项目
            }
        }
    }
    function getSame(str){
        for(var i = 0; i < str.length; i ++){
            if(str.indexOf(str.slice(i, i + 1)) != str.lastIndexOf(str.slice(i, i + 1))){
                return true;
            }
        }
        return false;
    }
    function maxOne(arr){
        for(var i = 0; i < arr.length; i ++){
            if(arr[i].length > maxReturn.length){
                maxReturn = arr[i]
            }
        }
        return maxReturn.length;
    }
    return maxOne(strWrap)
};

var dd = lengthOfLongestSubstring(str)


//优化2.0
var lengthOfLongestSubstring = function(str) {
    var strWrap = [];
    var maxReturn = '';
    for(var i = 0; i < str.length; i ++){
        for(var j = i + 1; j < str.length + 1; j ++){
            if(!getSame(str.slice(i, j))){ // i~j区间有重复 i 到 大于j 均不符合要求
                if(str.slice(i, j).length > maxReturn.length){
                    maxReturn = str.slice(i, j);
                }
            }else{
                i += 1;//直接跳到 i + 1计算 优化项目
            }
        }
    }
    function getSame(str){
        for(var i = 0; i < str.length; i ++){
            if(str.indexOf(str.slice(i, i + 1)) != str.lastIndexOf(str.slice(i, i + 1))){
                return true;
            }
        }
        return false;
    }
    return maxReturn.length
};
*/
// 4:给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000
var str = 'dfdsfasdfdtreqvdgfdafdfsdafdgdsafgdsa';
function twoSame(str){
    var len =  str.length
}