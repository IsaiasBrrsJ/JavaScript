//Create a range function
//range(5) -> [1,2,3,4,5];
//range(6,11) -> [6,7,8,9,10,11];
//range(10, 19, 2) -> [10, 12, 14, 16, 18];
//range(6, 2) -> [6,5,4,3,2];
//range(8,-3,4) -> [8,4,0];

let range = (...nums) => {
    let result = [];
    let increment = 1;

    if (nums[2] !== undefined) { increment = nums[2]; };
    
    if (nums[1] == undefined && nums[2] == undefined) {
        for (let i = 1; i <= nums[0]; i++){
            result.push(i);
        }
    }
    else if (nums[0] <= nums[1]) {
        while (nums[0] <= nums[1]) {

            result.push((nums[0] += increment) - increment);
        }
    }
    else {
        for (let i = nums[0]; (i >= increment) || i == 0; i-= increment){
            
            result.push(i);

               if (nums[1] == i) {
                break;
            }

        }
    }
    console.log(result);
}

range(5);
range(6, 11);
range(10, 19, 2);
range(6, 2);
range(8, -3, 4);