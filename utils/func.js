

export function filtering(
    arr=[],
    config={name:null, personality:[], hobby:[], gender:[]}){

        console.log('called???')

    const {name, personality, gender} = config;

    
    if(name || personality || gender) {

        const filtered_arr = arr.filter((o)=> {
            var cond = true;
                if(name) {
                    cond = cond && o.name.includes(name);
                }
                if(personality) {
                    cond = cond && personality.includes(o.personality);
                }
                // if(hobby) {
                //     cond = cond && hobby.includes(o.hobby);
                // }
                // if(gender) {
                //     cond = cond && gender.includes(o.gender);
                // }
            return cond;

        }) 
        return filtered_arr;
    } else {
        return [];
    }
}

// const acnh = require('./ac-villagers.json')

// const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))


// var villagers = filtering(acnhList, {
//     personality: "Cranky"
// })

// console.log(villagers.slice(0,2))

export function GoToPage(p=1, acnhList=[], num=10) {

    // p will be 1 so we do -1 to get books 0-5
    const lists = acnhList.slice((p-1)*num, p*num);

    console.log(lists);
    return lists;

}
// cd into utils folder and type "node func, it will show the functions results"

//GoToPage(1) will get me books 0-5
//GoToPage(2) will get me books 5-10
// GoToPage(2);

