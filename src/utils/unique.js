export const unique = (arr1, arr2, uniqueArr) => {
    for (let i = 0; i < arr1.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
                j--;
                flag = 1;
            }
        }
 
        if (flag == 0) {
            uniqueArr.push(arr1[i]);
        }
    }
    uniqueArr.push(arr2);
    return uniqueArr;
}