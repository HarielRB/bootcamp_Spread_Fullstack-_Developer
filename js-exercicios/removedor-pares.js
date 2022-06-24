function removeOdd(arr = []) {
    if (arr.length === 0) {
        console.log("Array vazio!")
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i] % 2 === 0)
                arr[i] = 0;
        }
    }
    console.log(arr)

}