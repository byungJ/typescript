{
    // Array
    const fruits: string[] = ['ð', 'ð'];
    const scroes: Array<number> = [1,2,3,4];
    function printArray(fruits: readonly string[]) {}

    // Tuple(ìë¡ ë¤ë¥¸ íìì ë£ì ì ììµëë¤) => interface, type alias, class
    let student: [string, number];
    student = ['eggpotato', 123];
    student[0]; // name
    student[1]; // 123

    // ë³ìë¥¼ ì ì¸ í ë¤ì.
    // ì²«ë²ì§¸ ê°ì´ nameì¼ë¡ ëë²ì§¸ ê°ì´ ageë¡ ë¤ì´ê°ëë¤.
    const [name, age] = student;

    let [k1, k2, k3] = [1, 2, 3];
    console.log(k1); // 1
    console.log(k2); // 2
    console.log(k3); // 3
}