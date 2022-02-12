

export function filtering(
    arr=[],
    config={name:null, personality:null, gender:null}){

    const {name, personality, gender} = config;
    
    if(name || personality || gender) {

        const filtered_arr = arr.filter((o)=> {
            var cond = true;
                if(name) {
                    cond = cond && o.name.includes(name);
                }
                if(personality) {
                    cond = cond && o.personality.includes(personality);
                }
                if(gender) {
                    cond = cond && o.gender.includes(gender);
                }
            return cond;

        }) 
        return filtered_arr;
    } else {
        return [];
    }
}

// const acnh = require('./ac-villagers.json')

// var villagers = filtering(acnh, {
//     personality: "Cranky"
// })

// console.log(villagers)