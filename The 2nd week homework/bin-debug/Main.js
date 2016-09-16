console.log("Please give a number!");
BuildPyramid(4);
void function BuildPyramid(n) {
    var i;
    var j;
    var k;
    var x = " ";
    var y = "*";
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - (i + 1); j++) {
            console.log(x);
        } //画前空格
        for (k = 0; k < i + 1; k++) {
            console.log(y);
            if (k < i) {
                console.log(x);
            }
        } //画*串
        for (j = 0; j < n - (i + 1); j++) {
            console.log(x);
        } //画后空格
        console.log("\n");
    }
};
